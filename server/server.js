require("dotenv").config({path: "../.env"})
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")


const PORT=3010
const app = express()

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ entended: true }));


const CONNECTION_URL=process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, { useMongoClient:true })
.then((result) => app.listen(PORT, function(){
    console.log(`Server is running on port: ${PORT}`)
}))
.catch((err) => console.log(err))



const formRouter = require("../routes/formRouter")
app.use("/form", formRouter);