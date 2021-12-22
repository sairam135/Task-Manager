let mongoose=require('mongoose')
let user=require('../models/user')
let task=require('../models/task')
let url=process.env.MONGODB
mongoose.connect(url,{
    useNewUrlParser:true
})


