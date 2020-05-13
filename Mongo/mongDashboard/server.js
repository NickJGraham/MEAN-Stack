// Import
const express = require("express");
const mongoose = require("mongoose");
var moment = require('moment');

const app = express();

mongoose.connect("mongodb://localhost/owl_db", {
    useNewUrlParser: true,
});

const OwlSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
}, {
    timestamps: true
});


// Create an object that contains methods for mongoose to interface with MongoDB
const Owl = mongoose.model("Owl", OwlSchema);

// Setting
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Routes
app.get("/", (req, res) => {
    Owl.find({}, (err, data) => {
        var context = {
            data: data,
        };
        if (err) {
            console.log("Something went wrong");
        }
        res.render("index", context);
    });
});

app.post("/owls", (req, res) => {
    const owl = new Owl();
    owl.name = req.body.name;
    owl.age = req.body.age;
    owl.save().catch((err) => {
        console.log("Error saving mon", err);
    });
    res.redirect("/");
});


app.get("/owls/new", (req, res) => {
    res.render("add_owl");
});


app.get("/owls/:id", (req, res) => {
    Owl.find({
        _id: req.params.id
    }, (err, data) => {
        var context = {
            data: data,
            moment: moment
        }
        if (err) {
            console.log('Something went wrong mon info page', err);
        }
        res.render('owl_info', context)
    })
})

app.get("/owls/edit/:id", (req, res) => {
    Owl.find({
        _id: req.params.id
    }, (err, data) => {
        var context = {
            data: data,
        }
        if (err) {
            console.log("Something wrong with edit page", err)
        }
        res.render("edit_owl", context)
    })
})


app.post("/owls/:id", (req, res) => {
    Owl.update({
        _id: req.params.id
    }, {
        name: req.body.name,
        age: req.body.age

    }, err => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect("/");
        };
    })
})

app.post("/owls/destroy/:id", (req, res) => {
    Owl.remove({
        _id: req.params.id
    }, err => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/')
        }
    })
})

app.listen(8000, () => {
    console.log("Started server on port 8000");
});