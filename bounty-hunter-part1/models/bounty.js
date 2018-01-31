const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema
const bountySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number
    },
    // Type of SIth or Jedi, use selection box
    type: {
        type: String
    }
});

module.exports =  mongoose.model("Bounty", bountySchema);