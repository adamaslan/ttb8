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
for(const [,id,key,label,category] of types){
 const entry=snapshot[key];if(!entry)continue;
 const d=entry.data,date=entry.doc_id.split(':')[1]??'today';
 const text=k=>typeof d[k]==='string'&&d[k]?d[k]:undefined;
 // Match entryToArticle's rendered body fields. A title-only review is not narration.
 const body=text('body')||text('summary')||text('brief')||text('ai_summary');
 if(!body?.trim())continue;
 const slug=text('slug')||`${id}-${date}`;
 manifest.articles.push({path:'/articles/'+slug,title:text('title')||text('blog_title')||`${label} - ${date}`,category,themes:id==='ai-summary'?['AI','Finance & business']:['Finance & business']});
}
// Read the actual rendered article badge, never infer category from editorial themes.
const routes=await readFile(new URL('app/routes.ts',root),'utf8');
const files=new Map([...routes.matchAll(/route\("([^"]+)",\s*"\.\/routes\/([^"]+)"/g)].map(m=>[m[1],m[2]]));
for(const article of manifest.articles){
 if(article.path.startsWith('/articles/'))continue;
 const path=files.get(article.path.slice(1));
 if(!path)throw new Error('Missing article route: '+article.path);
 const source=await readFile(new URL('app/routes/'+path,root),'utf8');
 const constant=source.match(/const CATEGORY\s*=\s*"([^"]+)"/);
 const badge=source.match(/<span className="[^"]*rounded-full[^"]*font-bold[^"]*">\s*([^<{]+)\s*<\/span>/);
 const category=(constant?.[1]||badge?.[1]||'').trim();
 if(!category)throw new Error('Review article category badge: '+article.path);
 article.category=category;
}
await writeFile(file,JSON.stringify(manifest,null,2)+'\n');
console.log(`Listening catalog: ${manifest.articles.length} articles; baked slots refreshed.`);
