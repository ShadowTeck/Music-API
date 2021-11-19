const getAllPlaylists = async (req, res) => {
    //Gets all the playlists for the user
    
    res.send(`working`)
}

const getPlaylist = async (req, res) => {
    //Gets one playlist from user
    res.send(`working`)
}

const createPlaylist = async (req, res) => {
    //creates/adds playlist to playlists
    res.send(`working`)
}

const updatePlaylist = async (req, res) => {
    //Updates a playlist by either changing the name of it, adding a song, or deleting a song
    res.send(`working`)
}

const deleteSong = async (req, res) => {
    //deletes specified song
    res.send(`working`)
}

const addSong = async (req, res) => {
    //adds specified song
    res.send(`working`)
}

module.exports = {addSong, deleteSong, updatePlaylist, createPlaylist, getPlaylist, getAllPlaylists}