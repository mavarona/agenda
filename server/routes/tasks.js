const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post('/',
    auth, [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('projectId', 'Debe estar asociada a un proyecto').not().isEmpty()
    ],
    taskController.createTask);

router.get('/',
    auth,
    taskController.getTasks);

router.put('/:id',
    auth, [
        check('name', 'hay que darle un nombre a la tarea').not().isEmpty()
    ],
    taskController.updateTask);

router.delete('/:id',
    auth,
    taskController.deleteTask);

module.exports = router;