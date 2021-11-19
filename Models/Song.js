const mongoose = require('mongoose');

const songSchema = new mongoose.Schema( 
    {
        name:{
            type: String, 
            required: [true, 'must provide a name for the song']
        },
        artistName:{
            type: String,
            required: [true, 'must provide an artist name']
        }
    }
)

module.exports = mongoose.model("Song", songSchema)