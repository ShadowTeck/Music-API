const express = require('express')
const router = express.Router()
const {getAllPlaylists, getPlaylist, createPlaylist, updatePlaylist, deleteSong, addSong} = require('../controllers/Playlist')


router.route('/').get(getAllPlaylists).post(createPlaylist)
router.route('/:id').get(getPlaylist).delete(deleteSong).patch(updatePlaylist).put(addSong)

module.exports = router;