const SongController = require('../controllers/song.controller');
module.exports = function(app){
    app.get('/api', SongController.index);
    app.post('/api/songs/new', SongController.createSong);
    app.get('/api/songs', SongController.getAllSongs);
    app.get('/api/songs/:id', SongController.getOneSingleSong);
    app.put('/api/songs/:id/edit', SongController.updateSong);
    app.delete('/api/songs/:id/delete', SongController.deleteSong);
}