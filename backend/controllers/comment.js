const Comment = require('../models/comment');

const handleStoreComment = async (req, res) => {
  const { userId, content } = req.body;
  const { tweetId } = req.params;

  try {
    const comment = new Comment({
      user: userId,
      tweet: tweetId,
      content
    });

    await comment.save();

    res.status(201).json({ success: true, message: 'Comment saved successfully' });
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { handleStoreComment };
