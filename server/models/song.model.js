const mongoose = require("mongoose");
const SongSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true,"Name is required"],
    },
    year: {
        type: Number,
        required: [true, "Which year is it from?"]
    }, 
    length:{
        minutes: {
            type: Number,
            required: [true, "How long is the song?"],
            max:[9,"No songs longer than 10 minutes!"],
            min:[0,"Minutes must be positive"]
        },
        seconds: {
            type: Number,
            required: [true, "How long is the song?"],
            max:[59,"If it's longer than this, add another minute!"],
            min:[0,"Seconds must be positive"]
        }
    },  
    artist: { 
        type: String,
        required: [true,"Artist is required"],
    },
    instrumental: {
        type: Boolean,
        default: false
    },
    disney: {
        type: Boolean,
        default: false
    },
    opening: {
        type: Boolean,
        default: false
    },
    language: {
        type: String,
    },
    
}, { timestamps: true });
module.exports.Song = mongoose.model('Song', SongSchema);