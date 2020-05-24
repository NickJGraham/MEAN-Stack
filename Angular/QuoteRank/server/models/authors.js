const mongoose = require("mongoose");

var validateQuoteLength = function(quote) {
    if (quote && quote.length !== ""){
        return quote.length >= 3;
    }
    return true;
};

var validateQuote = [
    {
        validator: validateQuoteLength,
        message: "Quote must be at least 3 Characters long!"
    }
];


var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is Required"], minlength: [3, "Must be longer than 3 characters"]},
    quotes: [
        {
            quote: {
                type: String,
                validate: validateQuote
            },
            votes: {
                type: Number,
                default: 0
            }
        }
    ]

})

mongoose.model("Author", AuthorSchema);