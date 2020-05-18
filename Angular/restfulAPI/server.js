//IMPORTS
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//CONFIG
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//DATABASE

mongoose.connect("mongodb://localhost/restful_task_API");
require("./server/config/mongoose.js");

//ROUTES
require("./server/config/routes.js")(app);

//PORT

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})
