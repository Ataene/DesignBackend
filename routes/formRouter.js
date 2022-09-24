const express = require("express");
const router = express.Router();
const Form = require("../models/form")


router.get("/", (req, res) => {
    res.send("Hello forms")
});

router.post("/", async (req, res) => {
    console.log("reached 1")
const newForm = req.body;
console.log(`reached 2 ${newForm}`)
try {
    const formCreated = await Form.create(newForm);
    console.log("reached 3")
    res.send(formCreated);
} catch (error) {
    res.status(500).send(error)
    console.log(error.message)
}
})

module.exports = router;