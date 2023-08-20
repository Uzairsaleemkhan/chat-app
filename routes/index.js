const express = require('express')

const router = express.Router()


router.get('/test',(req,res,next)=>{
    console.log('hello')
    res.send('Joust testing')
})


module.exports= router

