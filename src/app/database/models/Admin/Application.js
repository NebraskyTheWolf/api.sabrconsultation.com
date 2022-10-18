const mongoose = require('mongoose');
module.exports = mongoose.model('Application', new mongoose.Schema({
    appName: { type: String },
    appEnabled: { type: String },
    appToken: { type: String },
    appCategory: { type: String, default: 'core' }
}));