const cakes = require("../controllers/cakes.js");

module.exports = function(app){

    app.get("/cakes", (req, res) => {
        cakes.index(req, res)
    });

    app.get("/cakes/:id", (req, res) => {
        cakes.details(req, res)
    });

    app.post("/cakes", (req, res) => {
        cakes.addCake(req, res)
    });

    app.post("/ratings/:cakeId", (req, res) => {
        cakes.addRating(req, res)
    });

}