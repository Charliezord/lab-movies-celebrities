const {model, Schema} = require("mongoose");
const mongoose = require("mongoose");

const movieSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    genre: String,
    plot: String,
    cast: [
        { type: mongoose.Schema.Types.ObjectId, ref: "celebrity"} 
    ],
});

const movieModel = model('movie', movieSchema) 

module.exports = movieModel