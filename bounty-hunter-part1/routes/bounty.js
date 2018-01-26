const express = require("express");
const trackRouter = express.Router();

let bounties = require("../database.js");

// When a request comes
bountyRoute.route("/")
// Handle requests to /tracsk here
    // if its get
.get("/bounties", (req, res) => {
    let query = req.query;
    console.log(req.query)
    let filteredBounties = bounties.filter((bounty) => {
        let found = true;;
        for(let key in query) {
            if(bounty[key] != query[key]) {
                found = false;
                break
            }
        }
        return found
    })
    res.send(filteredBounties);
})
.post("/bounties", (req, res) => {
    let newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty)
    res.send({
        msg: "Data added successfully",
        data: newBounty
    })
});

bountyRoute.route("/bounty/:id")
.get((req, res) => {
    let {id} = req.params;
    let found = false;
    let foundBounty;
    for (let i =0; i < bounties.length; i++) {
        if(bounties[i]._id === id) {
            found = true;
            foundBounty = bounties[i];
            break;
        }
    }
    if(found){
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

app.delete("/bounties/:id", (req, res) => {
    let {id} = req.params;
    let found = false;

    track = bounties.filter((bounty) => track._id !== id)
    for(let i = 0; i < bounties.length; i++) {
        if(tracks[i]._id === id) {
            bounties.splice(i);
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        });
    } else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.put("/bounties/:id", (req, res) => {
    let {id} = req.params;
    let updatedBounty = req.body;
    let found = false;
    for (let i = 0; i < bounties.length; i++) {
        if(bounties[i]._id === id) {
            // Combine the following objects
            bounties[i] = Object.assign(bounties[i], updatedBounty);
            updatedBounty = bounties[i];
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedBounty
        });
    } else {
        res.send({
            msg: `Item ${id} was not updated!`
        })
    }
})