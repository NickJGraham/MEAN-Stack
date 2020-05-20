const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rating = mongoose.model("Rating");

module.exports = {
    

    index: (req, res) => {
        Cake.find({}, (err, cake) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },

    details: (req, res) => {
        let id = req.params.id;
        Cake.find({_id: id}, (err, cake) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },

    addCake: (req, res) => {
        Cake.create({
            baker: req.body.baker,
            image: req.body.image
        }, (err, cake) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },

    addRating: (req, res) => {
        Rating.create({
            rating: req.body.rating,
            comment: req.body.comment
        }, (err, newRating) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                Cake.findOneAndUpdate({_id: req.params.cakeId},
                    {$push: {ratings: newRating}}, (err, data) => {
                        if(err) {
                            res.json({message: "Error!", error: err});
                        }
                        else{
                            res.json({message: "Success!", cake: cake});
                        }
                    })
            }
        })
    }
}