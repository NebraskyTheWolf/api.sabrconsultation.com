const mongoose = require('mongoose');
module.exports = mongoose.model('History', new mongoose.Schema({
    userId: { type: String },
    ip: { type: String },
    registeredAt: { type: Date },
}));