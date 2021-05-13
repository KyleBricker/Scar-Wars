const PlaylistController = require('../controllers/playlist.controller');
module.exports = function(app){
    app.get('/api', PlaylistController.index);
    app.post('/api/playlists/new', PlaylistController.createPlaylist);
    app.get('/api/playlists', PlaylistController.getAllPlaylists);
    app.get('/api/playlists/:id', PlaylistController.getOneSinglePlaylist);
    app.put('/api/playlists/:id/edit', PlaylistController.updatePlaylist);
    app.delete('/api/playlists/:id/delete', PlaylistController.deletePlaylist);
}