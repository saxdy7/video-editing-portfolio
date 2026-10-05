# Sandeep Mamidala — Video Editing Portfolio

3D (Three.js) portfolio site for my video editing and motion design work, built with Next.js.

- **Work:** 14 featured edits — 9 of the 30+ GradGlobe study-abroad reels I've edited (performance + organic), PulseCrafts explainer, Surviving AI captions, Claude SaaS promo, SaaS intro, Remotion promo.
- **Full-quality masters:** [Google Drive folder](https://drive.google.com/drive/folders/1K5kJW2a3URDs3Zn6GdUCi6xHPlZ46O8O)
- **Contact:** mamidalasandeep5@gmail.com · +91 94937 63769 · [LinkedIn](https://linkedin.com/in/sandeepmamidala)

## Structure

- `public/landing-pages/kage.html` — the 3D landing page (rendered by `src/app/page.tsx` in an iframe)
- `public/videos/work/` — web-encoded edits (720p H.264, faststart)
- `public/images/work/` — thumbnails
- `scratch/apply_real_work.js` — regenerates the project grid and contact details in `kage.html`

## Run locally

```bash
npm install
npm run dev
```
