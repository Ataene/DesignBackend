const express = require("express")
const app = express()

const PORT = process.env.PORT || 3010;

app.get("/", (req, res) => {
    res.send("Hello Designs");
})

app.listen(PORT, function(){
    console.log(`Server running on port: ${PORT}`)
})