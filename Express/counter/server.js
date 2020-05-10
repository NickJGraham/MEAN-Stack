const express = require('express')

const app = express();
app.use(express.static(__dirname + '/static'))
const session = require('express-session');
app.use(session({
    secret: 'secretsecretsarefun',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

var counter = 0;

app.get('/', function(req, res){
    if(req.session.counter === null){
        req.session.counter = 1;
    }
    else {
        req.session.counter += 1;
    }
    res.render("index.ejs", {counter : req.session.counter});
})

app.get("/add", function(req, res){
    req.session.counter += 1;
    res.redirect("/");
})

app.get("/reset", function(req, res){
    req.session.counter = null;
    res.redirect("/");
})



app.listen(8000, () => console.log("listening on port 8000"));