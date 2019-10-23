const { connect } = require('./client');
console.log('Connecting ...');
connect();



function setupInput () {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

function handleUserInput(key) {
    if (key === "\u0003") {
    process.exit();
  }
};

setupInput();








