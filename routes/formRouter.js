const express = require("express");
const router = express.Router();
const Form = require("../models/form")


router.get("/", (req, res) => {
    res.send("Hello forms")
});

router.post("/", async (req, res) => {
const newForm = req.body;
try {
    await Form.create(newForm);
    res.send("Created successfully");
} catch (error) {
    console.log("error creating forms")
}
})

module.exports = router;