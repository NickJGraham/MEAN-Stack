const mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, product) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", product: product});
            }
        })
    },
    

    details: (req, res) => {
        let id = req.params.id;
        Product.findOne({_id:id}, (err, product) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Succes!", product: product});
            }
        })
    },

    addProduct: (req, res) => {
        Product.create({
            title: req.body.title, price: req.body.price, image: req.body.image
        }, (err, product) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", product: product});
            }
        })
    },

    editProduct: (req, res) => {
        let id = req.params.id;
        Product.findById(id, (err, product) => {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.title){
                    product.title = req.body.title;
                }
                if(req.body.price){
                    product.price = req.body.price;
                }
                if(req.body.image){
                    product.image = req.body.image;
                }
            }
                product.save(err, (err) => {
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", product: product})
                    }
            })
            })
},

deleteProduct: (req, res) => {
    let id = req.params.id;
    Product.remove({_id:id}, (err) => {
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            res.json({message: "Success!", removed: true});
        }
    })
}
}  