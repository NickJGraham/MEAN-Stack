const authors = require("../controllers/authors.js");

module.exports = (app) => {

    app.get("/authors", (req, res) => {
        console.log()
        authors.index(req, res)
    });

    app.get("/editAuthor/:id", (req, res) => {
        authors.details(req, res)
    });

    app.post("/authors", (req, res) => {
        authors.addAuthor(req, res)
    });

    app.put("/authors/:id", (req, res) => {
        authors.editAuthor(req, res)
    });

    app.delete("/delete/:id", (req, res) => {
        authors.deleteAuthor(req, res)
    });
}