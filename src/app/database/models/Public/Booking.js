const mongoose = require('mongoose');
module.exports = mongoose.model('Booking', new mongoose.Schema({
    uuid: { type: String },
    referenceId: { type: String },
    
    reason: { type: String },
    date: { type: Date },
    registeredAt: { type: Date }
}));