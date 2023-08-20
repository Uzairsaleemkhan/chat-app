const dotenv = require('dotenv').config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT;
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH;


module.exports= {
    MONGODB_CONNECTION_STRING,PORT,BACKEND_SERVER_PATH
}




