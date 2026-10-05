const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Read kage.html, length:', content.length);

// 1. CSS for all new portfolio sections:
// - Project grid cards & filters
// - Interactive Before/After comparison slider
// - Services cards with checkmarks
// - 5-Step Process timeline
// - Software tools cards
// - About Sandeep portrait HUD
// - Pricing package tiers
// - Interactive Contact Form & quick contact badges
const extraCss = `
/* ============================================================= PORTFOLIO EXPANSIONS */
.port-section {
  position: relative; z-index: 10;
  padding: clamp(60px, 8vh, 110px) var(--pad);
  max-width: 1240px; margin: 0 auto;
}
.port-subhead {
  max-width: 640px; margin-top: 12px; margin-bottom: 40px;
  font-size: clamp(14px, 1.1vw, 17px); color: #9aa5a0; line-height: 1.68;
}

/* --- Project Grid --- */
.proj-filters {
  display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px;
}
.filter-btn {
  padding: 8px 18px; border-radius: 999px; font-size: 11px; font-weight: 500;
  letter-spacing: .16em; text-transform: uppercase; cursor: pointer;
  background: rgba(223,231,224,.04); border: 1px solid rgba(223,231,224,.14);
  color: var(--bone-dim); transition: all .3s var(--ease);
}
.filter-btn:hover, .filter-btn.active {
  background: var(--bone); color: #05070a; border-color: var(--bone);
  box-shadow: 0 0 20px rgba(223,231,224,.25);
}

.proj-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: clamp(20px, 2.5vw, 36px);
}
.proj-card {
  position: relative; border-radius: 16px; overflow: hidden;
  background: rgba(10, 14, 18, .75); backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(223,231,224,.12);
  transition: transform .4s var(--ease), border-color .4s, box-shadow .4s;
  display: flex; flex-direction: column; cursor: pointer;
}
.proj-card:hover {
  transform: translateY(-6px);
  border-color: rgba(224,35,28,.5);
  box-shadow: 0 24px 60px -15px rgba(0,0,0,.9), 0 0 30px rgba(224,35,28,.15);
}
.proj-thumb-wrap {
  position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #000;
}
.proj-thumb-wrap.vertical { aspect-ratio: 16/10; }
.proj-thumb {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .7s var(--ease), filter .7s;
  filter: brightness(.92) contrast(1.05);
}
.proj-card:hover .proj-thumb {
  transform: scale(1.06); filter: brightness(1) contrast(1.1);
}
.proj-play-overlay {
  position: absolute; inset: 0; display: grid; place-items: center;
  background: rgba(5,7,10,.35); opacity: 0; transition: opacity .3s var(--ease);
}
.proj-card:hover .proj-play-overlay { opacity: 1; }
.proj-play-btn {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--vermilion); display: grid; place-items: center;
  box-shadow: 0 0 30px rgba(224,35,28,.8); transform: scale(.9);
  transition: transform .3s var(--ease);
}
.proj-card:hover .proj-play-btn { transform: scale(1); }
.proj-badge-row {
  position: absolute; top: 12px; left: 12px; right: 12px;
  display: flex; justify-content: space-between; pointer-events: none;
}
.proj-cat-badge {
  font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 999px; background: rgba(5,7,10,.85);
  backdrop-filter: blur(8px); border: 1px solid rgba(223,231,224,.15); color: var(--bone);
}
.proj-dur-badge {
  font-size: 10px; font-family: monospace; letter-spacing: .08em;
  padding: 4px 8px; border-radius: 6px; background: rgba(5,7,10,.85);
  border: 1px solid rgba(223,231,224,.15); color: #aab4ad;
}
.proj-body {
  padding: 20px 22px 24px; display: flex; flex-direction: column; flex: 1;
}
.proj-title {
  font-size: 18px; font-weight: 400; color: var(--bone); margin-bottom: 8px;
  letter-spacing: -.01em;
}
.proj-desc {
  font-size: 13px; line-height: 1.6; color: #8c9791; margin: 0 0 16px; flex: 1;
}
.proj-tools {
  display: flex; flex-wrap: wrap; gap: 6px; border-top: 1px solid rgba(223,231,224,.08);
  padding-top: 14px;
}
.tool-pill {
  font-size: 9px; font-family: monospace; letter-spacing: .12em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 4px; background: rgba(223,231,224,.06);
  border: 1px solid rgba(223,231,224,.1); color: var(--bone-dim);
}

/* --- Interactive Before/After Comparison --- */
.ba-section {
  position: relative; margin: 50px 0 70px;
}
.ba-container {
  position: relative; width: 100%; max-width: 960px; aspect-ratio: 16/9;
  margin: 0 auto; border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(223,231,224,.18);
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.9);
  user-select: none; touch-action: pan-y;
}
.ba-layer {
  position: absolute; inset: 0; width: 100%; height: 100%;
}
.ba-layer img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.ba-after img {
  filter: contrast(115%) saturate(125%) brightness(95%);
}
.ba-before {
  width: var(--ba-pos, 50%); overflow: hidden; z-index: 2;
  border-right: 2px solid var(--bone);
  box-shadow: 4px 0 25px rgba(0,0,0,.7);
}
.ba-before img {
  width: 960px; max-width: none; height: 100%;
  filter: contrast(65%) saturate(30%) brightness(115%);
}
.ba-handle {
  position: absolute; top: 0; bottom: 0; left: var(--ba-pos, 50%);
  width: 3px; z-index: 3; pointer-events: none;
  display: flex; align-items: center; justify-content: center;
}
.ba-handle-btn {
  width: 42px; height: 42px; border-radius: 50%;
  background: var(--bone); color: #05070a;
  display: grid; place-items: center; font-size: 13px; font-weight: 700;
  box-shadow: 0 0 24px rgba(0,0,0,.8), 0 0 16px rgba(223,231,224,.4);
  transform: translateX(-50%);
}
.ba-tag {
  position: absolute; bottom: 16px; z-index: 4;
  padding: 6px 14px; border-radius: 999px; font-size: 10px; font-weight: 500;
  letter-spacing: .2em; text-transform: uppercase; backdrop-filter: blur(10px);
  background: rgba(5,7,10,.8); border: 1px solid rgba(223,231,224,.16);
  color: var(--bone); pointer-events: none;
}
.ba-tag-before { left: 16px; }
.ba-tag-after { right: 16px; }
.ba-range-input {
  position: absolute; inset: 0; width: 100%; height: 100%;
  opacity: 0; z-index: 5; cursor: ew-resize; margin: 0;
}

/* --- Services Grid --- */
.services-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(18px, 2.2vw, 30px); margin-top: 36px;
}
.serv-card {
  padding: 30px 28px; border-radius: 16px;
  background: rgba(10,14,18,.6); border: 1px solid rgba(223,231,224,.1);
  backdrop-filter: blur(14px); display: flex; flex-direction: column;
  transition: all .35s var(--ease);
}
.serv-card:hover {
  border-color: rgba(224,35,28,.4); transform: translateY(-4px);
  background: rgba(13,18,24,.8); box-shadow: 0 20px 45px -15px rgba(0,0,0,.8);
}
.serv-head {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;
}
.serv-num {
  font-size: 26px; font-weight: 300; color: var(--vermilion); font-family: monospace;
}
.serv-tag {
  font-size: 9px; letter-spacing: .18em; text-transform: uppercase;
  padding: 3px 10px; border-radius: 999px; background: rgba(223,231,224,.06);
  color: var(--bone-dim); border: 1px solid rgba(223,231,224,.12);
}
.serv-title {
  font-size: 19px; font-weight: 400; color: var(--bone); margin: 0 0 10px;
}
.serv-desc {
  font-size: 13px; line-height: 1.6; color: #8f9b95; margin: 0 0 18px;
}
.serv-list {
  list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;
  border-top: 1px solid rgba(223,231,224,.08); padding-top: 16px;
}
.serv-list li {
  font-size: 12px; color: #aab4ad; display: flex; align-items: center; gap: 8px;
}
.serv-list li::before {
  content: '✓'; color: var(--vermilion); font-weight: bold; font-size: 12px;
}

/* --- Process Timeline --- */
.process-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; margin-top: 36px;
}
.proc-card {
  padding: 24px 22px; border-radius: 14px;
  background: rgba(9,13,17,.6); border: 1px solid rgba(223,231,224,.1);
  position: relative;
}
.proc-num {
  font-size: 24px; font-weight: 300; color: var(--vermilion); font-family: monospace;
  margin-bottom: 8px;
}
.proc-title {
  font-size: 16px; font-weight: 400; color: var(--bone); margin: 0 0 8px;
}
.proc-desc {
  font-size: 12px; line-height: 1.6; color: #8e9a94; margin: 0;
}

/* --- Software Suite --- */
.software-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 18px; margin-top: 36px;
}
.soft-card {
  padding: 22px 20px; border-radius: 14px;
  background: rgba(9,13,17,.65); border: 1px solid rgba(223,231,224,.1);
  display: flex; gap: 16px; align-items: flex-start;
  transition: border-color .3s;
}
.soft-card:hover { border-color: rgba(223,231,224,.3); }
.soft-icon {
  width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center;
  font-size: 16px; font-weight: 700; font-family: monospace; shrink: 0;
  background: rgba(223,231,224,.06); border: 1px solid rgba(223,231,224,.14);
}
.soft-name { font-size: 14px; font-weight: 500; color: var(--bone); margin-bottom: 3px; }
.soft-role { font-size: 10px; font-mono; letter-spacing: .15em; text-transform: uppercase; color: var(--vermilion); margin-bottom: 6px; }
.soft-desc { font-size: 11px; line-height: 1.5; color: #828e88; margin: 0; }

/* --- About Sandeep Section --- */
.about-wrap {
  display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
  gap: clamp(28px, 4vw, 56px); align-items: center; margin-top: 36px;
}
@media (max-width: 860px) { .about-wrap { grid-template-columns: 1fr; } }
.about-photo-card {
  position: relative; border-radius: 20px; overflow: hidden;
  border: 1px solid rgba(223,231,224,.16); background: #070b10;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.9);
}
.about-photo-card img {
  width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block;
  filter: contrast(1.05) grayscale(20%); transition: filter .5s;
}
.about-photo-card:hover img { filter: contrast(1.08) grayscale(0%); }
.about-hud {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 24px;
  background: linear-gradient(180deg, transparent, rgba(5,7,10,.95) 70%);
  display: flex; justify-content: space-between; align-items: flex-end;
}
.about-name { font-size: 18px; font-weight: 500; color: #fff; margin-bottom: 2px; }
.about-title-tag { font-size: 10px; font-family: monospace; letter-spacing: .2em; text-transform: uppercase; color: #aab4ad; }
.about-status-dot {
  display: flex; align-items: center; gap: 6px; font-size: 9px; font-family: monospace;
  letter-spacing: .15em; text-transform: uppercase; color: #4ade80;
  padding: 4px 10px; border-radius: 999px; background: rgba(0,0,0,.6); border: 1px solid rgba(74,222,128,.3);
}
.about-status-dot i {
  width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80;
}
.about-copy {
  display: flex; flex-direction: column; gap: 16px;
  font-size: clamp(14px, 1.05vw, 16px); line-height: 1.75; color: #9aa5a0;
}
.about-copy p strong { color: var(--bone); font-weight: 400; }
.clients-pills {
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;
}
.client-pill {
  padding: 6px 14px; border-radius: 999px; font-size: 11px;
  background: rgba(223,231,224,.05); border: 1px solid rgba(223,231,224,.12);
  color: var(--bone); font-family: monospace;
}

/* --- Pricing Tiers --- */
.pricing-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px; margin-top: 36px;
}
.price-card {
  padding: 32px 28px; border-radius: 18px;
  background: rgba(10,14,18,.7); border: 1px solid rgba(223,231,224,.12);
  backdrop-filter: blur(14px); display: flex; flex-direction: column;
  transition: all .35s var(--ease); position: relative;
}
.price-card.featured {
  border-color: var(--vermilion);
  box-shadow: 0 0 35px rgba(224,35,28,.18);
  background: rgba(13,18,24,.85);
}
.price-featured-badge {
  position: absolute; top: -11px; right: 20px;
  background: var(--vermilion); color: #fff; font-size: 9px; font-weight: 600;
  letter-spacing: .2em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  box-shadow: 0 0 16px rgba(224,35,28,.6);
}
.price-tier { font-size: 12px; font-mono; letter-spacing: .2em; text-transform: uppercase; color: var(--bone-dim); margin-bottom: 8px; }
.price-title { font-size: 22px; font-weight: 400; color: var(--bone); margin: 0 0 10px; }
.price-desc { font-size: 13px; line-height: 1.6; color: #8e9a94; margin: 0 0 20px; }
.price-features {
  list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px;
  border-top: 1px solid rgba(223,231,224,.08); padding-top: 18px; flex: 1;
}
.price-features li {
  font-size: 12px; color: #aab4ad; display: flex; align-items: center; gap: 9px;
}
.price-features li::before {
  content: '✓'; color: var(--vermilion); font-weight: bold;
}
.price-cta-btn {
  padding: 12px 20px; border-radius: 999px; text-align: center; font-size: 11px;
  font-weight: 500; letter-spacing: .2em; text-transform: uppercase; cursor: pointer;
  background: rgba(223,231,224,.06); border: 1px solid rgba(223,231,224,.2);
  color: var(--bone); transition: all .3s; text-decoration: none;
}
.price-card.featured .price-cta-btn, .price-cta-btn:hover {
  background: var(--vermilion); border-color: var(--vermilion); color: #fff;
  box-shadow: 0 0 24px rgba(224,35,28,.4);
}

/* --- Interactive Contact Form --- */
.contact-wrap {
  display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
  gap: clamp(28px, 4vw, 56px); margin-top: 40px;
}
@media (max-width: 860px) { .contact-wrap { grid-template-columns: 1fr; } }
.contact-sidebar {
  display: flex; flex-direction: column; gap: 20px;
}
.contact-info-card {
  padding: 24px; border-radius: 14px; background: rgba(9,13,17,.65);
  border: 1px solid rgba(223,231,224,.1);
}
.contact-info-label { font-size: 10px; font-mono; letter-spacing: .2em; text-transform: uppercase; color: var(--vermilion); margin-bottom: 6px; }
.contact-info-val { font-size: 15px; color: var(--bone); text-decoration: none; font-weight: 400; word-break: break-all; }
.contact-info-val:hover { color: #fff; text-decoration: underline; }
.contact-form-box {
  padding: clamp(24px, 3.5vw, 40px); border-radius: 20px;
  background: rgba(9,14,19,.8); border: 1px solid rgba(223,231,224,.14);
  backdrop-filter: blur(18px); box-shadow: 0 30px 80px -20px rgba(0,0,0,.9);
}
.form-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
}
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
.form-group {
  display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px;
}
.form-group label {
  font-size: 10px; font-mono; letter-spacing: .18em; text-transform: uppercase; color: var(--bone-dim);
}
.form-input, .form-select, .form-textarea {
  width: 100%; padding: 12px 14px; border-radius: 8px;
  background: rgba(5,7,10,.7); border: 1px solid rgba(223,231,224,.14);
  color: var(--bone); font-family: 'Onest', sans-serif; font-size: 13px;
  outline: none; transition: border-color .3s;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--vermilion); box-shadow: 0 0 16px rgba(224,35,28,.2);
}
.form-textarea { min-height: 100px; resize: vertical; }
.submit-btn {
  width: 100%; padding: 14px 28px; border-radius: 999px;
  background: var(--vermilion); color: #fff; font-size: 11px; font-weight: 500;
  letter-spacing: .24em; text-transform: uppercase; border: 0; cursor: pointer;
  box-shadow: 0 0 25px rgba(224,35,28,.4); transition: all .3s; margin-top: 8px;
}
.submit-btn:hover {
  transform: translateY(-2px); box-shadow: 0 0 35px rgba(224,35,28,.7);
}
`;

// Insert extraCss into content
content = content.replace('/* ============================================================= layers */', extraCss + '\n/* ============================================================= layers */');

// 2. Build the HTML sections:
// Replace Section 02 (#pathways) with the complete 6-project showcase + filters
// Add Section 03 (Before/After comparison slider)
// Add Section 04 (All 6 Services + 5 Process steps + 4 Tools)
// Add Section 05 (About Sandeep + Client Types + Pricing + Contact Form)

const newSectionsHtml = `
<!-- ============================================================ 02 · FEATURED SHOWCASE -->
<section class="sec" id="pathways" data-cam="2">
  <div class="fg" data-fg="pathways" aria-hidden="true">
    <span class="fg-el fg-sakura fg-el--sway" data-fg-in="left">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-leaves fg-el--sway" data-fg-in="right">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/maple-leaves.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-lantern" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-bush" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Selected Work</span><span class="rule"></span><span class="k jp">作品集</span>
  </div>

  <!-- Featured 3 Cloth-shader Showcase Cards -->
  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor onclick="openVideoModal('/videos/hero-reel.mp4', 'Claude AI — Cinematic Product Edit')">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:80.2%; --gy:23.9%; --gr:22%; --gt:6.1s; --gt2:9.7s; --gc1:rgba(255,142,108,.50); --gc2:rgba(212,56,38,.24)"></i>
        <div class="card-lab"><b>Claude AI</b><span class="jp">プロダクト</span></div>
      </div>
      <div class="card-meta"><span>SaaS Product Launch · 0:45</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor onclick="openVideoModal('/videos/reel-vertical.mp4', 'Cinematic Social Reel (9:16)')">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(226,118,40,.30)"></i>
        <div class="card-lab"><b>Viral Reel</b><span class="jp">縦型動画</span></div>
      </div>
      <div class="card-meta"><span>High-Retention Reel · 0:28</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor onclick="openVideoModal('/videos/gradglobe-preview.mp4', 'GradGlobe — Student Journey')">
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,138,104,.52); --gc2:rgba(208,54,36,.24)"></i>
        <div class="card-lab"><b>GradGlobe</b><span class="jp">リール</span></div>
      </div>
      <div class="card-meta"><span>Motion Match Cuts · 0:34</span><span>03 / 03</span></div>
    </article>
  </div>

  <!-- Complete 6 Projects Grid -->
  <div style="margin-top: 60px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:28px;">
      <div>
        <h3 class="display" style="font-size:clamp(22px,2.4vw,34px);color:var(--bone);margin:0 0 6px;" data-rv="up">Complete Project Archives</h3>
        <p style="font-size:13px;color:#9aa5a0;margin:0;" data-rv="up">Click any project card to watch the master cut with custom sound design and Hollywood color science.</p>
      </div>
      <div class="proj-filters" data-rv="fade">
        <button class="filter-btn active" onclick="filterProjects('all', this)">All Works (6)</button>
        <button class="filter-btn" onclick="filterProjects('reel', this)">Reels 9:16 (2)</button>
        <button class="filter-btn" onclick="filterProjects('saas', this)">SaaS & Tech (2)</button>
        <button class="filter-btn" onclick="filterProjects('longform', this)">Long-form (1)</button>
        <button class="filter-btn" onclick="filterProjects('promo', this)">Commercial (1)</button>
      </div>
    </div>

    <div class="proj-grid">
      <!-- Project 1 -->
      <div class="proj-card" data-cat="saas" onclick="openVideoModal('/videos/hero-reel.mp4', 'Claude AI — Cinematic Product Edit')" data-rv="up">
        <div class="proj-thumb-wrap">
          <img class="proj-thumb" src="/images/project-claude.jpg" alt="Claude AI Cinematic Edit">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">SaaS / AI Video</span>
            <span class="proj-dur-badge">0:45 · 16:9</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">Claude AI — Cinematic Product Edit</div>
          <p class="proj-desc">Cinematic promotional edit focused on modern pacing, kinetic typography, screen UI zooms and intelligent product storytelling.</p>
          <div class="proj-tools">
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">After Effects</span>
            <span class="tool-pill">Sound FX</span>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="proj-card" data-cat="reel" onclick="openVideoModal('/videos/reel-vertical.mp4', 'Cinematic Social Reel')" data-rv="up">
        <div class="proj-thumb-wrap vertical">
          <img class="proj-thumb" src="/images/project-reel.jpg" alt="Cinematic Social Reel">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">Instagram Reel</span>
            <span class="proj-dur-badge">0:28 · 9:16</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">Cinematic Social Reel</div>
          <p class="proj-desc">Short-form vertical edit built around micro-beats, speed ramping, foley sound design, and hook-retention cuts.</p>
          <div class="proj-tools">
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">After Effects</span>
            <span class="tool-pill">Speed Ramp</span>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="proj-card" data-cat="reel" onclick="openVideoModal('/videos/gradglobe-preview.mp4', 'GradGlobe — Global Student Journey')" data-rv="up">
        <div class="proj-thumb-wrap vertical">
          <img class="proj-thumb" src="/images/project-saas.jpg" alt="GradGlobe Journey">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">Cinematic Reel</span>
            <span class="proj-dur-badge">0:34 · 9:16</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">GradGlobe — Global Student Journey</div>
          <p class="proj-desc">High-impact short-form reel structured for attention retention, kinetic subtitles, dynamic match cuts and international energy.</p>
          <div class="proj-tools">
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">After Effects</span>
            <span class="tool-pill">Subtitles</span>
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="proj-card" data-cat="saas" onclick="openVideoModal('/videos/hero-reel.mp4', 'SaaS Product Showcase')" data-rv="up">
        <div class="proj-thumb-wrap">
          <img class="proj-thumb" src="/images/project-saas.jpg" alt="SaaS Product Showcase">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">Product Video</span>
            <span class="proj-dur-badge">1:02 · 16:9</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">SaaS Product Showcase</div>
          <p class="proj-desc">Clean product-focused edit combining screen recordings, 3D UI callouts, motion graphics and high-converting flow.</p>
          <div class="proj-tools">
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">After Effects</span>
            <span class="tool-pill">3D UI Zoom</span>
          </div>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="proj-card" data-cat="longform" onclick="openVideoModal('/videos/hero-reel.mp4', 'Long-form Cinematic Edit')" data-rv="up">
        <div class="proj-thumb-wrap">
          <img class="proj-thumb" src="/images/project-longform.jpg" alt="Long-form Edit">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">YouTube / Documentary</span>
            <span class="proj-dur-badge">4:15 · 16:9</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">Long-form Cinematic Edit</div>
          <p class="proj-desc">Story-driven edit balancing talking head clarity with cinematic B-roll interludes, DaVinci Resolve color, and audio balancing.</p>
          <div class="proj-tools">
            <span class="tool-pill">DaVinci Resolve</span>
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">Story Arc</span>
          </div>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="proj-card" data-cat="promo" onclick="openVideoModal('/videos/hero-reel.mp4', 'PulseCrafts Brand Concept')" data-rv="up">
        <div class="proj-thumb-wrap">
          <img class="proj-thumb" src="/images/project-claude.jpg" alt="PulseCrafts Brand Promo">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">Promotional Video</span>
            <span class="proj-dur-badge">0:52 · 16:9</span>
          </div>
          <div class="proj-play-overlay">
            <div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div>
          </div>
        </div>
        <div class="proj-body">
          <div class="proj-title">PulseCrafts Brand Concept</div>
          <p class="proj-desc">Cinematic promotional cut for modern brands featuring tactile sound design, film grain, and editorial typography.</p>
          <div class="proj-tools">
            <span class="tool-pill">Premiere Pro</span>
            <span class="tool-pill">After Effects</span>
            <span class="tool-pill">Film Texture</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ 03 · THE CRAFT & COMPARISON -->
<section class="sec" id="lessons" data-cam="3">
  <div class="fg" data-fg="lessons" aria-hidden="true">
    <span class="fg-el fg-wall fg-el--flip" data-fg-in="right">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — The Editing Craft</span><span class="rule"></span><span class="k jp">技術哲学</span>
  </div>

  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Five principles. Millisecond precision. Unbroken immersion.</h2>
    <p class="body-lg" data-rv="up">Great editing is invisible. The viewer doesn't just watch the video—they feel the velocity, the emotional resonance, and the seamless transition between moments.</p>
  </div>

  <!-- Interactive Before / After Comparison Slider -->
  <div class="ba-section" data-rv="up">
    <div style="text-align:center;margin-bottom:18px;">
      <span style="font-size:10px;font-family:monospace;letter-spacing:.2em;text-transform:uppercase;color:var(--vermilion);">Interactive Visual Demonstration</span>
      <h3 style="font-size:20px;font-weight:400;color:var(--bone);margin:4px 0 6px;">Raw Flat LOG Footage vs. Mastered Cinematic Grade</h3>
      <p style="font-size:12px;color:#8f9b95;margin:0;">Drag the center slider left and right to inspect color grading depth, shadow recovery, and contrast.</p>
    </div>

    <div class="ba-container" id="ba-slider-container">
      <div class="ba-layer ba-after">
        <img src="/images/project-claude.jpg" alt="Graded Cinematic Cut">
      </div>
      <div class="ba-layer ba-before" id="ba-before-layer">
        <img src="/images/project-claude.jpg" alt="Raw Flat LOG">
      </div>
      <div class="ba-handle" id="ba-handle">
        <div class="ba-handle-btn">⟨ ⟩</div>
      </div>
      <span class="ba-tag ba-tag-before">Raw Flat LOG</span>
      <span class="ba-tag ba-tag-after">Graded Rec.709 Cinema</span>
      <input type="range" min="0" max="100" value="50" class="ba-range-input" id="ba-range" aria-label="Compare Raw vs Graded">
    </div>
  </div>

  <!-- 5 Pillars Syllabus -->
  <div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor>
      <span class="k">01</span>
      <h3>Hook Engineering<em class="jp">フック</em></h3>
      <p>Capturing viewer attention in the first 1.5 seconds through visual contrast, bold typography, and immediate motion.</p>
      <span class="t">Retention</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor>
      <span class="k">02</span>
      <h3>Dynamic Pacing & Flow<em class="jp">リズム</em></h3>
      <p>Balancing rapid cuts with intentional breathers so the edit feels exhilarating without overwhelming the viewer.</p>
      <span class="t">Pacing</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor>
      <span class="k">03</span>
      <h3>Layered Sound Design<em class="jp">音響設計</em></h3>
      <p>Custom risers, swooshes, sub-bass impacts, and tactile foley that turn flat visuals into a multi-sensory experience.</p>
      <span class="t">Sound</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor>
      <span class="k">04</span>
      <h3>Cinematic Color Science<em class="jp">色彩設計</em></h3>
      <p>Hollywood colorist grading in DaVinci Resolve: rich film grain emulation, organic skin tones, and atmospheric palette.</p>
      <span class="t">Grading</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor>
      <span class="k">05</span>
      <h3>Motion Graphics & VFX<em class="jp">演出</em></h3>
      <p>3D camera tracking, glowing vector callouts, and tailored kinetic typography crafted in After Effects.</p>
      <span class="t">Motion</span><i class="bar"></i>
    </div>
  </div>

  <!-- Software Tools Section -->
  <div style="margin-top:64px;">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>03.B</b> — The Creative Arsenal</span><span class="rule"></span><span class="k jp">使用ツール</span>
    </div>
    <div class="software-grid" data-rv="up">
      <div class="soft-card">
        <div class="soft-icon" style="color:#9999FF;border-color:rgba(153,153,255,.3);">Pr</div>
        <div>
          <div class="soft-name">Adobe Premiere Pro</div>
          <div class="soft-role">Editing & Assembly</div>
          <p class="soft-desc">Primary NLE for timeline assembly, sound sync, pacing, and 4K master delivery.</p>
        </div>
      </div>
      <div class="soft-card">
        <div class="soft-icon" style="color:#D291FF;border-color:rgba(210,145,255,.3);">Ae</div>
        <div>
          <div class="soft-name">Adobe After Effects</div>
          <div class="soft-role">Motion Graphics & VFX</div>
          <p class="soft-desc">Advanced motion design, 3D tracking, kinetic typography, and smooth UI animations.</p>
        </div>
      </div>
      <div class="soft-card">
        <div class="soft-icon" style="color:#FF6B4A;border-color:rgba(255,107,74,.3);">Dv</div>
        <div>
          <div class="soft-name">DaVinci Resolve</div>
          <div class="soft-role">Color Science</div>
          <p class="soft-desc">LOG transforms, skin-tone isolation, film grain emulation, and commercial look grading.</p>
        </div>
      </div>
      <div class="soft-card">
        <div class="soft-icon" style="color:#31A8FF;border-color:rgba(49,168,255,.3);">Ps</div>
        <div>
          <div class="soft-name">Adobe Photoshop</div>
          <div class="soft-role">Assets & Textures</div>
          <p class="soft-desc">Thumbnail design, film texture generation, and high-resolution asset preparation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ 04 · SERVICES & WORKFLOW -->
<section class="sec" id="services" data-cam="4">
  <div class="fg" data-fg="services" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>04</b> — Services & Deliverables</span><span class="rule"></span><span class="k jp">提供サービス</span>
  </div>

  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">End-to-End Cinematic Post-Production</h2>
    <p class="body-lg" data-rv="up">From viral 9:16 short-form reels to full-scale SaaS motion explainers and long-form documentary edits, every deliverable is crafted for engagement.</p>
  </div>

  <!-- 6 Services Grid -->
  <div class="services-grid" data-rv="up">
    <!-- Service 1 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">01</span>
        <span class="serv-tag">High Engagement</span>
      </div>
      <h3 class="serv-title">Cinematic Reels</h3>
      <p class="serv-desc">High-impact short-form edits designed for Instagram, TikTok and YouTube Shorts.</p>
      <ul class="serv-list">
        <li>Dynamic cuts & micro-pacing</li>
        <li>Custom audio design & sound layers</li>
        <li>Kinetic subtitles & motion captions</li>
        <li>Speed ramping & match cuts</li>
      </ul>
    </div>

    <!-- Service 2 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">02</span>
        <span class="serv-tag">Story & Retention</span>
      </div>
      <h3 class="serv-title">Long-form Content</h3>
      <p class="serv-desc">Engaging narrative cuts for YouTube, podcasts, founder interviews, and documentaries.</p>
      <ul class="serv-list">
        <li>Story-driven narrative structure</li>
        <li>Contextual B-roll integration</li>
        <li>DaVinci Resolve color correction</li>
        <li>Multi-track audio mastering</li>
      </ul>
    </div>

    <!-- Service 3 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">03</span>
        <span class="serv-tag">Product & Growth</span>
      </div>
      <h3 class="serv-title">SaaS & Product Videos</h3>
      <p class="serv-desc">Modern product videos that make digital software intuitive, exciting, and high-converting.</p>
      <ul class="serv-list">
        <li>Smooth UI zooms & curved motion</li>
        <li>Feature highlights & HUD callouts</li>
        <li>Kinetic typography & transitions</li>
        <li>Conversion-focused pacing</li>
      </ul>
    </div>

    <!-- Service 4 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">04</span>
        <span class="serv-tag">Platform Native</span>
      </div>
      <h3 class="serv-title">Social Media Content</h3>
      <p class="serv-desc">Consistent social content engineered around attention loops and fast turnarounds.</p>
      <ul class="serv-list">
        <li>Thumb-stopping 1.5s hooks</li>
        <li>Platform-specific aspect ratios</li>
        <li>Batch content workflows</li>
        <li>Trending pacing & audio synchronization</li>
      </ul>
    </div>

    <!-- Service 5 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">05</span>
        <span class="serv-tag">After Effects</span>
      </div>
      <h3 class="serv-title">Motion Graphics & VFX</h3>
      <p class="serv-desc">Clean animated titles, seamless transitions, 3D tracking, and branded motion assets.</p>
      <ul class="serv-list">
        <li>Custom vector transitions</li>
        <li>3D camera tracking & HUD overlays</li>
        <li>Logo reveals & animated stingers</li>
        <li>Custom kinetic typography</li>
      </ul>
    </div>

    <!-- Service 6 -->
    <div class="serv-card">
      <div class="serv-head">
        <span class="serv-num">06</span>
        <span class="serv-tag">Commercial</span>
      </div>
      <h3 class="serv-title">Promotional Videos</h3>
      <p class="serv-desc">Cinematic promotional cuts for marketing campaigns, brand launches, and founders.</p>
      <ul class="serv-list">
        <li>Commercial color grading</li>
        <li>Rhythmic sound design mastering</li>
        <li>Cinematic widescreen composition</li>
        <li>Multi-platform delivery (4K, 1080p)</li>
      </ul>
    </div>
  </div>

  <!-- 5-Step Process Timeline -->
  <div style="margin-top:64px;">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>04.B</b> — The 5-Step Process</span><span class="rule"></span><span class="k jp">制作の流れ</span>
    </div>
    <div class="process-grid" data-rv="up">
      <div class="proc-card">
        <div class="proc-num">01</div>
        <div class="proc-title">Brief</div>
        <p class="proc-desc">Send footage, style references, brand assets, and goal requirements.</p>
      </div>
      <div class="proc-card">
        <div class="proc-num">02</div>
        <div class="proc-title">Plan</div>
        <p class="proc-desc">We establish target audience, mood, sound style, and pacing before cutting.</p>
      </div>
      <div class="proc-card">
        <div class="proc-num">03</div>
        <div class="proc-title">Edit</div>
        <p class="proc-desc">I craft the first cut assembling story, pacing, sound design, and transitions.</p>
      </div>
      <div class="proc-card">
        <div class="proc-num">04</div>
        <div class="proc-title">Refine</div>
        <p class="proc-desc">Your feedback is applied, fine-tuning cuts, subtitles, color grade, and audio mix.</p>
      </div>
      <div class="proc-card">
        <div class="proc-num">05</div>
        <div class="proc-title">Deliver</div>
        <p class="proc-desc">You receive pristine 4K exports in all required aspect ratios ready to publish.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ 05 · ABOUT, PACKAGES & INQUIRY -->
<section class="sec fin" id="eternity" data-cam="5">
  <div class="fg" data-fg="eternity" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img crossorigin="anonymous" src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>05</b> — Collaboration & Booking</span><span class="rule"></span><span class="k jp">お問い合わせ</span>
  </div>

  <!-- About Sandeep M -->
  <div class="about-wrap" data-rv="up">
    <div class="about-photo-card">
      <img src="/images/sandeep-portrait.jpg" alt="Sandeep M — Cinematic Video Editor">
      <div class="about-hud">
        <div>
          <div class="about-name">Sandeep M</div>
          <div class="about-title-tag">Cinematic Video Editor & Creator</div>
        </div>
        <div class="about-status-dot">
          <i></i><span>Available 2026</span>
        </div>
      </div>
    </div>

    <div class="about-copy">
      <div class="eyebrow" style="color:var(--vermilion);"><span class="dot"></span> Behind The Edits</div>
      <h3 class="display" style="font-size:clamp(24px,2.6vw,38px);color:var(--bone);margin:0;">Turning raw footage into unforgettable stories.</h3>
      <p>I&apos;m <strong>Sandeep M</strong>, a cinematic video editor dedicated to helping creators, SaaS founders, and forward-thinking brands dominate their niche through visual storytelling.</p>
      <p>My editorial approach merges <strong>rhythmic micro-pacing, multi-layered sound design, and Hollywood color grading</strong> to ensure every second commands attention and eliminates viewer drop-off.</p>
      
      <div>
        <div style="font-size:11px;font-mono;letter-spacing:.2em;text-transform:uppercase;color:var(--bone);margin-bottom:8px;">Who I Partner With:</div>
        <div class="clients-pills">
          <span class="client-pill">Content Creators</span>
          <span class="client-pill">SaaS & AI Startups</span>
          <span class="client-pill">Digital Brands</span>
          <span class="client-pill">YouTube Channels</span>
          <span class="client-pill">Agencies</span>
          <span class="client-pill">Founders</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Pricing Packages -->
  <div style="margin-top:64px;">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>05.B</b> — Investment Packages</span><span class="rule"></span><span class="k jp">料金プラン</span>
    </div>
    <div class="pricing-grid" data-rv="up">
      <!-- Tier 1 -->
      <div class="price-card">
        <div class="price-tier">Short-Form Pack</div>
        <h3 class="price-title">Cinematic Reels Pack</h3>
        <p class="price-desc">Ideal for creators & brands scaling high-retention vertical presence.</p>
        <ul class="price-features">
          <li>4–8 High-Retention Reels / Shorts</li>
          <li>Custom sound design & swooshes</li>
          <li>Kinetic subtitles & hook editing</li>
          <li>Fast 48h turnaround per edit</li>
        </ul>
        <a href="#contact-form" class="price-cta-btn" onclick="prefillForm('Cinematic Reel')">Select Package</a>
      </div>

      <!-- Tier 2 -->
      <div class="price-card featured">
        <span class="price-featured-badge">Most Popular</span>
        <div class="price-tier">Product & Growth</div>
        <h3 class="price-title">SaaS / Product Video</h3>
        <p class="price-desc">Complete high-converting promotional explainer for digital products.</p>
        <ul class="price-features">
          <li>60–90 second product master cut</li>
          <li>Smooth 3D UI zooms & curved motion</li>
          <li>Full sound mastering & voice sync</li>
          <li>Commercial grade color & assets</li>
        </ul>
        <a href="#contact-form" class="price-cta-btn" onclick="prefillForm('SaaS Product Video')">Book Product Edit</a>
      </div>

      <!-- Tier 3 -->
      <div class="price-card">
        <div class="price-tier">Dedicated Partnership</div>
        <h3 class="price-title">Monthly Retainer</h3>
        <p class="price-desc">Ongoing dedicated editing partner with guaranteed bandwidth and priority.</p>
        <ul class="price-features">
          <li>Dedicated monthly video volume</li>
          <li>Priority turnaround & slack channel</li>
          <li>Long-form & short-form blend</li>
          <li>Continuous style optimization</li>
        </ul>
        <a href="#contact-form" class="price-cta-btn" onclick="prefillForm('Monthly Retainer')">Discuss Retainer</a>
      </div>
    </div>
  </div>

  <!-- Interactive Project Inquiry & Booking Form -->
  <div style="margin-top:64px;" id="contact-form">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>05.C</b> — Direct Inquiry</span><span class="rule"></span><span class="k jp">ご依頼</span>
    </div>

    <div class="contact-wrap" data-rv="up">
      <!-- Left sidebar -->
      <div class="contact-sidebar">
        <div class="contact-info-card">
          <div class="contact-info-label">Direct Email</div>
          <a class="contact-info-val" href="mailto:sandeepmamidala77@gmail.com">sandeepmamidala77@gmail.com</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">WhatsApp Quick Chat</div>
          <a class="contact-info-val" href="https://wa.me/?text=Hi%20Sandeep,%20I'd%20like%20to%20discuss%20a%20video%20editing%20project" target="_blank" rel="noopener noreferrer">Start WhatsApp Chat →</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">Turnaround & Delivery</div>
          <div style="font-size:13px;color:#aab4ad;line-height:1.6;">Typical first cut delivered in 24–48 hours. Master delivery in 4K ProRes & H.264 formats.</div>
        </div>
      </div>

      <!-- Right Form -->
      <div class="contact-form-box">
        <h3 class="display" style="font-size:24px;color:var(--bone);margin:0 0 16px;">Send Project Brief</h3>
        <form onsubmit="handleContactSubmit(event)">
          <div class="form-row">
            <div class="form-group">
              <label for="f-name">Your Name</label>
              <input type="text" id="f-name" class="form-input" placeholder="e.g. Alex Morgan" required>
            </div>
            <div class="form-group">
              <label for="f-email">Email Address</label>
              <input type="email" id="f-email" class="form-input" placeholder="alex@company.com" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="f-type">Project Category</label>
              <select id="f-type" class="form-select">
                <option value="Cinematic Reel">Cinematic Reels (9:16)</option>
                <option value="SaaS Product Video">SaaS / Product Video</option>
                <option value="Long-form Video">Long-form / YouTube</option>
                <option value="Commercial Promo">Commercial / Brand Film</option>
                <option value="Monthly Retainer">Monthly Retainer</option>
              </select>
            </div>
            <div class="form-group">
              <label for="f-budget">Estimated Budget</label>
              <select id="f-budget" class="form-select">
                <option value="$100–$300">$100 – $300 (Single / Batch Reel)</option>
                <option value="$300–$750">$300 – $750 (Product Explainer)</option>
                <option value="$750–$1500+">$750 – $1,500+ (High-End / Multiple)</option>
                <option value="Monthly Retainer">Monthly Retainer Partnership</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="f-footage">Raw Footage / Reference Link (Optional)</label>
            <input type="url" id="f-footage" class="form-input" placeholder="Google Drive, Dropbox, YouTube reference...">
          </div>

          <div class="form-group">
            <label for="f-notes">Project Vision & Requirements</label>
            <textarea id="f-notes" class="form-textarea" placeholder="Describe the style, target audience, music mood, and deadline..." required></textarea>
          </div>

          <button type="submit" class="submit-btn" id="f-submit-btn">Send Project Inquiry →</button>
          <div id="f-status" style="display:none;margin-top:14px;font-size:12px;color:#4ade80;text-align:center;">✓ Preparing email client with your project details...</div>
        </form>
      </div>
    </div>
  </div>
</section>
`;

// Replace from `<section class="sec" id="pathways" data-cam="2">` to right before `<footer class="foot"`
const oldSectionStart = '<section class="sec" id="pathways" data-cam="2">';
const oldFooterStart = '<footer class="foot"';

const startIndex = content.indexOf(oldSectionStart);
const endIndex = content.indexOf(oldFooterStart);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newSectionsHtml + '\n' + content.substring(endIndex);
  console.log('Successfully replaced sections in kage.html!');
} else {
  console.error('Could not find slice boundaries!', { startIndex, endIndex });
}

// 3. Add client script handlers for:
// - Interactive Before/After slider drag & range input
// - Project category filtering
// - Form prefill & submission to mailto
const clientScript = `
<script>
// --- Interactive Before/After Comparison Slider ---
(function() {
  const container = document.getElementById('ba-slider-container');
  const range = document.getElementById('ba-range');
  const beforeLayer = document.getElementById('ba-before-layer');
  const handle = document.getElementById('ba-handle');

  if (range && container && beforeLayer && handle) {
    function updatePos(val) {
      container.style.setProperty('--ba-pos', val + '%');
    }
    range.addEventListener('input', function(e) {
      updatePos(e.target.value);
    });
  }
})();

// --- Project Filtering ---
window.filterProjects = function(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.proj-grid .proj-card');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

// --- Form Prefill & Submission ---
window.prefillForm = function(type) {
  const select = document.getElementById('f-type');
  if (select) {
    select.value = type;
  }
  const formEl = document.getElementById('contact-form');
  if (formEl) {
    formEl.scrollIntoView({ behavior: 'smooth' });
  }
};

window.handleContactSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('f-name').value;
  const email = document.getElementById('f-email').value;
  const type = document.getElementById('f-type').value;
  const budget = document.getElementById('f-budget').value;
  const footage = document.getElementById('f-footage').value;
  const notes = document.getElementById('f-notes').value;

  const subject = encodeURIComponent('Video Editing Inquiry: ' + type + ' — ' + name);
  let body = 'Hi Sandeep,%0D%0A%0D%0A';
  body += 'My name is ' + encodeURIComponent(name) + ' (' + encodeURIComponent(email) + ').%0D%0A%0D%0A';
  body += 'Project Type: ' + encodeURIComponent(type) + '%0D%0A';
  body += 'Estimated Budget: ' + encodeURIComponent(budget) + '%0D%0A';
  if (footage) body += 'Footage / Reference: ' + encodeURIComponent(footage) + '%0D%0A';
  body += '%0D%0AProject Details:%0D%0A' + encodeURIComponent(notes) + '%0D%0A%0D%0ALooking forward to your response!';

  const status = document.getElementById('f-status');
  if (status) status.style.display = 'block';

  setTimeout(function() {
    window.location.href = 'mailto:sandeepmamidala77@gmail.com?subject=' + subject + '&body=' + body;
  }, 400);
};
</script>
`;

content = content.replace('</body>', clientScript + '\n</body>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully wrote full portfolio to kage.html! New length:', content.length);
