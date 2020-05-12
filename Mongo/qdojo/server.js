// Imports
const express = require('express');
const app = express();
var flash = require('express-flash')
const mongoose = require('mongoose');
var session = require('express-session');
var moment = require('moment');

//config
app.use(flash());
app.use(session({
    secret: 'pleasework',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Database
mongoose.connect('mongodb://localhost/quote_db', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    }, {timestamps: true});
const Quote = mongoose.model('Quote', QuoteSchema);

//Routes

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/quotes", (req, res) => {
    Quote.find({}, function(err, quotes) {
        if(err){
            console.log("Error");
        }
        else{
            res.render("quotes.ejs", {info: quotes, moment: moment});
        }
    }) .sort({_id:-1});
})

app.post("/quotes", (req, res) => {
    const userquote = new Quote();
    userquote.name = req.body.name
    userquote.quote = req.body.quote
    userquote.save()
        .then(newQuote => console.log('Quote added: ', newQuote))
        .catch(err => res.json(err));
            for (var key in err.errors) {
                req.flash('Quoteform', err.errors[key].message);
            }
    res.redirect('/quotes')
});

app.listen(8000, () => console.log("listening on port 8000"));