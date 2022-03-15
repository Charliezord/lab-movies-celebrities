// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
const mongoose = require("mongoose");
// all your routes here


router.get("/movies/create", async (req, res) => {

    const findCelebs = await Celebrity.find();
    res.render("movies/new-movie", {findCelebs});
});


router.post("/movies/create", async (req, res) => {
    try{
        const userCreatedMovie = new Movie ({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot,
            cast: req.body.cast,
        })
        console.log(userCreatedMovie);
        await userCreatedMovie.save();
        res.redirect("/movies");
    }
    catch(err){
        console.log("error from create movie", err)
        res.redirect("/movies/create");
    }
   
});

router.get("/movies", async (req, res) => {

    const findMovies = await Movie.find();
    res.render("movies/movies", {findMovies});
});


router.get("/movies/:id", async (req, res) => {
    try{
    const movieId =  req.params.id;
    const oneMovie = await Movie.findById(movieId);
    console.log(oneMovie);
    
    // await oneMovie.populate("cast");
    console.log("ali <<<<<<<");
    res.render("movies/movie-details");
    }
    catch(err){
        console.log("error from movies id", err)
    }
})




module.exports = router;