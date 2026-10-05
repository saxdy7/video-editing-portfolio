const fs = require('fs');

const html = fs.readFileSync('public/landing-pages/kage.html', 'utf8');

const regex = /<script(?:\s+src="([^"]+)")?>([\s\S]*?)<\/script>/gi;
let m;
let idx = 0;
while ((m = regex.exec(html)) !== null) {
  idx++;
  if (m[1]) {
    console.log(idx, 'External script src:', m[1]);
  } else {
    console.log(idx, 'Inline script, length:', m[2].length);
    try {
      new Function(m[2]);
      console.log('  -> Syntax VALID');
    } catch(err) {
      console.log('  -> SYNTAX ERROR:', err.message);
    }
  }
}
