const { fetchApplication } = require('../app/database/MongoDB');

module.exports  = async function (req, res, next) {
    fetchApplication(req.get('token')).then(result => {
        if (result.appEnabled)
            next();
        else
            res.status(403).json({
                status: false,
                error: 'APPLICATION_DISABLED'
            }).end();
    }).catch(() => {
        res.status(403).json({
            status: false,
            error: 'INVALID_PROVIDED_TOKEN'
        }).end();
    })
}