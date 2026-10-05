const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original content length:', content.length);

// 1. Replace Title & Meta
content = content.replace(
  '<title>Kage — Where stillness reveals the unseen</title>',
  '<title>Sandeep M — Cinematic Video Editor & Visual Storyteller</title>'
);
content = content.replace(
  '<meta name="description" content="A five-chapter night walk through a Kyoto mountain temple. Charred cypress, lantern light and a vermilion moon, rendered live in WebGL.">',
  '<meta name="description" content="Cinematic video editor specializing in commercial films, high-retention viral reels, SaaS motion explainers, and narrative visual storytelling.">'
);

// 2. Localize all Supabase URLs for images
content = content.replace(
  /https:\/\/ublctyddhtbgaersvxxb\.supabase\.co\/storage\/v1\/object\/public\/threeui-media\/scene-images\/6884c5281949d2c3530ad4cf\//g,
  'secret-pathways-assets/generated/'
);
content = content.replace(
  /https:\/\/ublctyddhtbgaersvxxb\.supabase\.co\/storage\/v1\/object\/public\/threeui-media\/scene-images\/35388445965f970fa28af333\//g,
  'secret-pathways-assets/foreground/png/'
);

// 3. Add Video Modal CSS right before </style>
const videoModalCss = `
/* ============================================================= cinematic video modal */
#video-modal {
  position: fixed; inset: 0; z-index: 99999;
  background: rgba(5,7,10,.88);
  backdrop-filter: blur(24px) saturate(1.2);
  -webkit-backdrop-filter: blur(24px) saturate(1.2);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; visibility: hidden; pointer-events: none;
  transition: opacity .4s var(--ease), visibility .4s;
  padding: 24px;
}
#video-modal.open {
  opacity: 1; visibility: visible; pointer-events: auto;
}
.vm-box {
  position: relative; width: 100%; max-width: 1000px;
  background: #080d12; border: 1px solid rgba(223,231,224,.18);
  border-radius: 18px; overflow: hidden;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,.95), 0 0 50px rgba(224,35,28,.15);
  display: flex; flex-direction: column;
}
.vm-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 24px; border-bottom: 1px solid rgba(223,231,224,.1);
  background: rgba(9,14,19,.9);
}
.vm-title {
  font-size: 13px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
  color: var(--bone); display: flex; align-items: center; gap: 10px;
}
.vm-title .dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--vermilion);
  box-shadow: 0 0 10px var(--vermilion);
}
.vm-close {
  width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(223,231,224,.2);
  display: grid; place-items: center; cursor: pointer; color: var(--bone); font-size: 14px;
  background: rgba(223,231,224,.05); transition: all .3s;
}
.vm-close:hover {
  background: rgba(223,231,224,.2); border-color: rgba(223,231,224,.6); color: #fff;
}
.vm-video-wrap {
  position: relative; width: 100%; background: #000;
  display: flex; align-items: center; justify-content: center;
}
.vm-video-wrap video {
  width: 100%; max-height: 72vh; display: block; object-fit: contain; outline: none;
}
`;
content = content.replace('/* ============================================================= layers */', videoModalCss + '\n/* ============================================================= layers */');

// 4. Update Preloader Text
content = content.replace(
  '<div class="pre-jp jp">影の道</div>',
  '<div class="pre-jp jp">映像編集者 · SANDEEP M</div>'
);
content = content.replace(
  '<span>Raising the mountain temple</span>',
  '<span>Loading Cinematic Portfolio</span>'
);

// 5. Update Navbar
const oldNav = `<header class="nav" id="nav">
  <a class="brand" href="#top" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
      <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      <path d="M14 35.5h16" stroke="#dfe7e0" stroke-width="1.2" stroke-opacity=".6"/>
    </svg>
    <span class="brand-tx"><b>KAGE</b><i>HIDDEN REALMS OF KYOTO</i></span>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#gate" data-cursor><span>Temples</span><span class="alt">伽藍</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Gardens</span><span class="alt">庭園</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>Rituals</span><span class="alt">神事</span></a>
    <a class="nav-link" href="#eternity" data-cursor><span>Afterlight</span><span class="alt">残光</span></a>
  </nav>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>`;

const newNav = `<header class="nav" id="nav">
  <a class="brand" href="#top" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
      <circle cx="22" cy="22" r="18" fill="#e0231c" fill-opacity=".9"/>
      <path d="M17 14L31 22L17 30Z" fill="#dfe7e0"/>
    </svg>
    <span class="brand-tx"><b>SANDEEP M</b><i>CINEMATIC VIDEO EDITOR</i></span>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#hero" data-cursor><span>Showreel</span><span class="alt">リール</span></a>
    <a class="nav-link" href="#gate" data-cursor><span>Impact</span><span class="alt">実績</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Showcase</span><span class="alt">作品</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>The Craft</span><span class="alt">技術</span></a>
    <a class="nav-link" href="#eternity" data-cursor><span>Contact</span><span class="alt">連絡</span></a>
  </nav>
  <div style="display:flex;align-items:center;gap:12px;margin-left:auto;">
    <a href="/" target="_top" style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#dfe7e0;border:1px solid rgba(223,231,224,.22);padding:7px 16px;border-radius:999px;backdrop-blur-md;background:rgba(5,7,10,.6);transition:all .3s ease;" onmouseover="this.style.borderColor='#fff';this.style.color='#05070a';this.style.background='#fff'" onmouseout="this.style.borderColor='rgba(223,231,224,.22)';this.style.color='#dfe7e0';this.style.background='rgba(5,7,10,.6)'">Classic View</a>
  </div>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>`;

content = content.replace(oldNav, newNav);

// 6. Update Hero Section
const oldHero = `<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot"></span> Chapter 00 — The Hidden Gate</div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Where stillness</span></span>
      <span class="mask-line"><span>reveals the</span></span>
      <span class="mask-line"><span>unseen.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">Enter Kyoto through its quiet thresholds, where ritual,
      craft, and memory shape the path.</p>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Scroll to enter</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor><span class="num">01</span>
        <span class="tx"><b>Thresholds</b><p>Discover the hidden gates that open on to deeper paths.</p></span></div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor><span class="num">02</span>
        <span class="tx"><b>Still Gardens</b><p>Witness the courts where silence gently unfolds.</p></span></div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor><span class="num">03</span>
        <span class="tx"><b>Sacred Craft</b><p>Embrace the hands and heritage that shape devotion.</p></span></div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor><span class="num">04</span>
        <span class="tx"><b>Night Rituals</b><p>Explore the rites that awaken when the day is done.</p></span></div>
    </div>
  </div>

  <a class="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Sanmon, before the bell">
    <!-- data-frame, or the live view is blitted over the whole anchor and
         runs on down behind the caption instead of stopping at the frame -->
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b class="jp">山門</b><i>Sanmon — before the bell</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">KAGE</div>

  <div class="hero-side" data-rv="up">
    <span class="v jp">影の道</span>
  </div>
</section>`;

const newHero = `<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot"></span> PORTFOLIO 2026 — SANDEEP M</div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Where visual rhythm</span></span>
      <span class="mask-line"><span>reveals the</span></span>
      <span class="mask-line"><span>extraordinary.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">Cinematic video editor crafting high-retention viral reels, SaaS product launch films, and emotion-driven brand narratives.</p>
    <div style="margin-top:24px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;" data-rv="up">
      <button class="cta-play-reel" onclick="openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel 2026 — Sandeep M')" style="display:inline-flex;align-items:center;gap:10px;padding:12px 24px;border-radius:999px;background:#e0231c;color:#fff;font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;border:0;box-shadow:0 0 24px rgba(224,35,28,.45);transition:all .3s ease;" onmouseover="this.style.transform='scale(1.04)';this.style.boxShadow='0 0 32px rgba(224,35,28,.75)'" onmouseout="this.style.transform='none';this.style.boxShadow='0 0 24px rgba(224,35,28,.45)'">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg>
        <span>Play 2026 Showreel</span>
      </button>
      <a href="#pathways" style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#dfe7e0;padding:12px 20px;border:1px solid rgba(223,231,224,.22);border-radius:999px;transition:border-color .3s;background:rgba(5,7,10,.4);" onmouseover="this.style.borderColor='rgba(223,231,224,.6)'" onmouseout="this.style.borderColor='rgba(223,231,224,.22)'">Explore Selected Work</a>
    </div>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Scroll to explore</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor><span class="num">01</span>
        <span class="tx"><b>Showreel</b><p>High-impact cinematic cuts engineered for maximum retention.</p></span></div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor><span class="num">02</span>
        <span class="tx"><b>Viral Reels</b><p>Scroll-stopping hooks, dynamic sound design, and micro-pacing.</p></span></div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor><span class="num">03</span>
        <span class="tx"><b>SaaS & Tech</b><p>Sleek UI motion graphics and high-converting product videos.</p></span></div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor><span class="num">04</span>
        <span class="tx"><b>Color & Sound</b><p>Hollywood color science and immersive layered soundscapes.</p></span></div>
    </div>
  </div>

  <a class="peek" href="javascript:void(0)" onclick="openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel — Sandeep M')" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Cinematic Showreel">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b class="jp">映像</b><i>Showreel — Click to play</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">SANDEEP</div>

  <div class="hero-side" data-rv="up">
    <span class="v jp">映像編集者</span>
  </div>
</section>`;

content = content.replace(oldHero, newHero);

// 7. Update Chapter 01 (Gate section -> Impact & Editing Suite)
content = content.replace(
  '<span class="k"><b>01</b> — The Sanmon</span><span class="rule"></span><span class="k jp">山門</span>',
  '<span class="k"><b>01</b> — The Edit Suite</span><span class="rule"></span><span class="k jp">編集室</span>'
);
content = content.replace(
  '<h2 class="display h-sec" data-rv="up">Charred cypress, worn stone, one gate left open.</h2>',
  '<h2 class="display h-sec" data-rv="up">Rhythm, pacing, and color: Edits that command attention.</h2>'
);
content = content.replace(
  `<p class="lead" data-rv="up">Kage begins where the city stops: a mountain gate of cedar burned black,
        standing in its own weather. The soot is not decoration. It is how a board is taught to survive a
        hundred rainy seasons, and the first thing this place asks you to understand.</p>`,
  `<p class="lead" data-rv="up">Every great edit begins with storytelling intention. It's never just cutting clips to music—it's engineering suspense, controlling dopamine loops, and crafting a visual flow that keeps viewers hooked from the first frame to the final beat.</p>`
);
content = content.replace(
  `<p class="body" data-rv="up">Climb the worn steps and the worship hall lifts out of the mist, its paper
        screens lit from inside like a lantern the size of a house. Above the eaves a vermilion moon holds
        its place, patient, half hidden. Nothing here is in a hurry. Neither, for the next ninety minutes,
        are you.</p>`,
  `<p class="body" data-rv="up">Whether crafting high-velocity Instagram Reels that breach millions of views, or cutting immersive SaaS product explainers and brand anthems, each frame is polished with meticulous sound design, kinetic typography, and DaVinci Resolve color grading.</p>`
);
content = content.replace(
  `<span>Cross the threshold</span>`,
  `<span>Watch 2026 Showreel</span>`
);
content = content.replace(
  `<a class="arrowlink" href="#pathways" data-rv="fade" data-cursor>`,
  `<a class="arrowlink" href="javascript:void(0)" onclick="openVideoModal('/videos/hero-reel.mp4', '2026 Cinematic Showreel')" data-rv="fade" data-cursor>`
);
content = content.replace(
  `<div class="gate-stats" data-rv="up">
    <div><b>05</b><span>Chapters</span></div>
    <div><b>92</b><span>Minutes</span></div>
    <div><b>1611</b><span>Hall raised</span></div>
    <div><b>∞</b><span>Stillness</span></div>
  </div>`,
  `<div class="gate-stats" data-rv="up">
    <div><b>50M+</b><span>Views Generated</span></div>
    <div><b>150+</b><span>Videos Edited</span></div>
    <div><b>98%</b><span>Client Retention</span></div>
    <div><b>4K</b><span>Master Delivery</span></div>
  </div>`
);

// 8. Update Chapter 02 (Cards section -> Portfolio Showcase)
content = content.replace(
  `<span class="k"><b>02</b> — Still Gardens</span><span class="rule"></span><span class="k jp">庭園</span>`,
  `<span class="k"><b>02</b> — Selected Work</span><span class="rule"></span><span class="k jp">作品集</span>`
);
content = content.replace(
  `<div class="card-lab"><b>Approach</b><span class="jp">参道</span></div>`,
  `<div class="card-lab"><b>Brand Film</b><span class="jp">ブランド</span></div>`
);
content = content.replace(
  `<span>The long climb</span><span>01 / 03</span>`,
  `<span>Commercial Showreel (Click to play)</span><span>01 / 03</span>`
);
content = content.replace(
  `<div class="card-lab"><b>Lanterns</b><span class="jp">灯籠</span></div>`,
  `<div class="card-lab"><b>Viral Reel</b><span class="jp">縦型動画</span></div>`
);
content = content.replace(
  `<span>Lantern court</span><span>02 / 03</span>`,
  `<span>9:16 Retention Cut (Click to play)</span><span>02 / 03</span>`
);
content = content.replace(
  `<div class="card-lab"><b>Moonwater</b><span class="jp">月影</span></div>`,
  `<div class="card-lab"><b>SaaS & Tech</b><span class="jp">プロダクト</span></div>`
);
content = content.replace(
  `<span>The wet court</span><span>03 / 03</span>`,
  `<span>Product Motion Explainer (Click to play)</span><span>03 / 03</span>`
);

// Add click events to the cards in Chapter 02
content = content.replace(
  `<article class="card" data-rv="up" data-view="0" data-cursor>`,
  `<article class="card" data-rv="up" data-view="0" data-cursor onclick="openVideoModal('/videos/hero-reel.mp4', 'Brand Commercial & Narrative Film')">`
);
content = content.replace(
  `<article class="card" data-rv="up" data-view="1" data-cursor>`,
  `<article class="card" data-rv="up" data-view="1" data-cursor onclick="openVideoModal('/videos/reel-vertical.mp4', 'High-Retention Viral Reel Showcase')">`
);
content = content.replace(
  `<article class="card" data-rv="up" data-view="2" data-cursor>`,
  `<article class="card" data-rv="up" data-view="2" data-cursor onclick="openVideoModal('/videos/gradglobe-preview.mp4', 'SaaS Product Motion Explainer')">`
);

// 9. Update Chapter 03 (Lessons -> The Editing Philosophy & 5 Pillars)
content = content.replace(
  `<span class="k"><b>03</b> — Sacred Craft</span><span class="rule"></span><span class="k jp">手業</span>`,
  `<span class="k"><b>03</b> — The Editing Craft</span><span class="rule"></span><span class="k jp">技術哲学</span>`
);
content = content.replace(
  `<h2 class="display h-sec" data-rv="up">Five chapters. Ninety minutes. One quiet mind.</h2>`,
  `<h2 class="display h-sec" data-rv="up">Five principles. Millisecond precision. Unbroken immersion.</h2>`
);
content = content.replace(
  `<p class="body-lg" data-rv="up">Each chapter is a walk, not a lecture. You arrive at the gate, climb the
      steps, sit with the lantern, and leave with one thing worth keeping.</p>`,
  `<p class="body-lg" data-rv="up">Great editing is invisible. The viewer doesn't just watch the video—they feel the velocity, the emotional resonance, and the seamless transition between moments.</p>`
);

const oldLessons = `<div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor>
      <span class="k">01</span>
      <h3>The Hidden Gate<em class="jp">山門</em></h3>
      <p>Why a gate is a sentence, and what you agree to when you walk under one.</p>
      <span class="t">14 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor>
      <span class="k">02</span>
      <h3>Borrowed Scenery<em class="jp">借景</em></h3>
      <p>Shakkei: composing with a mountain you will never own.</p>
      <span class="t">18 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor>
      <span class="k">03</span>
      <h3>Charred Cypress<em class="jp">焼杉</em></h3>
      <p>Yakisugi: burning a board black so the weather will let it live.</p>
      <span class="t">21 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor>
      <span class="k">04</span>
      <h3>Lantern Light<em class="jp">灯籠</em></h3>
      <p>How a single ember decides the scale of everything around it.</p>
      <span class="t">17 min</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor>
      <span class="k">05</span>
      <h3>The Vermilion Moon<em class="jp">朱月</em></h3>
      <p>Why the moon burns red over the valley, and what the garden does with it.</p>
      <span class="t">22 min</span><i class="bar"></i>
    </div>
  </div>`;

const newLessons = `<div class="cur" id="cur">
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
  </div>`;

content = content.replace(oldLessons, newLessons);

// 10. Update Chapter 04 (Collaborate & Booking)
content = content.replace(
  `<div class="eyebrow" data-rv="fade">Chapter 04 — Afterlight</div>`,
  `<div class="eyebrow" data-rv="fade">Chapter 04 — Collaboration</div>`
);
content = content.replace(
  `<h2 class="display" data-rv="up">Afterlight</h2>`,
  `<h2 class="display" data-rv="up">Let's Create Something Extraordinary</h2>`
);
content = content.replace(
  `<p class="body-lg" data-rv="up">The gate does not close behind you. Take the walk whenever the noise
    gets loud — it is always the same path, and never the same light.</p>`,
  `<p class="body-lg" data-rv="up">Ready to scale your content, boost your retention, and give your brand a high-end cinematic edge? Let's discuss your next project.</p>`
);
content = content.replace(
  `<i></i><span>Begin the walk</span>`,
  `<i></i><span>Book an Edit / Get In Touch</span>`
);
content = content.replace(
  `<a class="cta" href="#top" data-rv="fade" data-cursor>`,
  `<a class="cta" href="mailto:mamidi.sandeep@example.com?subject=Video%20Editing%20Inquiry%20from%20Portfolio" data-rv="fade" data-cursor>`
);

// 11. Update Footer
const oldFooterGrid = `<div class="foot-grid">
    <div class="foot-brand">
      <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
        <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      </svg>
      <p>A five-chapter night walk through a Kyoto mountain temple. Three illustrated garden field notes
        sit inside a live Three.js sanctuary.</p>
    </div>
    <div><h4>Chapters</h4><ul>
      <li><a href="#gate" data-cursor>The Sanmon</a></li>
      <li><a href="#pathways" data-cursor>Still Gardens</a></li>
      <li><a href="#lessons" data-cursor>Sacred Craft</a></li>
      <li><a href="#eternity" data-cursor>Afterlight</a></li>
    </ul></div>
    <div><h4>Practice</h4><ul>
      <li><a href="#lessons" data-cursor>Borrowed scenery</a></li>
      <li><a href="#lessons" data-cursor>Lantern light</a></li>
      <li><a href="#lessons" data-cursor>Charred cypress</a></li>
      <li><a href="#lessons" data-cursor>Raked gravel</a></li>
    </ul></div>
    <div><h4>Elsewhere</h4><ul>
      <li><a href="#top" data-cursor>Journal</a></li>
      <li><a href="#top" data-cursor>Field notes</a></li>
      <li><a href="#top" data-cursor>Colophon</a></li>
    </ul></div>
  </div>`;

const newFooterGrid = `<div class="foot-grid">
    <div class="foot-brand">
      <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="22" r="18" fill="#e0231c" fill-opacity=".9"/>
        <path d="M17 14L31 22L17 30Z" fill="#dfe7e0"/>
      </svg>
      <p>Sandeep M — Cinematic Video Editor & Content Creator. High-impact editing for visionary brands, creators, and tech innovators worldwide.</p>
    </div>
    <div><h4>Navigation</h4><ul>
      <li><a href="#hero" data-cursor>Showreel</a></li>
      <li><a href="#gate" data-cursor>Edit Suite & Stats</a></li>
      <li><a href="#pathways" data-cursor>Work Showcase</a></li>
      <li><a href="#lessons" data-cursor>The Craft</a></li>
    </ul></div>
    <div><h4>Specialties</h4><ul>
      <li><a href="#lessons" data-cursor>Viral Reels & Shorts</a></li>
      <li><a href="#lessons" data-cursor>Commercial Brand Films</a></li>
      <li><a href="#lessons" data-cursor>SaaS & Tech Motion Demos</a></li>
      <li><a href="#lessons" data-cursor>Sound Design & Grading</a></li>
    </ul></div>
    <div><h4>Connect</h4><ul>
      <li><a href="mailto:mamidi.sandeep@example.com" data-cursor>Email Sandeep</a></li>
      <li><a href="/" target="_top" data-cursor>Standard Portfolio</a></li>
      <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-cursor>Instagram</a></li>
      <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-cursor>YouTube</a></li>
    </ul></div>
  </div>`;

content = content.replace(oldFooterGrid, newFooterGrid);

content = content.replace(
  `<span>© 2026 Kage — Kage no Michi</span>
    <span class="jp">静けさは一つの技である</span>
    <span>WebGL · Onest · Kyoto</span>`,
  `<span>© 2026 Sandeep M · Cinematic Video Editor</span>
    <span class="jp">映像の力で世界を魅了する</span>
    <span>Next.js · Three.js · 4K Cinema</span>`
);

// 12. Add Video Modal HTML and global helper functions before </body>
const videoModalHtml = `
<!-- ============================================================ cinematic video modal -->
<div id="video-modal" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="vm-box">
    <div class="vm-header">
      <div class="vm-title"><span class="dot"></span> <span id="vm-title-text">Cinematic Video Showcase</span></div>
      <button class="vm-close" onclick="closeVideoModal()" aria-label="Close video">✕</button>
    </div>
    <div class="vm-video-wrap">
      <video id="vm-video" controls playsinline preload="auto">
        <source src="/videos/hero-reel.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
</div>

<script>
window.openVideoModal = function(src, title) {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('vm-video');
  const titleEl = document.getElementById('vm-title-text');
  if (modal && video) {
    if (title && titleEl) titleEl.textContent = title;
    if (src && video.currentSrc !== src) {
      video.src = src;
    }
    modal.classList.add('open');
    video.play().catch(function() {});
  }
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('vm-video');
  if (modal && video) {
    video.pause();
    modal.classList.remove('open');
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') window.closeVideoModal();
});

document.addEventListener('click', function(e) {
  const modal = document.getElementById('video-modal');
  if (e.target === modal) window.closeVideoModal();
});
</script>
`;

content = content.replace('</body>', videoModalHtml + '\n</body>');

// 13. Update 3D Wordmark in JavaScript to SANDEEP
content = content.replace(
  `const SZ = 320, TRACK = .40, PAD = 26;
  const m = cvs(4, 4).getContext('2d');
  m.font = '600 ' + SZ + 'px Wordmark, sans-serif';
  m.textBaseline = 'alphabetic'; m.textAlign = 'left';
  const word = 'KAGE', gl = [];`,
  `const SZ = 260, TRACK = .20, PAD = 24;
  const m = cvs(4, 4).getContext('2d');
  m.font = '700 ' + SZ + 'px "Onest", "Wordmark", sans-serif';
  m.textBaseline = 'alphabetic'; m.textAlign = 'left';
  const word = 'SANDEEP', gl = [];`
);

content = content.replace(
  `x.font = '600 ' + SZ + 'px Wordmark, sans-serif';`,
  `x.font = '700 ' + SZ + 'px "Onest", "Wordmark", sans-serif';`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated kage.html! New length:', content.length);
