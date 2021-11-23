const express = require('express')
const router = express.Router()
const {getAllPlaylists, getPlaylist, createPlaylist, updatePlaylist, deletePlaylist, addSong, getSong} = require('../controllers/Playlist')


router.route('/').get(getAllPlaylists).post(createPlaylist)
router.route('/songs').post(addSong)
router.route('/songs/:id').get(getSong)
router.route('/:id').get(getPlaylist).delete(deletePlaylist).patch(updatePlaylist)

module.exports = router;