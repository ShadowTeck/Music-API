const express = require('express')
const router = express.Router()
const {getAllPlaylists, getPlaylist, createPlaylist, updatePlaylist, deleteSong, addSong} = require('../controllers/Playlist')
//const authMiddleware = require('../middleware/Authentication')
//const { delete } = require('./Auth')

router.route('/').get(getPlaylist)
//router.route('/:id').post(getPlaylist).post(updatePlaylist).post(deleteSong).post(addSong)

module.exports = router;