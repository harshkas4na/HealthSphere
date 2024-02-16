const express = require('express');
const { handleStoreTweet } = require('../controllers/tweet');
const { handleStoreComment } = require('../controllers/comment');
const router = express.Router();

router
    .route('/tweets')
    .post(handleStoreTweet)

router  
    .route('/tweets/:tweetId/comments')
    .post(handleStoreComment)

module.exports = {router};