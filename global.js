// Require a module
const path = require('path');

// Pluck the module relatively
console.log(`The file name is ${path.basename(__filename)}`)

// Module absolute path
console.log(__dirname);
console.log(__filename);
