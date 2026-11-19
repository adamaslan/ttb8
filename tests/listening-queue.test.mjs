import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
let code=await readFile(new URL('../public/listening-queue.js',import.meta.url),'utf8');
const support=await readFile(new URL('../public/speech-support.js',import.meta.url),'utf8');
code=code.replace("'./speech-support.js'",JSON.stringify('data:text/javascript;base64,'+Buffer.from(support).toString('base64')));
const {chunkText,publicPath}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const manifest=JSON.parse(await readFile(new URL('../public/listening-index.json',import.meta.url),'utf8'));
test('public catalog has unique same-origin paths, titles and nonempty theme membership',()=>{
 const seen=new Set();
 for(const a of manifest.articles){assert(a.title.trim());assert(a.themes.length);assert(!seen.has(a.path));seen.add(a.path);publicPath(a.path,'https://example.test');}
});
test('remote/protocol-relative URLs, queries and fragments are rejected',()=>{
 for(const p of ['//evil.test/x','https://evil.test/x','/x?q=1','/x#part'])assert.throws(()=>publicPath(p,'https://example.test'));
});
test('chunking keeps all text and whole Unicode characters',()=>{
 for(const text of ['','A short article','Text 👋 日本語. '.repeat(500),'x'.repeat(219)+'👋'+'y'.repeat(500)]){
  const parts=chunkText(text);assert.equal(parts.join(''),text);assert(parts.every(p=>p.length<=220));assert(parts.every(p=>!/[\uD800-\uDBFF]$/.test(p)&&!/^[\uDC00-\uDFFF]/.test(p)));
 }
});

test('registry coverage distinguishes canonical articles, aliases and nonarticle home redirects',async()=>{
 const source=await readFile(new URL('../app/components/ArticleAudio.tsx',import.meta.url),'utf8');
 const paths=JSON.parse(source.match(/new Set\((\[[^;]+\])\)/)[1]);
 const routes=await readFile(new URL('../app/routes.ts',import.meta.url),'utf8');
 const files=new Map([...routes.matchAll(/route\("([^"]+)",\s*"\.\/routes\/([^"]+)"/g)].map(m=>[m[1],m[2]]));
 const indexed=new Set(manifest.articles.map(a=>a.path));
 for(const path of paths){
  const route=await readFile(new URL('../app/routes/'+files.get(path),import.meta.url),'utf8');
  const target=route.match(/return redirect\("([^"]+)"/);
  if(target){assert(!indexed.has('/'+path),'redirect must not be queued: '+path);if(target[1]!=='/')assert(indexed.has(target[1]),'missing canonical target: '+target[1]);}
  else assert(indexed.has('/'+path),'missing direct article: '+path);
 }
 assert(!indexed.has('/'),'homepage must not be queued');
});

test('baked slots include exactly renderer-supported nonempty article bodies',async()=>{
 const snapshot=JSON.parse(await readFile(new URL('../app/data/today-articles.json',import.meta.url),'utf8'));
 const source=await readFile(new URL('../app/lib/articles-static.server.ts',import.meta.url),'utf8');
 const declarations=source.slice(source.indexOf('const TYPES = ['),source.indexOf('] as const;'));
 const types=[...declarations.matchAll(/id:\s*"([^"]+)"\s*,\s*key:\s*"([^"]+)"/g)];
 const expected=[];
 for(const [,id,key] of types){
  const e=snapshot[key];if(!e)continue;const d=e.data;
  const text=k=>typeof d[k]==='string'&&d[k]?d[k]:undefined;
  const body=text('body')||text('summary')||text('brief')||text('ai_summary');
  if(body?.trim())expected.push('/articles/'+(text('slug')||`${id}-${e.doc_id.split(':')[1]??'today'}`));
 }
 assert.deepEqual(manifest.articles.filter(a=>a.path.startsWith('/articles/')).map(a=>a.path),expected);
});
