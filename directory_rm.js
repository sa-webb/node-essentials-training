const fs = require('fs');

fs.renameSync('./storage', 'archive');

// delete files
fs.readdirSync('./storage').forEach((f) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

// Remove directory
fs.rmdir('./storage', (err) => {
  if (err) {
    throw err;
  }
  console.log('removed');
});
