'use strict';

const mongoose = require('mongoose');

let connected = false;

module.exports = {
  connect
}

function initConnection() {
  const connection = {
    uri: 'mongodb://' + process.env.MONGO_URL,
    debug: process.env.MONGODB_DEBUG
  };
  return connection;
}


async function connect() {
  if (connected) {
    return;
  }
  const connection = initConnection();
  if (mongoose.connection.readyState === 0) {
    try {
      console.log('Trying to connect...');
      mongoose.connect(connection.uri, connection.options);
      mongoose.connection.on('disconnected', () => {
        console.log('Connection lost to MongoDB.');
        process.exit(1);
      });
      mongoose.set('debug', connection.debug);
      connected = true;
      console.log('Connected to MongoDB: ' + connection.uri);
    } catch (err) {
      logger.error('Could not connect to MongoDB!');
      throw err;
    }
  }
}
