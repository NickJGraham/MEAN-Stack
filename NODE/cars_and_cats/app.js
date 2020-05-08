var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response){
    
    console.log("Client request URL: ", request.url);

    //Routes
    if(request.url === "/") {
        fs.readFile("views/index.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars/new") {
        fs.readFile("views/newcar.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    //Car Images
    else if(request.url === "/images/lolicar.jpg") {
        fs.readFile("images/lolicar.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/fatecar.jpg") {
        fs.readFile("images/fatecar.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/Berser-Car.png") {
        fs.readFile("images/Berser-Car.png", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    //Cat Images
    else if(request.url === "/images/cute_cat.jpg") {
        fs.readFile("images/cute_cat.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/sit_cat.jpg") {
        fs.readFile("images/sit_cat.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/stick_cat.jpg") {
        fs.readFile("images/stick_cat.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else {
        response.writeHead(404);
        response.end("This is not the right page tho. Dattebayo!");
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077.")