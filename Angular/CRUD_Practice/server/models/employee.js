const mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    lastname: String,
    emailID: String,
    active: Boolean
})

mongoose.model("Employee", EmployeeSchema);