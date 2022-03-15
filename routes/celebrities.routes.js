// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

// all your routes here


router.get("/celebrities/create", (req, res) => {

    res.render("celebrities/new-celebrity");
});


router.post("/celebrities/create", async (req, res) => {
    try{
        const userCreatedCelebrity = new Celebrity ({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase,
        })
        await userCreatedCelebrity.save();
        res.redirect("/celebrities");
    }
    catch{
        console.log("error from create celeb")
        res.render("/celebrities/new-celebrity", {error: "something went wrong!"});
    }
   
});

router.get("/celebrities", async (req, res) => {
    try{
      const findCelebs = await Celebrity.find();
      res.render("celebrities/celebrities", {findCelebs})
    }
    catch{
        console.log("error from celebrity list")
    }
});


module.exports = router;