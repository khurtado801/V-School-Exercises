const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");

const bountyRoute = require("./routes/bounty.js");
const config = require ("./config.js");


const app = express();

//middleware
app.use(bodyParser.json());
// app.use(cors()); 

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

//routes
app.use("/bounty", bountyRoute);



function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  }

function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
}

function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', {error: err})
}

// Used to connect to mongoose
mongoose.connect("mongodb://localhost:27017", () => {
    console.log('Connected to MongoDB')
})


app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});