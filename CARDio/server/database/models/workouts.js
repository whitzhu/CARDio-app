const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = mongoose.Schema({
  name: String
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports.Workout = Workout;