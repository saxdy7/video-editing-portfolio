// Before/after slider: Sandeep's own raw photo vs his finished edit, at the photos' 3:4 ratio.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');
const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 70)); html = html.split(a).join(b); };

// 3:4 portrait frame, height-capped so it fits a laptop screen; no fake CSS "grade" filters
rep(`  position: relative; width: 100%; max-width: 960px; aspect-ratio: 16/9;`,
    `  position: relative; width: min(100%, 540px, calc(80vh * .75)); aspect-ratio: 3/4;`);
rep(`.ba-after img {
  filter: contrast(115%) saturate(125%) brightness(95%);
}`, `.ba-after img { filter: none; }`);
rep(`  filter: contrast(65%) saturate(30%) brightness(115%);
}`, `  filter: none;
}`);

rep('Raw Flat LOG Footage vs. Mastered Cinematic Grade', 'Raw Shot vs. Final Edit');
rep('Drag the center slider left and right to inspect color grading depth, shadow recovery, and contrast.',
    'Drag the slider to compare the untouched photo with the finished edit: colour grade, film grain, dispersion effect and typography.');
html = html.replace(/<img src="\/images\/work\/event-cultural-fest\.jpg" alt="Graded cut — Cultural Fest film">/,
  '<img src="/images/before-after-edit.jpg" alt="Final edit — graded, grain, dispersion effect and quote typography" width="960" height="1280">');
html = html.replace(/<img src="\/images\/work\/event-cultural-fest\.jpg" alt="Flat ungraded frame — Cultural Fest film">/,
  '<img src="/images/before-after-raw.jpg" alt="Raw, unedited photo" width="960" height="1280">');
rep('<span class="ba-tag ba-tag-before">Raw Flat LOG</span>', '<span class="ba-tag ba-tag-before">Raw Shot</span>');
rep('<span class="ba-tag ba-tag-after">Graded Rec.709 Cinema</span>', '<span class="ba-tag ba-tag-after">Final Edit</span>');
rep('aria-label="Compare Raw vs Graded"', 'aria-label="Compare raw shot and final edit"');
if (!html.includes('/images/before-after-raw.jpg') || !html.includes('/images/before-after-edit.jpg')) throw new Error('images not swapped');
fs.writeFileSync(FILE, html);
console.log('before/after updated');
