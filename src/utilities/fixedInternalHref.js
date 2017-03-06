// checks if link is internal or external
// in the first case appends proper url at the beginning
export default function isInternalLink(href) {
  const reg = /^item\?id=[0-9]+/;
  return reg.test(href) ? `https://news.ycombinator.com/${href}` : href;
}
