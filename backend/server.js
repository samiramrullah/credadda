const http=require('http')
const port=process.env.PORT ||5001
console.log('====================================');
console.log(process.env.PORT);
console.log('====================================');
const app=require('./app')
const dotenv = require('dotenv');
dotenv.config();
const server=http.createServer(app)
console.log(`Running on Port ${port}`);
server.listen(port)