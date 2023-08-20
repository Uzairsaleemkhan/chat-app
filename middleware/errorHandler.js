const Joi = require('joi')


function errorHandler (err,req,res,next){


    if(err instanceof Joi.ValidationError){
        const errResponse = {
            error:{message:err.details}
        }
        res.status(400).json(errResponse)
    }
    const errStatus = err.statusCode||500;


    const errResponse  = {
        error:{
            message:err.message||'Internal server error'
        }
    }

    console.log(err)
    res.status(errStatus).json(errResponse)

}
module.exports = errorHandler