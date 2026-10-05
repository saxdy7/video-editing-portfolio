// Injects scratch/mobile.css into kage.html between markers (re-runnable).
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
const css = fs.readFileSync(path.join(__dirname, 'mobile.css'), 'utf8');
let html = fs.readFileSync(FILE, 'utf8');
const A = '/* MOBILE-FIX START */', B = '/* MOBILE-FIX END */';
const block = `${A}\n${css}\n${B}\n`;
if (html.includes(A)) html = html.slice(0, html.indexOf(A)) + block + html.slice(html.indexOf(B) + B.length + 1);
else { const i = html.lastIndexOf('</style>', html.indexOf('</head>')); html = html.slice(0, i) + block + html.slice(i); }
fs.writeFileSync(FILE, html);
console.log('mobile css applied');
