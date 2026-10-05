const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_URL = 'https://threeui.com';

const bundle = JSON.parse(fs.readFileSync('kage-bundle.json', 'utf8'));

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

async function run() {
  console.log('--- 1. Writing Bundle Files ---');
  for (const file of bundle.files) {
    const dest = path.resolve(file.path);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    
    if (file.code) {
      fs.writeFileSync(dest, file.code, 'utf8');
      const hash = sha256(Buffer.from(file.code, 'utf8'));
      console.log(`[Text] ${file.path} (${file.bytes}b) Hash: ${hash.substring(0, 12)}... Matches expected: ${hash === file.sha256}`);
    } else if (file.sourceUrl) {
      const url = `${BASE_URL}${file.sourceUrl}`;
      console.log(`[Fetch] Downloading ${file.path} from ${url}...`);
      const buf = await fetchBuffer(url);
      fs.writeFileSync(dest, buf);
      const hash = sha256(buf);
      console.log(`[Done] ${file.path} (${buf.length}b) Hash: ${hash.substring(0, 12)}... Matches expected: ${hash === file.sha256}`);
    }
  }

  console.log('\n--- 2. Downloading Binary Assets ---');
  const binaryAssets = [
    { path: 'public/landing-pages/secret-pathways-assets/generated/kage-sanmon-preview.webp', bytes: 186398, sha256: '23937f8c8350c55730c3bd17066a250548b2d29aad0e6ffb96218c1354b6db43' },
    { path: 'public/landing-pages/secret-pathways-assets/generated/kage-approach.webp', bytes: 180064, sha256: '39ff338936097e1bde0c4eadcf09805b9890862703186e67314942de7e0bc36c' },
    { path: 'public/landing-pages/secret-pathways-assets/generated/kage-lantern-court.webp', bytes: 197940, sha256: 'c0a6ff7da1cd6909d66e2f3f690b0d524a693e01d2222ab846d0074a90f47471' },
    { path: 'public/landing-pages/secret-pathways-assets/generated/kage-moonwater.webp', bytes: 102234, sha256: 'b8c8060c51c87a103bae619b3a4cc8b8b80632649d83f1f2c2299051e7f9b400' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/temple-wall.webp', bytes: 86466, sha256: '41c00f017e4ecf2147ee468d74da955bb4e2dad773f75a575022842eaf7609ce' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/pine-tree.webp', bytes: 195918, sha256: '79b233716d067bbc64c1507f79e4a30ba5f445995158c78562cc5b81f607ede7' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/tall-grass.webp', bytes: 351644, sha256: '8db0b5fbd160a7225391a6283a99681e346e205f24191031657285ef85ef12d2' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/sakura-branch.webp', bytes: 252528, sha256: '48564194d40496090dbf3bba2a68785cf91fafb655dc8d43ac16f6678aff196d' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/maple-leaves.webp', bytes: 178208, sha256: '35a90fec62c1a6bbfbbe73cd5d7b1acb889e80546d404182ef9a45fe417b531f' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/stone-lantern.webp', bytes: 150108, sha256: 'd5f3c881bc9d92b72eaaff2b709614d66e21a19e14025d2b9b16a15ab52df3bc' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/garden-bush.webp', bytes: 286406, sha256: '707e2516ebc0108041fe0ddc26d8bff0a69dc9700641f837765018b64e9ff15e' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/basalt-stones.webp', bytes: 167866, sha256: '150f1c87e181d651c318168c271bb65c9c8abac6dea6f2421fdd081c5b740471' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/hill.webp', bytes: 84142, sha256: 'ffba816244bcba98e4e33c6ee56165edfe4048db4af122ef3f5822180a85edbc' },
    { path: 'public/landing-pages/secret-pathways-assets/foreground/png/shrine-ruins.webp', bytes: 145814, sha256: '77006e58f2066e6fa9bfc504df396db49b1c7977858fa52d34dd2dad5feced77' },
  ];

  for (const asset of binaryAssets) {
    const dest = path.resolve(asset.path);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    // URL relative to /landing-pages/
    const subPath = asset.path.replace(/^public\//, '/');
    const url = `${BASE_URL}${subPath}`;
    
    try {
      console.log(`[Binary] Fetching ${asset.path} from ${url}...`);
      const buf = await fetchBuffer(url);
      fs.writeFileSync(dest, buf);
      const hash = sha256(buf);
      const ok = hash === asset.sha256;
      console.log(`  -> Saved ${buf.length} bytes. Hash: ${hash.substring(0, 12)}... Match: ${ok}`);
      if (!ok) console.warn(`  WARNING: Expected ${asset.sha256} but got ${hash}`);
    } catch(err) {
      console.error(`  ERROR fetching ${url}:`, err.message);
    }
  }

  console.log('\nAll assets processing complete!');
}

run().catch(console.error);
