const mongoose = require('mongoose');

// Define the User schema using new mongoose.Schema() for clarity
const UserSchema = new mongoose.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true, unique: true },  // Ensures email is unique
    password: { type: String, required: true }
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
