let mongoose=require('mongoose')
let validator=require('validator')
let taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})
let task=mongoose.model('Task',taskSchema)

module.exports=task