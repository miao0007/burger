// import Express and burgers.js
const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers.js");


// Route get, get all burgers from database
router.get("/", (req,res) => {
    // send all burgers from database to index
    burgers.selectAll((data) =>{
        res.render("index", {hamburgers: data});
    });
});

// use post route for adding new burger to database
router.post("/api/hamburger", (req,res)=> {
    // insert burger into db
    burgers.insertOne(req.body.name, false, (result)=>{
        if(result.changedRows ==1){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

// use put route to update hamburger to be devoured

router.put("/api/hamburger/:id", (req,res)=>{
    // update hamburger
    burgers.updateOne(req.params.id, true, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

// Use delete router to delete hamburger from db

router.delete("/api/hamburger/:id", (req,res)=>{
    // delete selected hamburger
    burgers.delete(req.params.id, (result)=>{
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

// Export routes
module.exports = router;