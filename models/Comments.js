const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
   
    name: {
        type: String,
        ref: "User",
    },
    comment: {
        type: String,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Comments", CommentsSchema);
