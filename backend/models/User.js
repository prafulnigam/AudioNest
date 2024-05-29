// Step 1: Require mongoose
const mongoose = require("mongoose");

// Step 2: Create a mongoose schema (structure of a user)
// Define the schema for a User. The schema defines the structure of documents
// that will be stored in the MongoDB collection for users.
const User = new mongoose.Schema({
    // The 'firstName' field is a string and is required
    firstName: {
        type: String,
        required: true,
    },
    // The 'password' field is a string, is required, and is marked as private
    // Note: The 'private' option is not a standard mongoose option; consider using a plugin like mongoose-private or manually excluding it during queries.
    password: {
        type: String,
        required: true,
        private: true, // This line is informative and might need a plugin to enforce
    },
    // The 'lastName' field is a string and is optional
    lastName: {
        type: String,
        required: false,
    },
    // The 'email' field is a string and is required
    email: {
        type: String,
        required: true,
    },
    // The 'username' field is a string and is required
    username: {
        type: String,
        required: true,
    },
    // The 'likedSongs' field is a string and has a default value of an empty string
    // Note: This should be changed to an array later to store multiple liked songs
    likedSongs: {
        type: String,
        default: "",
    },
    // The 'likedPlaylists' field is a string and has a default value of an empty string
    // Note: This should be changed to an array later to store multiple liked playlists
    likedPlaylists: {
        type: String,
        default: "",
    },
    // The 'subscribedArtists' field is a string and has a default value of an empty string
    // Note: This should be changed to an array later to store multiple subscribed artists
    subscribedArtists: {
        type: String,
        default: "",
    },
});

// Step 3: Create a model
// Create a Mongoose model for the User schema. This will allow us to interact
// with the MongoDB collection (e.g., creating, reading, updating, and deleting documents).
const UserModel = mongoose.model("User", User);

// Export the UserModel to use it in other parts of the application
module.exports = UserModel;
