const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: String,
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports.User = User;