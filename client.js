const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // notifies connection
  conn.on('connect', () => {
    console.log("we are connected!")
  });
  conn.on('connect', () => {
    conn.write("Name: RC7");
  });

  // conn.on('connect', () => {
  //   conn.write();
  // });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = { connect };