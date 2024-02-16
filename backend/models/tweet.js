const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
