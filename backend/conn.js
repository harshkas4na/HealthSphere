const mongoose=require('mongoose');

async function connectToDatabase(Url) {
    try {
        await mongoose.connect(Url, {
            
        });
        console.log('Connected to database');
    } catch (error) {
        console.log("error:",error);
    }
}

module.exports = {connectToDatabase};