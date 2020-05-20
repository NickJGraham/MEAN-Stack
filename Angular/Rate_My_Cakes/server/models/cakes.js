const mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String, default: ""}
},
    {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

var CakeSchema = new mongoose.Schema({
    baker: {type: String, default: ""},
    image: {type: String, defualt: ""},
    ratings: [RatingSchema]},
    {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}}
);

module.exports = {
Cake: mongoose.model("Rating", RatingSchema),
Rating: mongoose.model("Cake", CakeSchema)
}