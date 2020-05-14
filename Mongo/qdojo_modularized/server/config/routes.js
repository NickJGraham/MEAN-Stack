const quotes = require("../controllers/quotes.js");

module.exports = function(app){
    app.get("/", quotes.index)

    app.get("/quotes", quotes.quotes)

    app.post("/quotes", quotes.addQuote)
}