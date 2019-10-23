let connection;

function setupInput (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.on('data', handUserKeys);
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

function handUserKeys(key) {
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 's') {
    connection.write("Move: down");
  }
};

module.exports = { connection }
module.exports = { setupInput }

