const {model, Schema} = require("mongoose");

const postSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    author: {
        type : String,
        required: true,
    },
},{timestamp: true})

module.exports = model("Post", postSchema);