const express = require("express");
const bountyRoute = express.Router();

var uuid = require('uuid');
const database = require("../database.js");

bountyRoute.route("/")
    //handle all requests to /bounty here
    //if its a GET
    .get((req, res) => {
        let query = req.query;
        let filteredBounties = database.filter((bounty) => {
            let found = true;
            for (let key in query) {
                if (bounty[key] != query[key]) {
                    found = false;
                    break;
                }
            }
            return found;
        })
        res.send(filteredBounties);
    })
    //if its a POST
    .post((req, res) => {
        let newBounty = req.body;
        newBounty._id = uuid();
        database.push(newBounty);
        res.send({
            msg: "Data added successfully",
            data: newBounty
        });
    });

bountyRoute.route("/:id/")
    .get((req, res) => {
        let { id } = req.params;
        let found = false;
        let foundBounty;
        for (let i = 0; i < database.length; i++) {
            if (bounties[i]._id === id) {
                found = true;
                foundBounty = bounties[i];
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was found!`,
                data: foundBounty
            })
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    })
    .delete((req, res) => {
        let { id } = req.params;
        let found = false;
        for (let i = 0; i < database.length; i++) {
            if (database[i]._id === id) {
                database.splice(i, 1);
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was successfully removed!`
            });
        } else {
            res.send({
                msg: `Item ${id} was not found!`
            })
        }
    })
    .put((req, res) => {
        let { id } = req.params;
        let updatedBounty = req.body;
        let found = false;
        for (let i = 0; i < database.length; i++) {
            if (database[i]._id === id) {
                database[i] = Object.assign(database[i], updatedBounty);
                updatedBounty = database[i];
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was updated!`,
                data: updatedBounty
            });
        } else {
            res.send({
                msg: `Item ${id} not found!`
            })
        }
    });

module.exports = bountyRoute;