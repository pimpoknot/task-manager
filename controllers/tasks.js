const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
   try  {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
   } catch (err) {
        res.status(500).json({msg: err})
   }
}

const createTasks = async (req, res) => {
    const { name, completed } = req.body
    try {
        const task = await Task.create({
            name: name,
            completed: completed
        })
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

    
}

const getTasks = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOne({__id:taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
   
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