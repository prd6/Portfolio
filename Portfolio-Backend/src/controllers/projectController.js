import Project from "../models/Projects.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};