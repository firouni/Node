// console.log('start node js intro')

// let fs = require('fs')
// console.log(fs)

const fs = require("fs")
//create file
fs.writeFile("hello-world.js","example",err=>{
    if(err){
        console.log(err)
    } else {
        console.log("Hello World")
    }
})

//create file 2
fs.writeFile("welcome.txt","Hello Node",err=>{
    if(err){
        console.log(err)
    } else {
        console.log("hello.txt")
    }
})

//create file 3
fs.writeFile("password.js","Hello Node",err=>{
    if(err){
        console.log(err)
    } else {
        console.log("password")
    }
})