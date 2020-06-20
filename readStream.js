const fs = require('fs');

const readStreams = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

readStreams.on('data', (data) => {
  console.log(`I read ${data.length - 1} characters`);
});

readStreams.once('data', (data) => {
  console.log(data);
});

readStreams.on("end", () => {
    console.log('finished')
    console.log(`I read ${data.length - 1} characters`);

})