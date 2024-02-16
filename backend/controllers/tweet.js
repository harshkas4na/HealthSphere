const Tweet = require('../models/tweet');

const handleStoreTweet = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const tweet = new Tweet({
      user: userId,
      content
    });

    await tweet.save();

    res.status(201).json({ success: true, message: 'Tweet saved successfully' });
  } catch (error) {
    console.error('Error saving tweet:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { handleStoreTweet };
