// Adds 13 event / campus / creator reels to the project archive in kage.html.
// Run once after encoding into public/videos/work: node scratch/apply_new_videos.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');
if (html.includes('/videos/work/event-cultural-fest.mp4')) { console.log('already applied'); process.exit(0); }
const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 70)); html = html.split(a).join(b); };

function dur(id) {
  const f = path.join(ROOT, 'public', 'videos', 'work', id + '.mp4');
  const s = parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${f}"`).toString());
  return `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
}

const NEW = [
  { id: 'event-cultural-fest', cat: 'event', ar: '16:9', badge: 'Event Film', title: 'Cultural Fest — Unity in Diversity',
    desc: 'Widescreen fest film moving state by state through folk dances and costumes, building to a tricolour finale on the main stage.',
    tools: ['Story Edit', 'Colour Grade', 'Music Sync'] },
  { id: 'event-concert-aftermovie', cat: 'event', ar: '16:9', badge: 'Aftermovie', title: 'Campus Concert Aftermovie',
    desc: 'Arrival-to-encore aftermovie: stage lights, crowd reactions and black-and-white cutaways timed to the live set.',
    tools: ['Aftermovie', 'B&W Grade', 'Beat Sync'] },
  { id: 'event-satinder-sartaaj', cat: 'event', ar: '9:16', badge: 'Concert Reel', title: 'Dr. Satinder Sartaaj — Heritage Tour India',
    desc: 'Vertical concert reel from the Heritage Tour India night: venue reveal, confetti hits and close-ups of the performance.',
    tools: ['Concert Edit', 'Speed Ramps', 'Beat Sync'] },
  { id: 'event-lukkhe-prime', cat: 'event', ar: '9:16', badge: 'Promo Event', title: 'Lukkhe — Amazon Prime Campus Promo',
    desc: 'Campus promo for the Amazon Prime series Lukkhe: cast on stage, crowd signs and title-card hits for the launch.',
    tools: ['Promo Edit', 'Title Cards', 'Crowd Cuts'] },
  { id: 'event-ganesh-chaturthi', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Ganesh Chaturthi Celebration — DSO',
    desc: 'Festival reel for the Department of Student Organization: procession, dance circle and a slow close on the idol.',
    tools: ['Event Edit', 'Colour Grade', 'Branding'] },
  { id: 'event-garba-night', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Garba Night — DSO',
    desc: 'Dandiya night reel with colour-to-mono switches, canopy reveals and a DSO logo sting to close.',
    tools: ['Beat Sync', 'B&W Accents', 'Logo Sting'] },
  { id: 'event-youth-vibe', cat: 'event', ar: '9:16', badge: 'Fest Promo', title: 'Youth Vibe — LPU Global Open Fest',
    desc: 'Host-led promo for LPU\'s open fest: behind-the-scenes setup, photo-booth walkthrough and on-screen fest branding.',
    tools: ['Host Promo', 'BTS Cuts', 'Captions'] },
  { id: 'event-fashion-walk', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Campus Fashion Walk — LPU',
    desc: 'Runway reel cut walk by walk to the beat, under stage lights and LED backdrops.',
    tools: ['Runway Edit', 'Beat Sync', 'Colour Grade'] },
  { id: 'event-superbike-stunts', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Superbike Stunt Show',
    desc: 'Short high-energy cut of live band, riders and burnouts, with smoke-filled slow-motion beats.',
    tools: ['Slow Motion', 'Speed Ramps', 'Sound Design'] },
  { id: 'event-car-drift', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Car Drift Show',
    desc: 'Ten-second drift-show hit: G-Wagon, Thar and sports cars cut on every slide and tyre-smoke burst.',
    tools: ['Fast Cuts', 'Speed Ramps', 'Sound Design'] },
  { id: 'event-auto-show', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Auto Show — Bikes & Off-Road',
    desc: 'Campus auto show from parked lineup to superbike rolls and an off-road mud run, paced to the music.',
    tools: ['Event Edit', 'Match Cuts', 'Music Sync'] },
  { id: 'event-supercars', cat: 'event', ar: '9:16', badge: 'Event Reel', title: 'Supercar Showcase',
    desc: 'Crowd-to-car reveal of a Rolls-Royce and a Mustang, finishing on an interior detail shot.',
    tools: ['Reveal Cuts', 'Detail Shots', 'Colour Grade'] },
  { id: 'creator-protein-skit', cat: 'organic', ar: '9:16', badge: 'Creator Reel', title: 'Out of Protein — Creator Skit',
    desc: 'Relatable creator skit with a hook caption, store-shelf inserts and quick reaction cuts for social feeds.',
    tools: ['Hook Caption', 'Storytelling', 'Quick Cuts'] },
];

const play = '<div class="proj-play-overlay"><div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div></div>';
const card = (p) => `
      <div class="proj-card" data-cat="${p.cat}" onclick="openVideoModal('/videos/work/${p.id}.mp4', '${p.title.replace(/'/g, "\\'")}')" data-rv="up">
        <div class="proj-thumb-wrap${p.ar !== '16:9' ? ' vertical' : ''}">
          <img class="proj-thumb" src="/images/work/${p.id}.jpg" alt="${p.title}" loading="lazy">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">${p.badge}</span>
            <span class="proj-dur-badge">${dur(p.id)} · ${p.ar}</span>
          </div>
          ${play}
        </div>
        <div class="proj-body">
          <div class="proj-title">${p.title}</div>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-tools">
            ${p.tools.map((t) => `<span class="tool-pill">${t}</span>`).join('\n            ')}
          </div>
        </div>
      </div>`;

// event reels go after the GradGlobe block (before PulseCrafts); the creator skit joins the organic reels
const anchor = `\n      <div class="proj-card" data-cat="motion" onclick="openVideoModal('/videos/work/pulsecrafts-legal.mp4'`;
const i = html.indexOf(anchor);
if (i < 0) throw new Error('PulseCrafts card not found');
html = html.slice(0, i) + NEW.map(card).join('') + html.slice(i);

// recount filters from the grid itself
const cats = [...html.matchAll(/<div class="proj-card" data-cat="(\w+)"/g)].map((m) => m[1]);
const n = (c) => cats.filter((x) => x === c).length;
html = html.replace(/All Work \(\d+\)/, `All Work (${cats.length})`)
  .replace(/Performance Reels \(\d+\)/, `Performance Reels (${n('perf')})`)
  .replace(/Organic Reels \(\d+\)/, `Organic Reels (${n('organic')})`)
  .replace(/Motion Design \(\d+\)/, `Motion Design (${n('motion')})`)
  .replace(/Captions \(\d+\)<\/button>/, `Captions (${n('captions')})</button>
        <button class="filter-btn" onclick="filterProjects('event', this)">Event Reels (${n('event')})</button>`);
html = html.replace(/<div><b>\d+<\/b><span>Featured Edits<\/span><\/div>/, `<div><b>${cats.length}</b><span>Featured Edits</span></div>`);
rep('cutting performance reels, organic social content, SaaS promos and caption-driven shorts',
    'cutting performance reels, event aftermovies, organic social content, SaaS promos and caption-driven shorts');
rep('explainers for Fiverr clients, and SaaS promos built in After Effects and Remotion.',
    'fest, concert and event reels from campus (LPU / DSO), explainers for Fiverr clients, and SaaS promos built in After Effects and Remotion.');
rep('Click any card to play the edit.','Click any card to play the edit — from performance ads to fest aftermovies.');

fs.writeFileSync(FILE, html);
console.log('added', NEW.length, '— grid now', cats.length, { perf: n('perf'), organic: n('organic'), motion: n('motion'), captions: n('captions'), event: n('event') });
