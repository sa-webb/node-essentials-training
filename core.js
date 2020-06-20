const path = require('path');
const { log } = require('util');
const v8 = require('v8');

log(v8.getHeapStatistics());

log(path.basename(__filename));

log(' ^ name of current file');

// Join all arguments and normalize the path
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads)
