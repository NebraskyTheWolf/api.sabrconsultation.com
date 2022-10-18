const { fetchApplication } = require('../app/database/MongoDB');

module.exports = (req, res, next) = {
    fetchApplication(req)
}