// Require the mongoose library
const mongoose = require("mongoose");

// Create a mongoose schema for the Playlist model
const Playlist = new mongoose.Schema({
    // Define the name field of type String which is required
    name: {
        type: String,
        required: true,
    },
    // Define the thumbnail field of type String which is required
    thumbnail: {
        type: String,
        required: true,
    },
    // Define the owner field of type mongoose.Types.ObjectId which references the "User" model
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    // Define the songs field as an array of mongoose.Types.ObjectId which references the "Song" model
    songs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Song",
        },
    ],
    // Define the collaborators field as an array of mongoose.Types.ObjectId which references the "User" model
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
});

// Create a model named "Playlist" using the Playlist schema
const PlaylistModel = mongoose.model("Playlist", Playlist);

// Export the PlaylistModel to be used in other files
module.exports = PlaylistModel;