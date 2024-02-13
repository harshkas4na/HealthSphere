const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app=express();

const {connectToDatabase}=require('./conn');
const {router}=require('./routes/user');
const {checkForAuthentication}=require('./middlewares/user');

connectToDatabase('mongodb://127.0.0.1:27017/healthsphere');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use("/",checkForAuthentication,router);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});




