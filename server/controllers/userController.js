const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult  } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'El email ya existe' });
        }
        const salt = await bcryptjs.genSalt(10);
        user = new User(req.body);
        user.password = await bcryptjs.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            return res.status(201).json({ msg: 'El usuario se creó correctamente', token });
        });
    } catch (err) {
        console.log('Error to create user', err);
        return res.status(400).json({ msg: 'Error al crear el usuario' });
    }
}