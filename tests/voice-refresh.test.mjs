import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

for (const path of ['app/components/speech-support.js','public/speech-support.js']) {
  test(`${path}: voice refresh preserves fallback and URI choices`, () => {
    const code=fs.readFileSync(path,'utf8').replaceAll('export function','function');
    const context=vm.createContext({Option:class{constructor(text,value){this.text=text;this.value=value;}}});
    const voiceMenu=vm.runInContext(code+'\nvoiceMenu',context);
    const select={options:[],_value:'',get value(){return this._value;},set value(v){this._value=this.options.some(o=>o.value===v)?v:'';},replaceChildren(...items){this.options=items;this._value='';},add(o){this.options.push(o);}};
    let update;let voices=[{name:'Device A',lang:'en-US',voiceURI:''},{name:'Device B',lang:'en-US',voiceURI:''}];
    const synth={getVoices:()=>voices,addEventListener:(_,f)=>update=f,removeEventListener(){}};
    const menu=voiceMenu(select,synth);
    select.value='2';assert.equal(menu.selected().name,'Device B');
    update();assert.equal(select.value,'2');assert.equal(menu.selected().name,'Device B');
    voices.reverse();update();assert.equal(menu.selected().name,'Device B','no-URI reorder must preserve the chosen device voice');
    voices=voices.filter(v=>v.name!=='Device B');update();assert.equal(select.value,'','removed fallback voice returns to system default');
    voices=[{name:'Same',lang:'en-US',voiceURI:''}];update();select.value='1';voices=[voices[0],{...voices[0]}];update();assert.equal(select.value,'','ambiguous fallback identity must return to default');
    voices=[{name:'Stable A',lang:'en-US',voiceURI:'a'},{name:'Stable B',lang:'en-US',voiceURI:'b'}];update();select.value='b';voices.reverse();update();assert.equal(select.value,'b');assert.equal(menu.selected().name,'Stable B');
    voices=voices.filter(v=>v.voiceURI!=='b');update();assert.equal(select.value,'');menu.dispose();
  });
}
