const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  // notifies connection
  conn.on('connect', () => {
    console.log("we are connected!")
  });
  conn.on('connect', () => {
    conn.write("Name: RC7");
  });

  conn.on('connect', () => {
    conn.write() 
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = { connect };