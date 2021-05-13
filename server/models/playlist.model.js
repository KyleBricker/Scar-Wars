const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        songs: {
            type: Array,
            default: []
        }
    }
)
module.exports.Playlist = mongoose.model('Playlist', PlaylistSchema);
/**
 * Rules:
 * One song from each decade since the 70s
 * One intrumental song
 * One song from a disney movie
 * End with a song in foreign language
 * Start with a song that is the opening to something else (like a tv show)
 * Can't repeat artists, even across multiple albums
 * Exactly 16 songs
 * Total length between 50-60 minutes
 * No one song can be longer than 10 minutes
 */