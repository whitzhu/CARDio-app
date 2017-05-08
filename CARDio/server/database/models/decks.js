const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = mongoose.Schema({
  title: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout'
  }]
});

const Deck = mongoose.model('Deck', DeckSchema);

module.exports.Deck = Deck;