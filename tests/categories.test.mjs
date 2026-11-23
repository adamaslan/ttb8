import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {filterArticles} from '../public/listening-queue.js';
const manifest=JSON.parse(readFileSync(new URL('../public/listening-index.json',import.meta.url)));
test('actual article badge categories stay distinct from editorial themes',()=>{
 const whiskey=manifest.articles.find(a=>a.path==='/how-to-invest-in-whisky');
 assert.equal(whiskey.category,'Lifestyle');
 assert.deepEqual(filterArticles(manifest.articles,'Lifestyle',''),[whiskey]);
 assert.ok(!filterArticles(manifest.articles,'Finance & business','').includes(whiskey));
 assert.ok(filterArticles(manifest.articles,'','Finance & business').includes(whiskey));
});
test('every queued article has a source category; category plus theme uses intersection',()=>{
 for(const a of manifest.articles)assert.ok(typeof a.category==='string'&&a.category.trim());
 for(const category of new Set(manifest.articles.map(a=>a.category)))assert.deepEqual(filterArticles(manifest.articles,category,''),manifest.articles.filter(a=>a.category===category));
 assert.deepEqual(filterArticles(manifest.articles,'Lifestyle','3D & games'),[]);
 assert.deepEqual(filterArticles(manifest.articles,'',''),manifest.articles);
});
