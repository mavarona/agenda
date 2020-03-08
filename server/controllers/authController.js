const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult  } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.login = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Datos de acceso incorrectos' });
        }

        const passwordSuccess = await bcryptjs.compare(password, user.password);
        if (!passwordSuccess) {
            return res.status(400).json({ msg: 'Datos de acceso incorrectos' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            return res.status(201).json({ token });
        });

    } catch (err) {
        console.log('Error to login user', err);
        return res.status(400).json({ msg: 'Error al logarse el usuario' });
    }

}

exports.userAuthenticated = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ user });
    } catch (error) {
        console.log('Error', err);
        return res.status(500).json({ msg: 'Hubo un error' });
    }
}