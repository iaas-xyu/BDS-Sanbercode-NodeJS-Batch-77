import Task from "../models/task.js"

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}

const getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(task)
}

const deleteTask = async (req, res) => {

    await Task.findByIdAndDelete(
        req.params.id
    )

    res.status(200).json({
        message: "Task berhasil dihapus"
    })

}

export {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
}