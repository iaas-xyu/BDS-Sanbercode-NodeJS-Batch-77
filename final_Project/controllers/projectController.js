import User from '../models/user.js'
import Project from "../models/project.js"

const createProject = async (req, res) => {

    const project = await Project.create(req.body)

    res.status(201).json(project)

}


const getProjects = async (req, res) => {

    const projects = await Project.find()

    res.status(200).json(projects)

}


const getProjectById = async (req, res) => {

    const project = await Project.findById(
        req.params.id
    )

    res.status(200).json(project)

}


const updateProject = async (req, res) => {

    const project =
        await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

    res.status(200).json(project)

}



const deleteProject = async (req, res) => {

    await Project.findByIdAndDelete(
        req.params.id
    )

    res.status(200).json({
        message: "Project berhasil dihapus"
    })

}


export {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
}