const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createTask = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { projectId } = req.body;

    try {
        const project = await Project.findById(projectId);
        console.log(project)
        if (!project) {
            return res.status(400).json({ msg: 'Proyecto no encontrado' })
        }

        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        const task = new Task(req.body);
        await task.save();
        return res.json(task);
    } catch (err) {
        console.log('Error create a task: ', err);
        res.status(500).json({ msg: 'Error al crear una tarea' });
    }
}

exports.getTasks = async(req, res) => {

    const { projectId } = req.body;

    try {
        const project = await Project.findById(projectId);
        console.log(project)
        if (!project) {
            return res.status(400).json({ msg: 'Proyecto no encontrado' })
        }

        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        const tasks = await Task.find({ projectId });
        return res.json(tasks);
    } catch (err) {
        console.log('Error gets a task: ', err);
        res.status(500).json({ msg: 'Error al obtener las tareas' });
    }

}