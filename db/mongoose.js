require("dotenv").config()
const mongoose = require("mongoose");

const connectionURL = process.env.CONNECTION_URL;

async function connect(){
    try {
        await mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {});
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to Atlas")
    }
}

connect();

// mongoose.connect(connectionURL || "mongodb://localhost:27017/test");

module.exports = mongoose;