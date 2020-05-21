const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/WeatherAPI", {
    useNewUrlParser: true,
});

// Setting
app.use(express.static(__dirname + "/public/dist/public"));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);



app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

//Port
app.listen(8000);