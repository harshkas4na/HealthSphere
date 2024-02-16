const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: true
  },
  tweet: {
    type: String,
    ref: 'Tweet',
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

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
