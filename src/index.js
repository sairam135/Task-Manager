let express=require('express')
require('./db/mongoose')
let userRouter=require('./routers/user')
let taskRouter=require('./routers/task')

let app=express();
let port=process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port,()=>{
    console.log("Server started")
}) 