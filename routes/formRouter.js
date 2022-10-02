const express = require("express");
const router = express.Router();
const Form = require("../models/form")


router.get("/", (req, res) => {
    res.send("Helokk Chief")
});

router.post("/", async (req, res) => {
const newForm = req.body;
try {
    const formCreated = await Form.create(newForm);
    res.send(formCreated);
} catch (error) {
    res.status(500).send(error)
    console.log(error.message)
}
})

module.exports = router;