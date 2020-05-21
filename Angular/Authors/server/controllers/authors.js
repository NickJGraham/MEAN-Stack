const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {

    index: (req, res) => {
        Author.find({}, (err, author) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Succes!", author: author});
            }
        })
    },

    details: (req, res) => {
        let id = req.params.id;
        Author.findOne({_id:id}, (err, author) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Succes!", author: author});
            }
        })
    },

    addAuthor: (req, res) => {
        Author.create({
            name: req.body.name
        }, (err, author) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", author: author});
            }
        })
    },

    editAuthor: (req, res) => {
        let id = req.params.id;
        Author.findById(id, (err, author) => {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.name){
                    author.name = req.body.name;
                }
            }
                author.save(err, (err) => {
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", author: author})
                    }
            })
            })
},

deleteAuthor: (req, res) => {
    let id = req.params.id;
    Author.remove({_id:id}, (err) => {
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            res.json({message: "Success!", removed: true});
        }
    })
}
}      