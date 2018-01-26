const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let artists = require("./database.js");

// Express is interface constructor
const app = express();
let port = 8080;

// Middleware
app.use(bodyParser.json());

// Get is a function that takes an arguemnt which is an endpoint
// The request (req) must always come before the response (res)
// 'Req' is the request object-can be named anything. 
// 'Res' is the response object-can be called anything
// app.get('/', (req, res) => res.send('Hello, World!'))

// Routes
// Only sensible place to put req.querry
// Because the original problem is that we can get everything or one thing
app.get("/artists", (req, res) => {
    let query = req.query;
    console.log(req.query)
    let filteredTracks = artists.filter((artist) => {
        let found = true;;
        for(let key in query) {
            if(artist[key] != query[key]) {
                found = false;
                break
            }
        }
        return found
    })
    res.send(filteredTracks);
});

app.post("/tracks", (req, res) => {
    let newTrack = req.body;
    newTrack._id = uuid();
    tracks.push(newTrack)
    res.send({
        msg: "Data added successfully",
        data: newTrack
    });
});

app.get("track/:id", (req, res) => {
    let {id} = req.params;
    let found = false;
    let foundTrack;
    for (let i =0; i < tracks.length; i++) {
        if(tracks[i]._id === id) {
            found = true;
            foundTrack = tracks[i];
            break;
        }
    }
    if(found){
        res.send({
            msg: `Item ${id} was found!`,
            data: foundTrack
        })
    } else {
        res.send({
            msg: `Item ${id} not found!`
        })
    }
})

app.delete("tracks/:id", (req, res) => {
    let {id} = req.params;
    let found = false;

    track = tracks.filter((track) => track._id !== id)
    for(let i = 0; i < tracks.length; i++) {
        if(tracks[i]._id === id) {
            tracks.splice(i);
            found = tru;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        });
    } else {
        res.send({
            msg: `Item ${id} was not found`
        })
    }
});

app.put("/tracks/:id", (req, res) => {
    let {id} = req.params;
    let updatedTrack = req.body;
    let found = false;
    for (let i = 0; i < tracks.length; i++) {
        if(tracks[i]._id === id) {
            // Combine the following objects
            tracks[i] = Object.assign(tracks[i], updatedTrack);
            updatedTrack = tracks[i];
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedTrack
        });
    } else {
        res.send({
            msg: `Item ${id} was not updated!`
        })
    }
})

app.listen(port, () => console.log('Example app listening on port 8080!'))