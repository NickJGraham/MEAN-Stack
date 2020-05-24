const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title of Product Required!"], minlength: [4, "Must be more than 4 characters!"]},
    price: {type: Number, required: [true, "Price must be listed!"]},
    image: {type: String}

})

mongoose.model("Product", ProductSchema);