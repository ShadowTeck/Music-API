const express = require('express')
const router = express.Router()
const {getAllPlaylists, getPlaylist, createPlaylist, updatePlaylist, deleteSong, addSong} = require('../controllers/Playlist')


router.route('/').get(getAllPlaylists).post(createPlaylist)
router.route('/songs').post(addSong)
router.route('/:id').get(getPlaylist).delete(deleteSong).patch(updatePlaylist)

module.exports = router;