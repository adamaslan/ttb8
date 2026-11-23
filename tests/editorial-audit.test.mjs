import test from 'node:test';
import assert from 'node:assert/strict';
import {editorialText} from '../scripts/listening-editorial-text.mjs';
import {ignoredArticleSelector, articleBlockSelector} from '../public/listening-queue.js';
const prose='A real article has useful editorial prose, not menus or controls. '.repeat(3);
test('navigation-only main is rejected even when navigation exceeds the audit threshold',()=>{
 assert.throws(()=>editorialText('<main><nav>'+prose+'</nav></main>'),/empty or incomplete/);
});
test('all browser exclusions remove their contents from the audit',()=>{
 for(const selector of ignoredArticleSelector.split(',')){
  let tag=selector,attr='';
  if(selector[0]==='.') {tag='div';attr=' class="'+selector.slice(1)+'"';}
  else if(selector[0]==='#') {tag='div';attr=' id="'+selector.slice(1)+'"';}
  else if(selector[0]==='[') {tag='div';attr=' '+selector.slice(1,-1);}
  const html='<main>'+prose+(['input'].includes(tag)?'<'+tag+attr+'>':'<'+tag+attr+'>HIDDEN_SENTINEL</'+tag+'>')+'</main>';
  assert.equal(editorialText(html),prose.trim(),selector);
 }
});
test('parser decodes entities and preserves browser paragraph and break boundaries',()=>{
 assert.equal(editorialText('<main><p>Fish &amp; chips &#x1f41f; '+prose+'</p><br><div>Final line</div></main>'),'Fish & chips 🐟 '+prose.trim()+' \nFinal line');
});
test('missing main, ambiguous main, unsupported selector and incomplete prose fail closed',()=>{
 for(const html of ['<article>'+prose+'</article>','<main>short</main>','<main>'+prose+'</main><main>'+prose+'</main>']) assert.throws(()=>editorialText(html));
 assert.throws(()=>editorialText('<main>'+prose+'</main>','article'),/Unsupported/);
});
test('supported block boundary rules are explicitly shared with the browser',()=>{
 assert.equal(articleBlockSelector,'p,div,section,article,h1,h2,h3,h4,li,tr,blockquote,figcaption');
 assert.equal(editorialText('<main>'+prose+'<div>Second paragraph</div><p>Third paragraph</p></main>'),prose+'Second paragraph\nThird paragraph');
});
