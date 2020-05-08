const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/cats', function (req, res) {
    res.render('cats.ejs')
});
app.get('/cars', function (req, res) {
    res.render('cars.ejs')
});
app.get('/form', function (req, res) {
    res.render('newcar.ejs')
});

app.listen(8000, function() {
    console.log("Listening on port: 8000");
})