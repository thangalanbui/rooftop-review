var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String,
    rating: {
        type: Number,
        max: 5
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Comment", commentSchema);