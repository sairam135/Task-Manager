
// let util=new Promise((resolve,reject)=>{
//        setTimeout(()=>resolve("hello"),2000)
//     //reject("world")  
// })

// console.log(util)
// console.log(new Promise((resolve,reject)=>{
//    reject("world")
//     resolve("hello")
// }))

// util.then((res)=>{
//     console.log(res)
// }
// ).catch((err)=>{
//     console.log(err)
// })




// let add=(a,b)=>{
//   return new Promise((resolve,reject)=>{
        //reject("error")
//         resolve(a+b)
//     })
// }
// let func=async ()=>{
    //let sum=
    // try{
    //     let s= await add(1,2)
    //     return s
    // }catch(e){
    //     console.log("catch 1",e)
    //     return e
    // }
    //console.log("func",sum)
    //return sum
    // let sum=await new Promise((resolve,reject)=>{
    //     //reject("error")
    //     resolve("hello")
    // })
    //return sum
// }

// console.log(func())

// func().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log("catch 2",err)
// })


// let pet={
//     name:'cat'
// }

// pet.toJSON=function (){
//     console.log(this)
//     return {}
// }
// console.log(JSON.stringify(pet))
require('./src/db/mongoose')
let user=require("./src/models/user")
let task=require("./src/models/task")
let pop=async()=>{
    try {
        const User=await user.findById("61c0d9cfffbfbdbe87aa8f47").populate('tasks').exec()
        //console.log(Task.owner)
        //Task.populate('owner').exec()
        console.log(User.tasks)
    } catch (error) {
        console.log(error)
    }
}
pop().then().catch()