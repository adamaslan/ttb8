// Keep the seven baked daily article slots aligned with the same build's source.
// Static editorial articles/themes remain curated in public/listening-index.json.
import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const file=new URL('public/listening-index.json',root);
const manifest=JSON.parse(await readFile(file,'utf8'));
const snapshot=JSON.parse(await readFile(new URL('app/data/today-articles.json',root),'utf8'));
const source=await readFile(new URL('app/lib/articles-static.server.ts',root),'utf8');
const declarations=source.slice(source.indexOf('const TYPES = ['),source.indexOf('] as const;'));
const types=[...declarations.matchAll(/id:\s*"([^"]+)"\s*,\s*key:\s*"([^"]+)"\s*,\s*label:\s*"([^"]+)"\s*,\s*category:\s*"([^"]+)"/g)];
if(types.length!==7)throw new Error('Review listening snapshot mapping after article type changes');
manifest.articles=manifest.articles.filter(a=>!a.path.startsWith('/articles/'));
for(const [,id,key,label] of types){
 const entry=snapshot[key];if(!entry)continue;
 const d=entry.data,date=entry.doc_id.split(':')[1]??'today';
 const text=k=>typeof d[k]==='string'&&d[k]?d[k]:undefined;
 const slug=text('slug')||`${id}-${date}`;
 manifest.articles.push({path:'/articles/'+slug,title:text('title')||text('blog_title')||`${label} - ${date}`,themes:id==='ai-summary'?['AI','Finance & business']:['Finance & business']});
}
await writeFile(file,JSON.stringify(manifest,null,2)+'\n');
console.log(`Listening catalog: ${manifest.articles.length} articles; baked slots refreshed.`);
