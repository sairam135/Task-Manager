let express=require('express')
require('./db/mongoose')
let userRouter=require('./routers/user')
let taskRouter=require('./routers/task')
let path=require('path')
let app=express();
let port=process.env.PORT

app.use(express.json())

app.use('',(req,res,next)=>{
    console.log(req.url)
    if(!req.url.match(/^\/api/)){
        app.use(express.static(path.join(__dirname, '../build')));
        app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, '../build/index.html'));
        });
    }
    else{
        next()
    }
})


app.get('/home',(req,res)=>{
    res.send('Home')
})
app.use(userRouter)
app.use(taskRouter)
app.listen(port,()=>{
    console.log("Server started")
}) 