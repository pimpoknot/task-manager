require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server is listing on port: ${PORT}...`))
        console.log('DB CONNECTED')
    } catch (error){
        console.log(error)
    }
}

start()

