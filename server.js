
const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const cors = require('cors')
const server = http.createServer(app)
const Server = socketIo.Server
const errorHandler = require('./middleware/errorHandler')
const db = require('./database/index')
const {PORT,BACKEND_SERVER_PATH}= require('./config/index')
const router = require('./routes')
 const io = new Server(server)
 
db()
 io.on('connection',(socket)=>{
     console.log('a connection established')
    })

app.use(cors())
app.use(router)
app.use(errorHandler)
server.listen(PORT,()=>{
console.log('server is listening on port '+PORT+ ' at '+BACKEND_SERVER_PATH)
})




