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
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

app.listen(8000, () => console.log("listening on port 8000"));