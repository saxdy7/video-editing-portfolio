// Interleaves the project archive so the first cards a client sees cover every kind of work,
// instead of nine GradGlobe reels in a row. Re-runnable: it only reorders existing cards.
// Run: node scratch/reorder_projects.js
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');

const ORDER = [
  'gradglobe-07', 'event-cultural-fest', 'claude-promo', 'event-satinder-sartaaj',
  'gradglobe-08', 'event-car-drift', 'surviving-ai', 'event-concert-aftermovie',
  'gradglobe-06', 'pulsecrafts-legal', 'event-lukkhe-prime', 'gradglobe-02',
  'creator-protein-skit', 'event-superbike-stunts', 'saas-intro', 'gradglobe-09',
  'event-garba-night', 'gradglobe-03', 'event-supercars', 'gradglobe-01',
  'event-fashion-walk', 'matcha-promo', 'event-ganesh-chaturthi', 'gradglobe-04',
  'event-youth-vibe', 'gradglobe-05', 'event-auto-show',
];

const open = '<div class="proj-grid">';
const start = html.indexOf(open) + open.length;
const end = html.indexOf('\n    </div>\n    <div style="margin-top:36px;display:flex;justify-content:center;"', start);
if (start < open.length || end < 0) throw new Error('grid bounds not found');

const cards = html.slice(start, end).split(/(?=\n      <div class="proj-card" )/).filter((c) => c.includes('proj-card'));
const byId = new Map(cards.map((c) => [c.match(/\/videos\/work\/([a-z0-9-]+)\.mp4/)[1], c]));
const missing = [...byId.keys()].filter((id) => !ORDER.includes(id));
const unknown = ORDER.filter((id) => !byId.has(id));
if (missing.length || unknown.length) throw new Error(`order mismatch — not placed: ${missing}; not on page: ${unknown}`);

html = html.slice(0, start) + ORDER.map((id) => byId.get(id)).join('') + html.slice(end);

// featured strip: Showreel, GradGlobe, then an event film rather than a second GradGlobe reel
html = html.replace(
  /onclick="openVideoModal\('\/videos\/work\/gradglobe-08\.mp4', 'GradGlobe — Hidden Costs of Studying Abroad'\)">([\s\S]*?)<div class="card-lab"><b>Hidden Costs<\/b><span class="jp">隠れた費用<\/span><\/div>([\s\S]*?)<div class="card-meta"><span>[^<]*<\/span>/,
  `onclick="openVideoModal('/videos/work/event-cultural-fest.mp4', 'Cultural Fest — Unity in Diversity')">$1<div class="card-lab"><b>Cultural Fest</b><span class="jp">文化祭</span></div>$2<div class="card-meta"><span>Event Film · 1:17</span>`);

fs.writeFileSync(FILE, html);
console.log('reordered', ORDER.length, 'cards; featured 3 =', html.includes("'Cultural Fest — Unity in Diversity')\">") ? 'Cultural Fest' : 'unchanged');
