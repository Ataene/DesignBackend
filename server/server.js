require("dotenv").config({path: "../.env"})
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");


const PORT= process.env.PORT || 3010

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
const CONNECTION_URL=process.env.CONNECTION_URL;

const formRouter = require("../routes/formRouter")

app.use("/form", formRouter);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, { useMongoClient:true })
.then((result) => app.listen(PORT, function(){
    console.log(`Server is running on port: ${PORT}`)
}))
.catch((err) => console.log(err))

