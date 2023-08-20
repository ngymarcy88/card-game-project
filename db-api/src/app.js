'use strict';

const mongoConnection = require('./connection');
const express = require('express');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

//read Models
const Card = require('./models/card');
const Character = require('./models/character');
const User = require('./models/user');

const PORT = process.env.PORT || 10010;
const app = express();

async function initApp() {
  await mongoConnection.connect();
  restify.serve(router, Card);
}

initApp().then(() => {
  console.log('DB API started successfully!');
}).catch((error) => {
  console.log('Cannot start db API: ', error);
  process.exit(1);
});

app.use(bodyParser.json());
app.use(router)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});