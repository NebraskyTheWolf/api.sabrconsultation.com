const { 
    fetchCustomer,
    fetchBooking,
    createCustomer,
    fetchAllBooking
} = require('../app/database/MongoDB');
const currentYear = new Date().getFullYear();
module.exports = {
    fetchProfile: function (req, res) {
        if (req.params.customerId === undefined)
            res.status(404).json({
                status: false,
                error: 'CustomerId can\'t be null'
            });
        fetchCustomer(req.params.customerId).then(result => {
            var age = new Date(result.dateOfBirth).getFullYear() - currentYear;
            res.status(200).json({
                status: true,
                data: result,
                age: age
            });
        }).catch(() => {
            res.status(404).json({
                status: false,
                error: 'customer not found.'
            });
        });
    },
    fetchBooking: function (req, res) {
        if (req.params.customerId === undefined)
            res.status(404).json({
                status: false,
                error: 'CustomerId can\'t be null'
            });
        fetchAllBooking(req.params.customerId).then(result => {
            res.status(200).json({
                status: true,
                data: result
            });
        }).catch(() => {
            res.status(404).json({
                status: false,
                error: 'Customer not found'
            });
        });
    }
}