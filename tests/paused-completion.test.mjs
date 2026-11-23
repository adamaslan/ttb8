import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
for(const [name,path,pattern] of [
 ['article','../app/components/article-listener.js',/utterance\.onend = (\(\) => \{[\s\S]*?\n    \});/],
 ['queue','../public/listening-queue.js',/u\.onend = (\(\) => \{.*\});/]
]){
 const source=readFileSync(new URL(path,import.meta.url),'utf8');
 for(const state of ['paused','playing'])test(`${name} completion respects ${state} state`,()=>{
  const c={state,token:3,generation:3,startTimer:null,active:{},startedAt:1,elapsed:4,index:0,part:0,speaks:0,clearTimeout(){},speak(){c.speaks++}};vm.createContext(c);
  vm.runInContext('('+source.match(pattern)[1]+')()',c);
  assert.equal(c.speaks,state==='paused'?0:1);assert.equal(name==='article'?c.index:c.part,1);assert.equal(c.active,null);
 });
}
test('finished queue Play all returns to first article without bypassing text-ready tap',()=>{
 const source=readFileSync(new URL('../public/listening-queue.js',import.meta.url),'utf8');
 const c={state:'finished',index:1,queue:[{path:'/first'},{path:'/last'}],loadedPath:'/last',part:5,calls:[],load(){c.calls.push(['load',c.index])},cancel(){c.calls.push(['cancel'])},speak(){c.calls.push(['speak'])}};vm.createContext(c);
 vm.runInContext('('+source.match(/function playSelected\(\) \{([\s\S]*?)\n  \}/)[0]+')()',c);
 assert.equal(c.index,0);assert.deepEqual(c.calls,[['load',0]]);
});
