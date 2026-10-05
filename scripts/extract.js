const fs = require('fs');
const bundle = JSON.parse(fs.readFileSync('kage-bundle.json', 'utf8'));

bundle.files.forEach((f, idx) => {
  console.log(`[${idx}] path:`, f.path, 'keys:', Object.keys(f));
});
