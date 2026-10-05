const fs = require('fs');
const path = require('path');

const stubs = [
  {
    path: 'src/shaders/tidecrest-hero/tidecrestDocument.js',
    content: 'export const buildTidecrestDocument = () => "";\n'
  },
  {
    path: 'src/shaders/meridian-landing-page/meridianDocument.js',
    content: 'export const buildMeridianDocument = () => "";\n'
  },
  {
    path: 'src/shaders/ascii-field/asciiFieldDocuments.js',
    content: 'export const buildAsciiFieldDocument = () => "";\n'
  },
  {
    path: 'src/shaders/betawise-globe/betawiseGlobeDocument.js',
    content: 'export const buildBetawiseGlobeDocument = () => "";\n'
  },
  {
    path: 'src/shaders/nocturne-hero/NocturneScene.ts',
    content: 'export const NOCTURNE_TITLES: Record<string, string> = {};\nexport const NOCTURNE_VARIANTS: readonly string[] = [];\nexport const buildNocturneDocument = (v: any) => "";\nexport type NocturneVariant = any;\n'
  },
  {
    path: 'src/shaders/landing-pages/sandboxedPageDocument.ts',
    content: 'export const buildSandboxedPageDocument = (s: any, o: any) => "";\n'
  },
  {
    path: 'src/shaders/sylva-living-world/SylvaLivingWorldScene.ts',
    content: 'export const MAPLE_AUTUMN_STYLE = "";\nexport const SAKURA_SUNSET_STYLE = "";\nexport const SEQUOIA_MIST_STYLE = "";\nexport const applyMapleAutumnVariant = (s: string) => s;\nexport const applySakuraSunsetVariant = (s: string) => s;\nexport const applySequoiaMistVariant = (s: string) => s;\n'
  },
  {
    path: 'src/shaders/sylva-living-world/sources/inner-green-3d.html',
    content: '<!-- stub -->'
  },
  {
    path: 'src/shaders/axonis-field/axonis-arbor.html',
    content: '<!-- stub -->'
  },
  {
    path: 'src/shaders/axonis-field/axonis-vortex.html',
    content: '<!-- stub -->'
  },
  {
    path: 'src/shaders/axonis-field/axonis-tide.html',
    content: '<!-- stub -->'
  },
  {
    path: 'src/shaders/axonis-field/axonis-dune.html',
    content: '<!-- stub -->'
  }
];

for (const s of stubs) {
  const p = path.resolve(s.path);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s.content, 'utf8');
  console.log('Created stub:', s.path);
}
