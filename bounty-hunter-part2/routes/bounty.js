const express = require("express");
const bountyRoute = express.Router();
const bountyModel = require('../models/bounty.js');

var uuid = require('uuid');
// const database = require('../database.js');

// Define route
bountyRoute.route("/")
    //handle all requests to /bounty here
    //if its a GET
    .get((req, res) => {
        // After 'find', we can tell it what object to look for
        // Req.query allows to use to specify a query at GET
        bountyModel.find(req.query, (err, foundBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send(foundBounty)
            }
        });
    })
    
    // If its a POST
    .post((req, res) => {
        // Take body of request and turn it into a ismModel instance and save to database
        // Create a new resource from our blueprint
        let newBounty = new bountyModel(req.body);
        // Callback function to display err or saved resource to databasse
        newBounty.save((err, savedBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: "Data added successfully",
                    data: newBounty
                });
            } 
        });
    });

bountyRoute.route("/:id/")
    .get((req, res) => {
        let { id } = req.params;
        // let found = false;
        // let foundBounty;
        // Tells mongoose what to find and where to find it
        bountyModel.findById(id, (err, foundBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was found!`,
                    data: foundBounty
                })
            }
        });
    })
    .delete((req, res) => {
        let { id } = req.params;
        // let found = false;
        bountyModel.findByIdAndRemove(id, (err, removedBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was successfully removed!`
                });
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params;
        // ID is the collection query and {new: true} is the configuration setting
        bountyModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send({
                    msg: `Item ${id} was updated!`,
                    data: updatedBounty                    
                })
            }
        })
    })

module.exports = bountyRoute;