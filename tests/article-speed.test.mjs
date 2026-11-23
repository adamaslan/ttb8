import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('../app/components/article-listener.js',import.meta.url),'utf8');
function setup(saved,denied=false){
 const speed={value:'1',options:['0.75','1','1.25','1.5','1.75','2','2.5'].map(value=>({value}))};
 const store={value:saved,getItem(){if(denied)throw Error('storage denied');return this.value},setItem(k,v){if(denied)throw Error('storage denied');this.value=v}};
 const ctx={speed,localStorage:store,remaining(){},state:'idle'};vm.createContext(ctx);
 const start=source.indexOf("  const rateKey = 'article-listener.speed';");
 const end=source.indexOf("  if (!('speechSynthesis'",start);
 if(start>=0)vm.runInContext(source.slice(start,end),ctx);
 const handler=source.slice(source.indexOf('  speed.onchange = () => {'),source.indexOf("  panel.querySelector('[data-voice]').onchange"));
 vm.runInContext(handler,ctx);return {speed,store};
}
test('supported speed restores on the next article and saves changes',()=>{
 const {speed,store}=setup('2.5');assert.equal(speed.value,'2.5');speed.value='1.5';speed.onchange();assert.equal(store.value,'1.5');
});
test('invalid values and blocked storage preserve usable controls',()=>{
 assert.equal(setup('999').speed.value,'1');const {speed}=setup('2.5',true);assert.equal(speed.value,'1');speed.value='1.5';assert.doesNotThrow(()=>speed.onchange());assert.equal(speed.value,'1.5');
});
