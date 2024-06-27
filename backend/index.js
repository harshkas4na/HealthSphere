


// Libraries
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
// Custom modules

const { AuthRouter } = require('./routes/user');
const { checkForAuthentication } = require('./middlewares/user');
const Comment = require('./models/comment');
const Tweet = require('./models/tweet');
const User = require('./models/user');
const { connectToDatabase } = require('./conn');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');


// Server setup

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
dotenv.config();    


// Database connection
connectToDatabase('mongodb://127.0.0.1:27017/healthsphere');
// rx1dzIzEzreP02n0


// Routes

app.use("/", checkForAuthentication, AuthRouter);
// app.use("/api/user", checkForAuthentication, UserRouter);


// Error handling


app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);


// Socket.io setup

io.on('connection', (socket) => {
    console.log('user connected', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('postTweet', async (tweetContent,userId) => {
        // Assuming you have a Tweet model and Mongoose set up
        const newTweet = new Tweet({
            user:userId, // Attach the user's ID who posted the tweet
            content: tweetContent,
            createdAt: new Date(),
        });

      

        try {
            await newTweet.save();
            // Broadcast the new tweet to all connected clients
            const tweeter=await User.findOne({_id:userId}).select('name');
            
            const tweeterName=tweeter.name;
            const tweet_Id=newTweet._id;
            const tweetContent=newTweet.content;

            io.emit('newTweet', {tweet_Id, tweetContent,tweeterName});
        } catch (error) {
            console.error('Error saving tweet:', error);
        }
    });

    // Inside the 'postComment' socket event handler
socket.on('postComment', async (content) => {
    // Assuming you have a Comment model and Mongoose set up
    const newComment = new Comment({
      user: content.userId, // Attach the user's ID who posted the comment
      tweet: content.tweetId, // Attach the tweet ID  
      content: content.content,
      createdAt: new Date(),
    });
  
    try {
      await newComment.save();
      // Broadcast the new comment to all connected clients
      const commenter = await User.findOne({_id: content.userId}).select('name');
      const commenterName = commenter.name;
      const tweetId = content.tweetId;
  
      io.emit('newComment', newComment.content, tweetId, commenterName);
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  });
  
});


// Start the server

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


process.on('unhandledRejection', (err) => {
 console.log(err.name, err.message);
  console.log('Unhandled Rejection! Shutting down the server...');
  server.close(() => {
    process.exit(1);
  });
}); 

