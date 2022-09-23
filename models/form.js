const mongoose = require("../db/mongoose");
const { Schema, model }  = mongoose;

const formSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

const Form = model("Form", formSchema);

module.exports = Form;