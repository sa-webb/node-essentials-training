const fs = require('fs');

fs.readFile('./assets/file1.txt', 'UTF-8', (err, text) => {
  if (err) {
    throw err;
  }
  console.log(text);
});
