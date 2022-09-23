const express = require("express");
const path = require("path")
const formRouter = require("../routes/formRouter")
// const mongoose = require("./mongoose")
const app = express()
const PORT = process.env.PORT || 3010;


// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ entended: false }));
app.use(express.json());
// app.use(cookieParser());

app.use("/form", formRouter);

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({}))


// app.get("/", (req, res) => {
//     res.send("Hello Designs");
// })

app.listen(PORT, function(){
    console.log(`Server running on port: ${PORT}`)
})