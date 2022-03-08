const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTasks = async (req, res) => {
    const { name, completed } = req.body
    const task = await Task.create({
        name:name,
        completed:completed
    })
    res.status(201).json({task})
}

const getTasks = (req, res) => {
    res.json({id: req.params.id})
}
const updateTasks = (req, res) => {
    res.send('update task')
}
const deleteTasks = (req, res) => {
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    deleteTasks,
    updateTasks
}