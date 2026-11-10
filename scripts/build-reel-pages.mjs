// Builds one share page per reel (public/work/<id>.html) from public/index.html,
// each with its own title, description and link-preview image, so a /work/<id>
// link opens the site straight into that reel. Runs before `next build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://sandeep-video-portfolio.vercel.app";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = path.join(root, "public");
const html = fs.readFileSync(path.join(pub, "index.html"), "utf8");

// re-rendered videos get a -v2 file name; the share link stays clean
const slugOf = (id) => id.replace(/-v\d+$/, "");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"');

const cards = [...html.matchAll(/<div class="proj-card"[^>]*onclick="openVideoModal\('\/videos\/work\/([a-z0-9-]+)\.mp4'[\s\S]*?<div class="proj-title">([^<]*)<\/div>\s*<p class="proj-desc">([^<]*)<\/p>/g)]
  .map((m) => ({ id: m[1], title: decode(m[2]), desc: decode(m[3]) }));
if (!cards.length) throw new Error("no project cards found in index.html");

const out = path.join(pub, "work");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const c of cards) {
  const title = `${c.title} — Sandeep Mamidala`;
  const slug = slugOf(c.id);
  const url = `${SITE}/work/${slug}`;
  const img = `${SITE}/images/work/${c.id}.jpg`;
  const meta = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(c.desc)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="video.other">`,
    `<meta property="og:site_name" content="S7 Films — Sandeep Mamidala">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(c.desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:video" content="${SITE}/videos/work/${c.id}.mp4">`,
    `<meta property="og:video:type" content="video/mp4">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:image" content="${img}">`,
  ].join("\n");
  const page = html
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta name="description"[^>]*>\s*/, "")
    .replace(/<!-- og:start -->[\s\S]*?<!-- og:end -->\s*/, "")
    .replace(/(<meta name="viewport"[^>]*>)/, `$1\n${meta}`);
  fs.writeFileSync(path.join(out, `${slug}.html`), page);
}
fs.writeFileSync(path.join(out, "links.txt"), cards.map((c) => `${SITE}/work/${slugOf(c.id)}  —  ${c.title}`).join("\n") + "\n");
console.log(`reel pages: ${cards.length} written to public/work/`);
