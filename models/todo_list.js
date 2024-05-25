const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    frequency: {
      type: String
    },
    notes: {
      type: String
    },
    reminder: {
      type: Boolean,
      default: false
    }
  });
  
  const Habit = mongoose.model('Habit', habitSchema);
  module.exports = Habit;
  