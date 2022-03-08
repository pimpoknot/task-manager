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
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
   
}
const updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

const deleteTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndDelete({_id: taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (err) {
        console.log('Error')
        res.status(500).json({msg: err})
    }
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    deleteTasks,
    updateTasks
}