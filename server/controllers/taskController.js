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
        return res.status(500).json({ msg: 'Error al crear una tarea' });
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
        return res.status(500).json({ msg: 'Error al obtener las tareas' });
    }

}

exports.updateTask = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { projectId, name, completed } = req.body;

    try {

        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'La tarea no existe' });
        }

        const project = await Project.findById(projectId);

        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        const newTask = {};
        if (name) {
            newTask.name = name;
        }

        if (completed) {
            newTask.completed = completed;
        }

        task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true });

        return res.json({ task });

    } catch (err) {
        console.log('Error update a task: ', err);
        return res.status(500).json({ msg: 'Error al actualizar una tarea' });
    }

}

exports.deleteTask = async(req, res) => {

    try {

        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'La tarea no existe' });
        }

        await Task.findByIdAndRemove({ _id: req.params.id });
        return res.json({ msg: 'La tarea se eliminó' });

    } catch (err) {
        console.log('Error update a task: ', err);
        return res.status(500).json({ msg: 'Error al actualizar una tarea' });
    }

}