const express = require("express");
const bodyParser = require("body-parser");
// const uuid = require("uuid");
// const trackRoute = require("./routes/bounties.js");

let database = require("./database.js");

let app = express();
let port = 8080;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/bounties", (req, res) => {
    res.send(database);
});

app.post("/", (req, res) => {
    console.log(req.body);
})

app.listen(port, () => console.log("...listening on port 8080!"));