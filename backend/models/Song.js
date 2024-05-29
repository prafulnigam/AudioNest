// Step 1: Require mongoose
const mongoose = require("mongoose");

// Step 2: Create a mongoose schema (structure of a song)
// Define the schema for a Song. The schema defines the structure of documents
// that will be stored in the MongoDB collection for songs.
const Song = new mongoose.Schema({
    // The 'name' field is a string and is required
    name: {
        type: String,
        required: true,
    },
    // The 'thumbnail' field is a string and is required
    thumbnail: {
        type: String,
        required: true,
    },
    // The 'track' field is a string and is required
    track: {
        type: String,
        required: true,
    },
    // The 'artist' field is a reference to a User document
    // It stores the ObjectId of a User document
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

// Step 3: Create a model
// Create a Mongoose model for the Song schema. This will allow us to interact
// with the MongoDB collection (e.g., creating, reading, updating, and deleting documents).
const SongModel = mongoose.model("Song", Song);

// Export the SongModel to use it in other parts of the application
module.exports = SongModel;
