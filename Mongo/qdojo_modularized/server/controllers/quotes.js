const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");
const moment = require("moment");

module.exports = {

    index: (req, res) => {
        res.render("index.ejs")
    },

    quotes: (req, res) => {
        Quote.find({}, function(err, quotes) {
            if(err){
                console.log("Error");
            }
            else{
                res.render("quotes.ejs", {info: quotes, moment: moment});
            }
        }) .sort({_id:-1});
    },

    addQuote: (req, res) => {
        const userquote = new Quote();
        userquote.name = req.body.name
        userquote.quote = req.body.quote
        userquote.save()
            .then(newQuote => console.log('Quote added: ', newQuote))
            .catch(err => res.json(err));
                for (var key in err.errors) {
                    req.flash('Quoteform', err.errors[key].message);
                    res.redirect('/quotes')
                }
    }
}