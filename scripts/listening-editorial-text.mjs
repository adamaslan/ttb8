import sanitizeHtml from 'sanitize-html';
import {ignoredArticleSelector, articleBlockSelector, normalizeArticleBody} from '../public/listening-queue.js';

// The catalog currently selects main. Fail closed if it changes, rather than
// silently auditing a different element from the browser's querySelector.
export function editorialText(html, selector = 'main') {
  if (selector !== 'main') throw new Error('Unsupported audit selector: ' + selector);
  let text;
  const blocks = new Set(articleBlockSelector.split(','));
  const excluded = ignoredArticleSelector.split(',');
  const matches = (tag, attrs, rule) => {
    if (rule[0] === '.') return (attrs.class || '').split(/\s+/).includes(rule.slice(1));
    if (rule[0] === '#') return attrs.id === rule.slice(1);
    if (rule[0] === '[') {
      const [, name, value] = rule.match(/^\[([^=\]]+)(?:="([^"]*)")?\]$/) || [];
      if (!name) throw new Error('Unsupported exclusion selector: ' + rule);
      return Object.hasOwn(attrs, name) && (value === undefined || attrs[name] === value);
    }
    return tag === rule;
  };
  sanitizeHtml(html, {
    allowedTags: false, allowedAttributes: false, allowVulnerableTags: true,
    nonBooleanAttributes: [],
    exclusiveFilter(frame) {
      if (excluded.some(rule => matches(frame.tag, frame.attribs, rule))) return true;
      if (frame.tag === 'br') frame.text = '\n';
      if (blocks.has(frame.tag)) frame.text += '\n';
      // onClose order means nested main would be first. Browsers repair nested
      // main inconsistently, so reject it instead of approving ambiguous markup.
      if (frame.tag === 'main') {
        if (text !== undefined) throw new Error('Multiple main elements in article');
        text = normalizeArticleBody(frame.text);
      }
      return false;
    }
  });
  if (text === undefined) throw new Error('Article content was not found');
  if (text.length < 25) throw new Error('Article text is empty or incomplete');
  return text;
}
