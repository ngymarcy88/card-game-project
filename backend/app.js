const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const _ = require('lodash')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
/* mongoose.connect('mongodb://localhost/mycardgame', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
}); */

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to My Card Game Backend!');
});

const cards = [
  { id: 0, name: 'Card 0', type: 'Spell' },
  { id: 1, name: 'Card 1', type: 'Monster' },
  { id: 2, name: 'Card 2', type: 'Spell' },
  { id: 3, name: 'Card 3', type: 'Monster' },
  { id: 4, name: 'Card 4', type: 'Spell' },
  { id: 5, name: 'Card 5', type: 'Monster' },
  { id: 6, name: 'Card 6', type: 'Spell' },
  { id: 7, name: 'Card 7', type: 'Monster' },
  { id: 8, name: 'Card 8', type: 'Spell' },
  { id: 9, name: 'Card 9', type: 'Monster' },
  { id: 10, name: 'Card 10', type: 'Spell' },
  { id: 11, name: 'Card 11', type: 'Monster' },
];

let hand = [];

// Example API route
app.get('/api/cards', (req, res) => {
  // Replace this with your actual logic to fetch cards from the database
  res.json(cards);
});

app.get('/api/draw', (req, res) => {
  let random = _.sample(cards);
  let drawedCard = _.remove (cards, random);
  if (cards.length == 0){
    res.send("buktad köcsög")
  } else {
    hand.push(drawedCard[0]);
    res.json({drawedCard,hand});
    console.log(hand)
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});