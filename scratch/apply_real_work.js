// Replaces placeholder projects + contact details in public/landing-pages/kage.html
// with Sandeep's real edits (public/videos/work/*) and real contact info.
// Run: node scratch/apply_real_work.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');

const ME = {
  name: 'Sandeep Mamidala',
  email: 'mamidalasandeep5@gmail.com',
  phone: '+91 94937 63769',
  tel: '+919493763769',
  wa: 'https://wa.me/919493763769?text=Hi%20Sandeep%2C%20I%27d%20like%20to%20discuss%20a%20video%20editing%20project',
  linkedin: 'https://linkedin.com/in/sandeepmamidala',
  github: 'https://github.com/saxdy7',
  drive: 'https://drive.google.com/drive/folders/1K5kJW2a3URDs3Zn6GdUCi6xHPlZ46O8O',
};

function dur(id) {
  const f = path.join(ROOT, 'public', 'videos', 'work', id + '.mp4');
  const s = parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${f}"`).toString());
  const m = Math.floor(s / 60), r = Math.round(s % 60);
  return `${m}:${String(r).padStart(2, '0')}`;
}

// cat: perf | organic | motion | captions
const PROJECTS = [
  { id: 'gradglobe-07', cat: 'perf', ar: '9:16', badge: 'Performance Reel', title: 'GradGlobe — Country Confusion',
    desc: 'Trend-style pop-beat captions, waving flags composited behind the presenter with a person matte, and six real visa-approval testimonial posts.',
    tools: ['After Effects', 'Rotoscope Matte', 'Captions'] },
  { id: 'gradglobe-08', cat: 'perf', ar: '9:16', badge: 'Performance Reel', title: 'GradGlobe — Hidden Costs of Studying Abroad',
    desc: 'Neon hero captions placed behind her head using per-clip mattes, on-A-roll chips and photo stamps, plus iceberg and budget-sheet motion graphics.',
    tools: ['After Effects', 'Motion Design', 'Sound Design'] },
  { id: 'gradglobe-02', cat: 'perf', ar: '9:16', badge: 'Performance Reel', title: 'GradGlobe — Low Profile & Backlogs',
    desc: 'SaaS-style motion-design B-roll: glass UI cards, mesh gradients, depth-of-field camera moves, box-less serif captions and cut-out objects.',
    tools: ['After Effects', '3D Camera', 'Captions'] },
  { id: 'gradglobe-01', cat: 'perf', ar: '9:16', badge: 'Performance Reel', title: 'GradGlobe — Study Abroad Lead-Gen Reel',
    desc: 'Six A-roll takes cut tight to the script with animated captions, 14 custom motion-graphic B-roll inserts and a full SFX pass.',
    tools: ['After Effects', 'Premiere Pro', 'Sound Design'] },
  { id: 'gradglobe-04', cat: 'perf', ar: '9:16', badge: 'Performance Reel', title: 'GradGlobe — Budget & Scholarships',
    desc: 'Clean, mostly-white motion design with a single brand-blue accent, script + sans caption pairing and real testimonial posts.',
    tools: ['After Effects', 'Stock B-roll', 'Captions'] },
  { id: 'gradglobe-05', cat: 'perf', ar: '9:16', badge: 'Awareness Reel', title: 'GradGlobe — Why Rankings Mislead',
    desc: 'Data-led motion graphics (stats, ranking cards, fit check) with compressed-caps captions and Australia / Lithuania visa testimonials.',
    tools: ['After Effects', 'Infographics', 'Captions'] },
  { id: 'gradglobe-06', cat: 'organic', ar: '9:16', badge: 'Organic Reel', title: 'GradGlobe — IELTS Q&A',
    desc: 'Q&A format with whip-pan transitions, IELTS / PTE / TOEFL / DET logo stickers, impact punch-ins and re-voiced off-camera questions.',
    tools: ['After Effects', 'Transitions', 'Audio Cleanup'] },
  { id: 'gradglobe-09', cat: 'organic', ar: '9:16', badge: 'Organic Reel', title: 'GradGlobe — USA vs Germany',
    desc: 'Voice-note questions over listening shots, Hinglish answers captioned word by word, whip transitions and the brand outro.',
    tools: ['After Effects', 'Hinglish Captions', 'Audio Mix'] },
  { id: 'gradglobe-03', cat: 'captions', ar: '9:16', badge: 'Captions', title: 'GradGlobe — Part-Time Myth Buster',
    desc: 'Per-word animated captions (compressed caps + Poppins Light) with a beat punch on every spoken word, plus re-voiced questions.',
    tools: ['Python', 'FFmpeg', 'Whisper'] },
  { id: 'pulsecrafts-legal', cat: 'motion', ar: '9:16', badge: 'Client Explainer', title: 'PulseCrafts — Legal Structure Explainer',
    desc: 'Vertical explainer for a Fiverr client built end to end in After Effects: animated typography, iconography and voice-led pacing.',
    tools: ['After Effects', 'Typography', 'Voiceover Mix'] },
  { id: 'surviving-ai', cat: 'captions', ar: '9:16', badge: 'Captions & Graphics', title: 'Surviving AI — Influencer Reel',
    desc: 'Kinetic caption overlay and cut-in graphics built in Remotion and dropped onto a Premiere edit with an SFX-only mix.',
    tools: ['Remotion', 'Premiere Pro', 'SFX'] },
  { id: 'claude-promo', cat: 'motion', ar: '16:9', badge: 'SaaS Promo', title: 'Claude — SaaS Product Promo',
    desc: 'Widescreen product promo in After Effects: UI cards, bold typography and brand-colour motion timed to the beat.',
    tools: ['After Effects', 'UI Motion', 'Typography'] },
  { id: 'saas-intro', cat: 'motion', ar: '16:9', badge: 'Motion Intro', title: 'SaaS Intro Showcase',
    desc: 'A 60 fps motion-graphics intro: kinetic type, glass panels and quick camera moves, built as an After Effects script.',
    tools: ['After Effects', 'ExtendScript', '60 fps'] },
  { id: 'matcha-promo', cat: 'motion', ar: '4:5', badge: 'Social Promo', title: 'Personal Promo — Remotion',
    desc: 'Short 4:5 feed promo coded in Remotion (React): animated layout, typography and transitions rendered frame-perfect.',
    tools: ['Remotion', 'React', 'Motion'] },
];

const play = '<div class="proj-play-overlay"><div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div></div>';
const card = (p) => {
  const d = dur(p.id);
  const vert = p.ar !== '16:9' ? ' vertical' : '';
  return `
      <div class="proj-card" data-cat="${p.cat}" onclick="openVideoModal('/videos/work/${p.id}.mp4', '${p.title.replace(/'/g, "\\'")}')" data-rv="up">
        <div class="proj-thumb-wrap${vert}">
          <img class="proj-thumb" src="/images/work/${p.id}.jpg" alt="${p.title}" loading="lazy">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">${p.badge}</span>
            <span class="proj-dur-badge">${d} · ${p.ar}</span>
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
};
const count = (c) => PROJECTS.filter((p) => p.cat === c).length;

// ---- 1. project archive (filters + grid) ----
const gridStart = html.indexOf('<!-- Complete 6 Projects Grid -->');
const gridEnd = html.indexOf('<!-- ============================================================ 03 · THE CRAFT');
if (gridStart < 0 || gridEnd < 0) throw new Error('project grid markers not found');
const archive = `<!-- Complete Projects Grid (real work) -->
  <div style="margin-top: 60px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:28px;">
      <div>
        <h3 class="display" style="font-size:clamp(22px,2.4vw,34px);color:var(--bone);margin:0 0 6px;" data-rv="up">Edits I&apos;ve Delivered</h3>
        <p style="font-size:13px;color:#9aa5a0;margin:0;" data-rv="up">Click any card to play the edit. Full-quality masters are in the <a href="${ME.drive}" target="_blank" rel="noopener noreferrer" style="color:var(--bone);text-decoration:underline;">Google Drive portfolio folder</a>.</p>
      </div>
      <div class="proj-filters" data-rv="fade">
        <button class="filter-btn active" onclick="filterProjects('all', this)">All Work (${PROJECTS.length})</button>
        <button class="filter-btn" onclick="filterProjects('perf', this)">Performance Reels (${count('perf')})</button>
        <button class="filter-btn" onclick="filterProjects('organic', this)">Organic Reels (${count('organic')})</button>
        <button class="filter-btn" onclick="filterProjects('motion', this)">Motion Design (${count('motion')})</button>
        <button class="filter-btn" onclick="filterProjects('captions', this)">Captions (${count('captions')})</button>
      </div>
    </div>

    <div class="proj-grid">${PROJECTS.map(card).join('\n')}
    </div>
    <div style="margin-top:36px;display:flex;justify-content:center;" data-rv="up">
      <a href="${ME.drive}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;padding:12px 24px;border-radius:999px;border:1px solid rgba(223,231,224,.3);color:var(--bone);font-size:11px;letter-spacing:.2em;text-transform:uppercase;background:rgba(5,7,10,.5);">Full-quality masters on Google Drive →</a>
    </div>
  </div>
</section>

`;
html = html.slice(0, gridStart) + archive + html.slice(gridEnd);

// ---- 2. featured cloth-shader cards ----
const feat = [
  ['/videos/hero-reel.mp4', 'Cinematic Showreel 2026 — Sandeep Mamidala', 'Showreel', '映像', 'Motion Intro · 0:15'],
  ['/videos/work/gradglobe-07.mp4', 'GradGlobe — Country Confusion', 'GradGlobe', '縦型動画', 'Performance Reel · ' + dur('gradglobe-07')],
  ['/videos/work/gradglobe-08.mp4', 'GradGlobe — Hidden Costs of Studying Abroad', 'Hidden Costs', 'リール', 'Neon Captions · ' + dur('gradglobe-08')],
];
let fi = 0;
html = html.replace(/<article class="card"([^>]*?)onclick="openVideoModal\('[^']*', '[^']*'\)">([\s\S]*?)<\/article>/g, (m, attrs, inner) => {
  const [src, title, lab, jp, meta] = feat[fi++] || [];
  if (!src) return m;
  inner = inner.replace(/<div class="card-lab"><b>[^<]*<\/b><span class="jp">[^<]*<\/span><\/div>/, `<div class="card-lab"><b>${lab}</b><span class="jp">${jp}</span></div>`);
  inner = inner.replace(/<div class="card-meta"><span>[^<]*<\/span>/, `<div class="card-meta"><span>${meta}</span>`);
  return `<article class="card"${attrs}onclick="openVideoModal('${src}', '${title}')">${inner}</article>`;
});
if (fi !== 3) throw new Error('expected 3 featured cards, got ' + fi);

// ---- 3. identity + honest stats ----
const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 60)); html = html.split(a).join(b); };
rep('PORTFOLIO 2026 — SANDEEP M<', 'PORTFOLIO 2026 — SANDEEP MAMIDALA<');
rep('Cinematic video editor crafting high-retention viral reels, SaaS product launch films, and emotion-driven brand narratives.',
    'Video editor &amp; motion designer cutting performance reels, organic social content, SaaS promos and caption-driven shorts for brands and creators.');
rep(`<div><b>50M+</b><span>Views Generated</span></div>
    <div><b>150+</b><span>Videos Edited</span></div>
    <div><b>98%</b><span>Client Retention</span></div>
    <div><b>4K</b><span>Master Delivery</span></div>`,
    `<div><b>${PROJECTS.length}</b><span>Featured Edits</span></div>
    <div><b>30+</b><span>Reels for GradGlobe</span></div>
    <div><b>24–48h</b><span>First Cut</span></div>
    <div><b>4K</b><span>Master Delivery</span></div>`);
rep('Whether crafting high-velocity Instagram Reels that breach millions of views, or cutting',
    'Whether crafting high-velocity Instagram Reels for study-abroad brands, or cutting');
rep(`openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel — Sandeep M')`, `openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel — Sandeep Mamidala')`);
rep(`openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel 2026 — Sandeep M')`, `openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel 2026 — Sandeep Mamidala')`);
rep('alt="Sandeep M — Cinematic Video Editor"', 'alt="Sandeep Mamidala — Video Editor"');
rep('<div class="about-name">Sandeep M</div>', '<div class="about-name">Sandeep Mamidala</div>');
rep('<div class="about-title-tag">Cinematic Video Editor & Creator</div>', '<div class="about-title-tag">Video Editor &amp; Motion Designer · India</div>');
rep(`<p>I&apos;m <strong>Sandeep M</strong>, a cinematic video editor dedicated to helping creators, SaaS founders, and forward-thinking brands dominate their niche through visual storytelling.</p>`,
    `<p>I&apos;m <strong>Sandeep Mamidala</strong>, a freelance video editor and motion designer from Telangana, studying at Lovely Professional University in Punjab and working remotely with clients worldwide.</p>
      <p>Recently IRecently I&apos;ve delivered a full series of performance and organic reels for the study-abroad brand <strong>GradGlobe</strong>apos;ve delivered <strong>30+ performance and organic reels</strong> for the study-abroad brand <strong>GradGlobe</strong>, explainers for Fiverr clients, and SaaS promos built in After Effects and Remotion.</p>`);
rep('My editorial approach merges <strong>rhythmic micro-pacing, multi-layered sound design, and Hollywood color grading</strong>',
    'My approach merges <strong>tight pacing, layered sound design, motion graphics and caption design</strong>');

// ---- 4. contact sidebar ----
const sideStart = html.indexOf('<div class="contact-sidebar">');
const sideEnd = html.indexOf('<!-- Right Form -->');
html = html.slice(0, sideStart) + `<div class="contact-sidebar">
        <div class="contact-info-card">
          <div class="contact-info-label">Email</div>
          <a class="contact-info-val" href="mailto:${ME.email}" target="_top">${ME.email}</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">Phone / WhatsApp</div>
          <a class="contact-info-val" href="tel:${ME.tel}" target="_top">${ME.phone}</a>
          <a class="contact-info-val" style="display:block;margin-top:6px;font-size:13px;" href="${ME.wa}" target="_blank" rel="noopener noreferrer">Start WhatsApp Chat →</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">Full-Quality Portfolio</div>
          <a class="contact-info-val" href="${ME.drive}" target="_blank" rel="noopener noreferrer">Google Drive folder →</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">Profiles</div>
          <a class="contact-info-val" href="${ME.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
          <a class="contact-info-val" style="display:block;margin-top:6px;" href="${ME.github}" target="_blank" rel="noopener noreferrer">GitHub →</a>
        </div>
        <div class="contact-info-card">
          <div class="contact-info-label">Turnaround & Delivery</div>
          <div style="font-size:13px;color:#aab4ad;line-height:1.6;">First cut usually within 24–48 hours. Masters delivered in 4K / 1080p, 9:16, 4:5 or 16:9. Based in India (IST), working remotely.</div>
        </div>
      </div>
      ` + html.slice(sideEnd);

// ---- 5. footer + mail handler ----
rep('<p>Sandeep M — Cinematic Video Editor & Content Creator. High-impact editing for visionary brands, creators, and tech innovators worldwide.</p>',
    `<p>Sandeep Mamidala — Video Editor &amp; Motion Designer.<br><a href="mailto:${ME.email}" target="_top">${ME.email}</a> · <a href="tel:${ME.tel}" target="_top">${ME.phone}</a></p>`);
rep(`<li><a href="mailto:sandeepmamidala77@gmail.com" data-cursor>Email Sandeep</a></li>
      <li><a href="#hero" data-cursor>Back to Top ↑</a></li>
      <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-cursor>Instagram</a></li>
      <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-cursor>YouTube</a></li>`,
    `<li><a href="mailto:${ME.email}" target="_top" data-cursor>Email</a></li>
      <li><a href="${ME.wa}" target="_blank" rel="noopener noreferrer" data-cursor>WhatsApp</a></li>
      <li><a href="${ME.linkedin}" target="_blank" rel="noopener noreferrer" data-cursor>LinkedIn</a></li>
      <li><a href="${ME.github}" target="_blank" rel="noopener noreferrer" data-cursor>GitHub</a></li>
      <li><a href="${ME.drive}" target="_blank" rel="noopener noreferrer" data-cursor>Google Drive Portfolio</a></li>`);
rep('<span>© 2026 Sandeep M · Cinematic Video Editor</span>', '<span>© 2026 Sandeep Mamidala · Video Editor</span>');
rep(`window.location.href = 'mailto:sandeepmamidala77@gmail.com?subject=' + subject + '&body=' + body;`,
    `var mail = 'mailto:${ME.email}?subject=' + subject + '&body=' + body;
    try { window.top.location.href = mail; } catch (err) { window.location.href = mail; }`);
rep('<title>Sandeep M — Cinematic Video Editor & Visual Storyteller</title>', '<title>Sandeep Mamidala — Video Editor & Motion Designer</title>');

// ---- 6. modal: narrow box for vertical videos ----
rep('.vm-video-wrap video {', '.vm-box.vertical { max-width: min(460px, 92vw); }\n.vm-video-wrap video {');
rep(`    if (src && video.currentSrc !== src) {
      video.src = src;
    }`, `    if (src && video.getAttribute('src') !== src) {
      video.src = src;
    }
    const box = modal.querySelector('.vm-box');
    const fit = function() { if (box && video.videoWidth) box.classList.toggle('vertical', video.videoHeight > video.videoWidth); };
    video.onloadedmetadata = fit; fit();`);
rep('.proj-thumb-wrap.vertical { aspect-ratio: 16/10; }', '.proj-thumb-wrap.vertical { aspect-ratio: 16/10; }\n.proj-thumb-wrap.vertical .proj-thumb { object-position: center 30%; }');

if (/sandeepmamidala77|Sandeep M[^a]/.test(html)) {
  const left = html.match(/.{40}(sandeepmamidala77|Sandeep M[^a]).{40}/g);
  console.warn('leftovers:', left);
}
fs.writeFileSync(FILE, html);
console.log('kage.html updated:', PROJECTS.length, 'projects');
