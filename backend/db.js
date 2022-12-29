const mongoose = require('mongoose');
require('dotenv').config()
const MongoUri = process.env.MONGO_URL; //url to database


const connectToMongo = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MongoUri); // connect to database
    console.log("connected to database");
}


module.exports = connectToMongo;