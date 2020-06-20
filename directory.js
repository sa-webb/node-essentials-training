const fs = require('fs');

if (fs.existsSync('storage')) {
  console.log('alrdy exists');
} else {
  fs.mkdir('storage', (err) => {
    if (err) {
      throw err;
    }
    console.log('created dir');
  });
}
