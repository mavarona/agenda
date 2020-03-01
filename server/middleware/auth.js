const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No tiene permisos' });
    }

    try {
        const encryption = jwt.verify(token, process.env.SECRET);
        req.user = encryption.user;
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'No tiene permisos' })
    }

}