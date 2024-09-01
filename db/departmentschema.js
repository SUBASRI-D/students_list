const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    headOfDepartment: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model("Departments", DepartmentSchema);
