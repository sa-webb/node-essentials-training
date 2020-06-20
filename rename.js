const fs = require('fs');

fs.rename('./assets/notes.md', './storage/notes.md', (err) => {
  if (err) {
    throw err;
  }
});

// Delete syncronously
setTimeout(() => {
    fs.unlinkSync("./assets/")
})