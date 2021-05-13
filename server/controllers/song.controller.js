const { Song } = require('../models/song.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
module.exports.createSong = (req, res) => {
    const { name,year,length,artist,instrumental,disney,opening,language } = req.body;
    Song.create({
        name, 
        year,
        length,
        artist,
        instrumental,
        disney,
        opening,
        language
    })
        .then(song => res.json(song))
        .catch(err => res.json(err));
}

module.exports.getAllSongs = (req, res) => {
    Song.find({})
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
}

module.exports.getOneSingleSong = (req, res) => {
	Song.findOne({ _id: req.params.id })
		.then(oneSingleSong => res.json({ Song: oneSingleSong }))
        .catch(err => res.json(err))
    };

module.exports.updateSong = (req, res) => {
    Song.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedSong => res.json(updatedSong))
        .catch(err => res.json(err))
}

module.exports.deleteSong = (req, res) => {
    Song.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}
