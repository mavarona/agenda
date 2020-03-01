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
        res.json(project);
    } catch (err) {
        console.log('Error create a project: ', err);
        res.send(500).json({ msg: 'Error al crear un proyecto' });
    }

}

exports.getProjects = async(req, res) => {

    try {
        const projects = await Project.find({ creator: req.user.id }).sort({ created: -1 });
        res.json(projects);
    } catch (err) {
        console.log('Error create a project: ', err);
        res.send(500).json({ msg: 'Error al obtener los proyectos' });
    }

}