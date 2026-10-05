// Real software logos (+ CapCut), themed dropdowns, GitHub/LinkedIn buttons, new portrait framing.
// Run once after apply_ui_polish.js: node scratch/apply_tools_social.js
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');
if (html.includes('/images/tools/capcut.png')) { console.log('already applied'); process.exit(0); }
const rep = (a, b) => { if (!html.includes(a)) throw new Error('missing: ' + a.slice(0, 70)); html = html.split(a).join(b); };

// ---- 1. software cards: real logos + CapCut ----
const icons = [
  ['color:#9999FF;border-color:rgba(153,153,255,.3);">Pr', 'premiere-pro.svg', 'Adobe Premiere Pro'],
  ['color:#D291FF;border-color:rgba(210,145,255,.3);">Ae', 'after-effects.svg', 'Adobe After Effects'],
  ['color:#FF6B4A;border-color:rgba(255,107,74,.3);">Dv', 'davinci-resolve.svg', 'DaVinci Resolve'],
  ['color:#31A8FF;border-color:rgba(49,168,255,.3);">Ps', 'photoshop.svg', 'Adobe Photoshop'],
];
for (const [old, file, alt] of icons) {
  rep(`<div class="soft-icon" style="${old}</div>`, `<div class="soft-icon"><img src="/images/tools/${file}" alt="${alt} logo" width="44" height="44"></div>`);
}
const psCardEnd = html.indexOf('</div>', html.indexOf('Thumbnail design, film texture generation')) ;
const psClose = html.indexOf('</div>', psCardEnd + 6) + 6; // psCardEnd = text column close; this = card close
html = html.slice(0, psClose) + `
      <div class="soft-card">
        <div class="soft-icon"><img src="/images/tools/capcut.png" alt="CapCut logo" width="44" height="44"></div>
        <div>
          <div class="soft-name">CapCut</div>
          <div class="soft-role">Quick Social Edits</div>
          <p class="soft-desc">Fast-turnaround reels, auto-caption drafts, trending templates and mobile-first exports.</p>
        </div>
      </div>` + html.slice(psClose);

// ---- 2. GitHub / LinkedIn buttons ----
const GH = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';
const LI = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
const social = (extra) => `<div class="social-row"${extra}>
        <a class="social-btn" href="https://github.com/saxdy7" target="_blank" rel="noopener noreferrer" aria-label="GitHub — saxdy7"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${GH}"/></svg><span>GitHub</span></a>
        <a class="social-btn" href="https://linkedin.com/in/sandeepmamidala" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn — Sandeep Mamidala"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${LI}"/></svg><span>LinkedIn</span></a>
      </div>`;
// hero: directly under the two CTAs
rep('>Explore Selected Work</a>\n    </div>', '>Explore Selected Work</a>\n    </div>\n    ' + social(' data-rv="up" style="margin-top:14px;"'));
// about: after the intro copy
html = html.replace(/(<p>My approach merges[\s\S]*?<\/p>)/, `$1\n      ${social('')}`);
if ((html.match(/class="social-row"/g) || []).length !== 2) throw new Error('social rows not inserted twice');

// ---- 3. themed dropdown (enhances the native selects, which stay as the form's source of truth) ----
rep(`  if (select) {
    select.value = type;
  }`, `  if (select) {
    select.value = type;
    select.dispatchEvent(new Event('change'));
  }`);
rep('</body>', `<script>
(function () {
  document.querySelectorAll('select.form-select').forEach(function (sel) {
    var wrap = document.createElement('div'); wrap.className = 'kselect';
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'kselect-btn form-select';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    var lbl = document.querySelector('label[for="' + sel.id + '"]');
    if (lbl) { btn.id = sel.id + '-btn'; lbl.setAttribute('for', btn.id); }
    var list = document.createElement('ul'); list.className = 'kselect-list'; list.setAttribute('role', 'listbox');
    var opts = Array.prototype.map.call(sel.options, function (o, i) {
      var li = document.createElement('li'); li.setAttribute('role', 'option'); li.dataset.i = i; li.textContent = o.textContent;
      li.addEventListener('click', function () { choose(i); close(); btn.focus(); });
      list.appendChild(li); return li;
    });
    var active = sel.selectedIndex;
    function sync() {
      btn.textContent = sel.options[sel.selectedIndex].textContent;
      opts.forEach(function (li, i) { li.setAttribute('aria-selected', i === sel.selectedIndex ? 'true' : 'false'); });
    }
    function mark(i) { active = i; opts.forEach(function (li, j) { li.classList.toggle('on', j === i); }); }
    function choose(i) { sel.selectedIndex = i; sel.dispatchEvent(new Event('change')); }
    function open() { wrap.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); mark(sel.selectedIndex); }
    function close() { wrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function () { wrap.classList.contains('open') ? close() : open(); });
    btn.addEventListener('keydown', function (e) {
      var isOpen = wrap.classList.contains('open');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (!isOpen) return open();
        mark((active + (e.key === 'ArrowDown' ? 1 : opts.length - 1)) % opts.length);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); if (isOpen) { choose(active); close(); } else open();
      } else if (e.key === 'Escape' || e.key === 'Tab') close();
    });
    document.addEventListener('pointerdown', function (e) { if (!wrap.contains(e.target)) close(); });
    sel.addEventListener('change', sync);
    sel.classList.add('kselect-native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel); wrap.appendChild(btn); wrap.appendChild(list);
    sync();
  });
})();
</script>
</body>`);

// ---- 4. CSS ----
const css = `
/* ============================================================= tools, dropdown, social */
.software-grid{ grid-template-columns:repeat(auto-fit, minmax(min(220px, 100%), 1fr)); }
.soft-card{ flex-direction:column; gap:14px; }
.soft-icon{ width:44px; height:44px; padding:0; border:0; background:none; border-radius:11px; overflow:hidden; flex:none;
  box-shadow:0 0 0 1px rgba(223,231,224,.14), 0 10px 24px -10px rgba(0,0,0,.8); }
.soft-icon img{ width:100%; height:100%; display:block; object-fit:contain; }

.about-photo-card img{ object-position:center 22%; }

.social-row{ display:flex; gap:10px; flex-wrap:wrap; }
.social-btn{ display:inline-flex; align-items:center; gap:9px; padding:9px 16px 9px 12px; border-radius:999px;
  border:1px solid rgba(223,231,224,.18); background:rgba(5,7,10,.45); color:var(--bone);
  font-size:10px; letter-spacing:.2em; text-transform:uppercase;
  transition:border-color .25s ease, background-color .25s ease, transform .16s var(--ease-ui); }
.social-btn svg{ width:15px; height:15px; fill:currentColor; flex:none; }
@media (hover:hover) and (pointer:fine){ .social-btn:hover{ border-color:rgba(224,35,28,.6); background:rgba(224,35,28,.1); } }
.social-btn:active{ transform:scale(.97); }

.kselect{ position:relative; }
.kselect-native{ position:absolute; inset:0; opacity:0; pointer-events:none; }
.kselect-btn{ text-align:left; cursor:pointer; padding-right:36px;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23dfe7e0' stroke-width='1.3'/%3E%3C/svg%3E");
  background-repeat:no-repeat; background-position:right 14px center; }
.kselect.open .kselect-btn{ border-color:var(--vermilion); box-shadow:0 0 16px rgba(224,35,28,.2); }
.kselect-list{ position:absolute; left:0; right:0; top:calc(100% + 6px); z-index:20; margin:0; padding:5px; list-style:none;
  border-radius:12px; background:#0b1014; border:1px solid rgba(223,231,224,.14);
  box-shadow:0 24px 50px -16px rgba(0,0,0,.95), inset 0 1px 0 rgba(255,255,255,.04);
  transform-origin:top center; opacity:0; transform:translateY(-4px) scale(.97); pointer-events:none;
  transition:opacity .16s var(--ease-ui), transform .16s var(--ease-ui); }
.kselect.open .kselect-list{ opacity:1; transform:none; pointer-events:auto; transition-duration:.2s; }
.kselect-list li{ padding:10px 12px; border-radius:8px; font-size:13px; color:#aab4ad; cursor:pointer;
  display:flex; align-items:center; justify-content:space-between; }
.kselect-list li.on{ background:rgba(223,231,224,.07); color:var(--bone); }
.kselect-list li[aria-selected="true"]{ color:var(--bone); }
.kselect-list li[aria-selected="true"]::after{ content:''; width:6px; height:6px; border-radius:50%; background:var(--vermilion); box-shadow:0 0 8px var(--vermilion); }
@media (hover:hover) and (pointer:fine){ .kselect-list li:hover{ background:rgba(223,231,224,.07); color:var(--bone); } }
.contact-info-val{ overflow-wrap:anywhere; }
.form-select{ color-scheme:dark; }
.form-select option{ background:#0b1014; color:#dfe7e0; }
`;
const lastStyle = html.lastIndexOf('</style>', html.indexOf('</head>'));
html = html.slice(0, lastStyle) + css + html.slice(lastStyle);

fs.writeFileSync(FILE, html);
console.log('tools + dropdown + social applied');
