const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracters').isLength({ min: 6 })
    ],
    authController.login);

router.get('/',
    auth,
    authController.userAuthenticated
)

module.exports = router;