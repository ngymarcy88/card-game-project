const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    description: 'Unique identifier',
    example: '6315deb7da7caad008193dac'
  },
  name: {
    type: String,
    required: true,
    description: 'Name of the card',
    example: 'Warrior'
  },
  faction: {
    type: String,
    required: true,
    description: 'Faction of the user',
    example: 'Divine'
  },
  type: {
    type: String,
    required: true,
    description: 'Type of the user',
    example: 'Unit'
  },
})

module.exports = mongoose.model('User', schema);

/* module.exports = {
  Card: mongoose.model('Card', cardsSchema),
  cardsSchema: cardsSchema
} */