const mongoose = require('mongoose');


const playlistSchema = new Mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'must provide a playlist name'],
            maxLength: 30
        },

    }
)

module.exports = mongoose.model("Playlist", playlistSchema)