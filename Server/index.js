const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/tasks')


const app = express()
app.use(cors())

//to convert data in json which is comes from fontend
app.use(express.json())



//connection to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

//get method
app.get('/', (req, res) => {
    TaskModel.find({})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

app.get('/getTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findById({ _id: id})
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//put method
app.put('/updateTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate({ _id: id }, { title: req.body.title, description: req.body.description, status: req.body.status })
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//post method
app.post("/createTask", (req, res) => {
    TaskModel.create(req.body)
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})

//delete method
app.delete('/deleteTask/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running");
})