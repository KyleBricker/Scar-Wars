const { Playlist } = require('../models/playlist.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
module.exports.createPlaylist = (req, res) => {
    const { name,songs } = req.body;
    Playlist.create({
        name,
        songs
    })
        .then(playlist => res.json(playlist))
        .catch(err => res.json(err));
}

module.exports.getAllPlaylists = (req, res) => {
    Playlist.find({})
    .then(playlists => res.json(playlists))
    .catch(err => res.json(err))
}

module.exports.getOneSinglePlaylist = (req, res) => {
	Playlist.findOne({ _id: req.params.id })
		.then(oneSinglePlaylist => res.json({ Playlist: oneSinglePlaylist }))
        .catch(err => res.json(err))
    };

module.exports.updatePlaylist = (req, res) => {
    Playlist.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPlaylist => res.json(updatedPlaylist))
        .catch(err => res.json(err))
}

module.exports.deletePlaylist = (req, res) => {
    Playlist.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}
