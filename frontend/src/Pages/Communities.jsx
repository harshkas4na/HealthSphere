import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ErrorPage from '../components/ErrorPage'// Import the ErrorPage component
import io from "socket.io-client";

const CommunityPage = () => {
  const [socket, setSocket] = useState(null);
  const [tweetContent, setTweetContent] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [tweets, setTweets] = useState([
    {  tweet_Id: "1", tweetContent: "Did you know that regular exercise can reduce the risk of chronic diseases?",tweeterName:"ayanokji"},
    { tweet_Id: "2", tweetContent: "Eating a balanced diet with plenty of fruits and vegetables is essential for good health.",tweeterName:"yuichi" },
    {  tweet_Id: "3",tweetContent: "Getting enough sleep is crucial for overall well-being and mental health.",tweeterName:"yuta" }
  ]);
  const [comments, setComments] = useState({
    "1": [{content:"That's really insightful! I try to exercise regularly to stay healthy.",commenterName:"yuichi"}],
    "2": [{content:"I agree! Eating well is the foundation of good health.",commenterName:"yamcha"}],
    "3": [{content:"Sleep is often overlooked, but it's so important for our bodies to recharge.",commenterName:"sungjun"}],
  });

  useEffect(() => {
    const retrievedUser = JSON.parse(localStorage.getItem('user'));
    if (retrievedUser) {
      setUserLoggedIn(true);
      const newSocket = io("http://localhost:3000");
      setSocket(newSocket);
      return () => newSocket.close();
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  const handlePostTweet = () => {
    socket.emit('postTweet', tweetContent, userId);
    setTweetContent("");
    socket.on('newTweet', (tweet_Id) => {
      setTweets([...tweets,tweet_Id]);
    });
  };

  const handlePostComment = (tweetId) => {
    socket.emit('postComment', { content: commentContent, userId, tweetId });
    setCommentContent("");
    socket.on('newComment', (content, tweetId,commenterName) => {
      setComments((prevComments) => ({
        ...prevComments,
        [tweetId]: [...(prevComments[tweetId] || []), { content, commenterName }],
      }));
    });
  };

  if (!userLoggedIn) {
    return <ErrorPage />;
  }

  const retrievedUser = JSON.parse(localStorage.getItem('user'));
  const userId = retrievedUser?._id;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Community</h1>
        <hr className="mb-4" />

        {/* Tweet posting section */}
        <div className="mb-8">
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            rows="4"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
          <button onClick={handlePostTweet} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Post
          </button>
        </div>

        {/* Tweet display section */}
        {tweets.map((tweet) => (
          <div key={tweet?.tweet_Id} className="border border-gray-300 rounded-md p-4 mb-4">
            <p className="font-semibold">{tweet.tweeterName}</p>
            <p className="text-gray-600 mb-2">{tweet?.tweetContent}</p>
            {/* Comments section */}
            {comments[tweet?.tweet_Id] && comments[tweet?.tweet_Id].map((comment, index) => (
              <div key={index} className="ml-8 border-l border-gray-300 pl-4">
                <p className="font-semibold">{comment.commenterName}</p>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
            {/* Comment input */}
            <div className="mt-4">
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                rows="2"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Add a comment..."
              ></textarea>
              <button onClick={() => handlePostComment(tweet.tweet_Id)} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;
