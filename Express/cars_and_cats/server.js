const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'html')

app.get('/cats', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/cats.html'));
});
app.get('/cars', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/cars.html'));
});
app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/newcar.html'));
});

app.listen(8000, function() {
    console.log("Listening on port: 8000");
})