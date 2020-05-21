const mongoose = require("mongoose");


var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is Required"], minlength: [3, "Must be longer than 3 characters"]}

})

mongoose.model("Author", AuthorSchema);