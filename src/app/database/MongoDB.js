const mongoose = require('mongoose');

const applicationSchema = require('./models/Admin/Application');

const bookingSchema = require('./models/Public/Booking');
const customerSchema = require('./models/Public/Customer');

module.exports.fetchApplication = async function (token) {
    return await applicationSchema.findOne({ appToken: token });
}

module.exports.fetchCustomer = async function (reference) { 
    return await customerSchema.findOne({ _id: mongoose.Types.ObjectId(reference)});
}

module.exports.createCustomer = function (data = {}) {
    const data = customerSchema({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        email: data.email
    });
    data.save().catch(() => console.log(`Error occurred: createCustomer ( ${data.email} )`));
}

module.exports.fetchBooking = async function (uuid, reference) {
    
}