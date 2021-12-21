let mongoose=require('mongoose')
let user=require('../models/user')
let task=require('../models/task')
let url="mongodb+srv://taskmanager:taskmanager@cluster0.nsa1p.mongodb.net/taskmanager?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser:true
})


