const cp = require('child_process');

const questionApp = cp.spawn('node', ['questions.js']);

questionApp.stdout.on('data', (data) => {
  console.log(`question app${data}`);
});

questionApp.on('close', () => {
  console.log('question app closed');
});
