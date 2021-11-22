const Playlist = require("../Models/Playlist");

const getAllPlaylists = async (req, res) => {
  //Gets all the playlists for the user

  const playlists = await Playlist.find({ createdBy: req.user.userID });

  res.status(StatusCodes.OK).json({ playlists, count: playlists.length });
};

const getPlaylist = async (req, res) => {
  //Gets one playlist from user

  res.send(`working`);
};

const createPlaylist = async (req, res) => {
  //creates/adds playlist to playlists
  req.body.createdBy = req.user.userID;
  const playlist = await Playlist.create(req.body);

  res.status(StatusCodes.CREATED).json({ playlist });
  res.json({status: 200, results: 'success'})
};

const updatePlaylist = async (req, res) => {
  //Updates a playlist by either changing the name of it, adding a song, or deleting a song
  res.send(`working`);
};

const deleteSong = async (req, res) => {
  //deletes specified song
  res.send(`working`);
};

const addSong = async (req, res) => {
  //adds specified song
  res.send(`working`);
};

const editSong = async (req, res) => {
    //edits specified song
    res.send(`working`)
}

module.exports = {addSong, deleteSong, editSong, updatePlaylist, createPlaylist, getPlaylist, getAllPlaylists}
