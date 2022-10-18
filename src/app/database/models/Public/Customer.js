const mongoose = require('mongoose');
module.exports = mongoose.model('Customer', new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: String },
    email: { type: String }
}));