// Hero peek tile plays the SaaS Intro Showcase (muted loop); click opens it in the player.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');
if (html.includes('class="peek-vid"')) { console.log('already applied'); process.exit(0); }
const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 70)); html = html.split(a).join(b); };
rep(`<a class="peek" href="javascript:void(0)" onclick="openVideoModal('/videos/hero-reel.mp4', 'Cinematic Showreel — Sandeep Mamidala')" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Cinematic Showreel">
    <span class="peek-fr" data-frame></span>`,
`<a class="peek" href="javascript:void(0)" onclick="openVideoModal('/videos/work/saas-intro.mp4', 'SaaS Intro Showcase')" data-view="3" data-rv="fade" data-cursor aria-label="Play: SaaS Intro Showcase">
    <span class="peek-fr" data-frame><video class="peek-vid" src="/videos/work/saas-intro.mp4" poster="/images/work/saas-intro.jpg" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video></span>`);
rep('<span class="peek-cap"><b class="jp">映像</b><i>Showreel — Click to play</i></span>',
    '<span class="peek-cap"><b class="jp">映像</b><i>SaaS Intro — Click to play</i></span>');
// pause the tile while the full player is open
rep(`    if (window.__lenis) window.__lenis.stop();`, `    if (window.__lenis) window.__lenis.stop();
    var pv = document.querySelector('.peek-vid'); if (pv) pv.pause();`);
rep(`    if (window.__lenis) window.__lenis.start();`, `    if (window.__lenis) window.__lenis.start();
    var pv = document.querySelector('.peek-vid'); if (pv) pv.play().catch(function () {});`);
const css = `
/* hero peek tile: live video preview inside the frame */
.peek-fr{ position:relative; overflow:hidden; }
.peek-vid{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; border-radius:inherit; }
`;
const lastStyle = html.lastIndexOf('</style>', html.indexOf('</head>'));
html = html.slice(0, lastStyle) + css + html.slice(lastStyle);
fs.writeFileSync(FILE, html);
console.log('peek video applied');
