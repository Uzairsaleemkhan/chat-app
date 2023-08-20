
const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const Server = socketIo.Server
 const io = new Server(server)
 
 io.on('connection',(socket)=>{
     console.log('a connection established')
    })
    
    // app.get('/',(req,res)=>{
    // console.log('working')
    // res.send('hello')
// })




server.listen(3000,()=>{
console.log('server is listening on port 3000')
})




