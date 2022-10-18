const mongoose = require('mongoose');

const applicationSchema = require('./models/Admin/Application');

module.exports.fetchApplication = async function (token) {
    return await applicationSchema.findOne({ appToken: token });
}
