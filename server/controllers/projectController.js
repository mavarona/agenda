const Project = require('../models/Project');

exports.createProject = async(req, res) => {

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