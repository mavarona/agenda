const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createProject = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const project = new Project(req.body);
        project.creator = req.user.id;
        await project.save();
        return res.json(project);
    } catch (err) {
        console.log('Error create a project: ', err);
        return res.status(500).json({ msg: 'Error al crear un proyecto' });
    }

}

exports.getProjects = async(req, res) => {

    try {
        const projects = await Project.find({ creator: req.user.id }).sort({ created: -1 });
        return res.json(projects);
    } catch (err) {
        console.log('Error to gets the projects: ', err);
        return res.status(500).json({ msg: 'Error al obtener los proyectos' });
    }

}

exports.updateProject = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name } = req.body;
    const newProject = {};

    if (name) {
        newProject.name = name;
    }

    try {
        let project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true });
        return res.json({ project });
    } catch (err) {
        console.log('Error to uodate a project: ', err);
        return res.status(500).json({ msg: 'Error al actualizar los proyectos' });
    }

}

exports.deleteProject = async(req, res) => {

    try {
        let project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        project = await Project.findByIdAndRemove({ _id: req.params.id });
        return res.json({ msg: 'El proyecto fue eliminado' });
    } catch (err) {
        console.log('Error to uodate a project: ', err);
        return res.status(500).json({ msg: 'Error al actualizar los proyectos' });
    }

}