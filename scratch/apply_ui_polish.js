// Adds Lenis smooth scrolling + a UI polish pass to public/landing-pages/kage.html.
// Run once after apply_real_work.js: node scratch/apply_ui_polish.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'public', 'landing-pages', 'kage.html');
const ASSETS = path.join(ROOT, 'public', 'landing-pages', 'secret-pathways-assets');
let html = fs.readFileSync(FILE, 'utf8');
if (html.includes('lenis.min.js')) { console.log('already applied'); process.exit(0); }

const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 70)); html = html.split(a).join(b); };

// ---- Lenis ----
fs.copyFileSync(path.join(ROOT, 'node_modules', 'lenis', 'dist', 'lenis.min.js'), path.join(ASSETS, 'lenis.min.js'));
rep('<script src="secret-pathways-assets/three.min.js"></script>', `<script src="secret-pathways-assets/lenis.min.js"></script>
<script>
/* Lenis drives the native window scroll, so every scrollY reader below keeps working. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__lenis = null;
  if (!reduce && window.Lenis) {
    var lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, smoothWheel: true });
    window.__lenis = lenis;
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  }
  window.smoothTo = function (top) {
    if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.3, easing: function (t) { return 1 - Math.pow(1 - t, 4); } });
    else scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
  };
})();
</script>
<script src="secret-pathways-assets/three.min.js"></script>`);
rep(`b.addEventListener('click', () => scrollTo({ top: anchors[i], behavior: REDUCE ? 'auto' : 'smooth' }));`,
    `b.addEventListener('click', () => smoothTo(anchors[i]));`);
rep(`scrollTo({ top: a.getAttribute('href') === '#top' ? 0 : t.offsetTop - 40, behavior: REDUCE ? 'auto' : 'smooth' });`,
    `smoothTo(a.getAttribute('href') === '#top' ? 0 : t.getBoundingClientRect().top + scrollY - 40);`);
rep(`    formEl.scrollIntoView({ behavior: 'smooth' });`, `    smoothTo(formEl.getBoundingClientRect().top + scrollY - 40);`);
rep(`    modal.classList.add('open');`, `    modal.classList.add('open');
    if (window.__lenis) window.__lenis.stop();`);
rep(`    modal.classList.remove('open');`, `    modal.classList.remove('open');
    if (window.__lenis) window.__lenis.start();`);

// reveal stagger: cap it so cards deep in a long grid don't wait a second after entering view
rep(`const d = parseFloat(e.target.dataset.rvd || 0);`, `const d = Math.min(parseFloat(e.target.dataset.rvd || 0), 255);`);

// ---- button-in-button Drive CTA ----
html = html.replace(/<a href="(https:\/\/drive\.google\.com\/[^"]+)" target="_blank" rel="noopener noreferrer" style="display:inline-flex;[^"]*">Full-quality masters on Google Drive →<\/a>/,
  `<a class="pill-cta" href="$1" target="_blank" rel="noopener noreferrer"><span>Full-quality masters on Google Drive</span><span class="ic"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#fff" stroke-width="1.4"/></svg></span></a>`);
if (!html.includes('class="pill-cta"')) throw new Error('Drive CTA not found');

// ---- polish CSS (appended after the existing rules so it wins the cascade) ----
const css = `
/* ============================================================= UI polish pass */
:root{ --ease-ui:cubic-bezier(.23,1,.32,1); --ease-drawer:cubic-bezier(.32,.72,0,1); }
html.lenis, html.lenis body{ height:auto; }
.lenis.lenis-smooth{ scroll-behavior:auto !important; }
.lenis.lenis-stopped{ overflow:hidden; }

/* project cards: double-bezel shell, no per-card backdrop blur over the WebGL scene */
.proj-grid{ grid-template-columns:repeat(auto-fill, minmax(min(340px, 100%), 1fr)); }
.proj-card{
  padding:6px; border-radius:24px;
  background:linear-gradient(180deg, rgba(20,26,30,.92), rgba(10,14,18,.9));
  border:1px solid rgba(223,231,224,.09);
  box-shadow:0 30px 60px -32px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.05);
  backdrop-filter:none; -webkit-backdrop-filter:none;
  transition:transform .5s var(--ease-drawer), border-color .3s ease, box-shadow .5s var(--ease-drawer);
}
.proj-thumb-wrap{ border-radius:18px; }
.proj-body{ padding:16px 14px 12px; }
.proj-card:hover{ transform:none; box-shadow:0 30px 60px -32px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.05); }
.proj-card:hover .proj-thumb{ transform:none; }
@media (hover:hover) and (pointer:fine){
  .proj-card:hover{ transform:translateY(-4px); border-color:rgba(224,35,28,.38);
    box-shadow:0 34px 70px -30px rgba(0,0,0,.9), 0 0 32px -8px rgba(224,35,28,.22), inset 0 1px 0 rgba(255,255,255,.06); }
  .proj-card:hover .proj-thumb{ transform:scale(1.04); }
}
@media (hover:none){ .proj-play-overlay{ opacity:1; background:transparent; } }
.proj-card:active{ transform:scale(.985); transition-duration:.16s; }
.proj-thumb{ transition:transform .7s var(--ease-drawer), filter .5s ease; }
.proj-play-btn{ transition:transform .25s var(--ease-ui); }

.filter-btn{ transition:background-color .2s ease, color .2s ease, border-color .2s ease, box-shadow .2s ease, transform .16s var(--ease-ui); }
.filter-btn:active{ transform:scale(.97); }

/* video player: scale in from .96, exit faster than enter */
#video-modal{ transition:opacity .28s var(--ease-ui), visibility .28s; }
#video-modal:not(.open){ transition-duration:.18s; }
.vm-box{ opacity:0; transform:translateY(10px) scale(.96);
  transition:transform .34s var(--ease-ui), opacity .24s var(--ease-ui); }
#video-modal.open .vm-box{ opacity:1; transform:none; }
#video-modal:not(.open) .vm-box{ transition-duration:.18s; }
.vm-close{ transition:background-color .2s ease, border-color .2s ease, transform .16s var(--ease-ui); }
.vm-close:active{ transform:scale(.94); }

/* button-in-button CTA */
.pill-cta{ display:inline-flex; align-items:center; gap:16px; padding:7px 7px 7px 24px; border-radius:999px;
  border:1px solid rgba(223,231,224,.22); background:rgba(5,7,10,.6); color:var(--bone);
  font-size:11px; letter-spacing:.2em; text-transform:uppercase;
  transition:border-color .25s ease, transform .16s var(--ease-ui); }
.pill-cta .ic{ width:34px; height:34px; border-radius:50%; display:grid; place-items:center; flex:none;
  background:var(--vermilion); box-shadow:0 0 18px rgba(224,35,28,.45); transition:transform .35s var(--ease-ui); }
@media (hover:hover) and (pointer:fine){
  .pill-cta:hover{ border-color:rgba(223,231,224,.5); }
  .pill-cta:hover .ic{ transform:translate(2px,-1px) scale(1.06); }
}
.pill-cta:active{ transform:scale(.97); }
.submit-btn:active, .price-cta-btn:active, .cta-play-reel:active{ transform:scale(.97) !important; }

@media (max-width:640px){ .pill-cta{ font-size:10px; letter-spacing:.14em; padding-left:18px; } }
@media (prefers-reduced-motion:reduce){
  .vm-box, #video-modal.open .vm-box{ transform:none; transition:opacity .2s ease; }
  .proj-card:hover, .proj-card:active{ transform:none; }
}
`;
const lastStyle = html.lastIndexOf('</style>', html.indexOf('</head>'));
if (lastStyle < 0) throw new Error('no </style> in head');
html = html.slice(0, lastStyle) + css + html.slice(lastStyle);

fs.writeFileSync(FILE, html);
console.log('UI polish + Lenis applied');
