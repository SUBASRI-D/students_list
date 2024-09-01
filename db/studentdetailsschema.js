const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    yearOfStudy: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },

    address: {
        type: String,
        required: false,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
 
});

module.exports = mongoose.model("Students", StudentSchema);
