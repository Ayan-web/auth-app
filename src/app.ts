import dotenv from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';
import Register from './routes/register'

// configure api
dotenv.config();
const app = express()

//connect to database
connect(`${process.env.MONGO_URL}`,(err)=>{
	if(err)
		console.log(err.message)
	else
		console.log('connected to db')
})
//middle ware
app.use(express.json())

// routes
app.use('/register',Register)


export default app

