const mongoose = require("mongoose");
require("dotenv").config();

const connectionURL = process.env.connectionURL;

async function connect() {
  try {
    await mongoose.connect(
      connectionURL,
      { useNewUrlParser: true, useUnifiedTopology: true }, 
      () => {
        console.log("Connected to MongoDB");
      }, 6000000
    );
  } catch (error) {
    console.log("Error connecting to Atlas");
  }
}

connect();

module.exports = mongoose;
