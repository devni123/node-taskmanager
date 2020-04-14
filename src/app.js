const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

//Convert incoming JSON strings to JSON objects for every request
app.use(express.json())

// Registering routers with Express
app.use(userRouter)
app.use(taskRouter)

module.exports = app