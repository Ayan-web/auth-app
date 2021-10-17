import dotenv from 'dotenv';
import express,{Request,Response} from 'express';
import {join} from 'path'
import { connect } from 'mongoose';
import Register from './routes/register'
import Login from './routes/login'
import Forgot from './routes/forgot'

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
app.use(express.static(join(__dirname,'../public')))
app.use(express.json())

// routes
app.use('/register',Register)
app.use('/login',Login)
app.use('/forgot',Forgot)

//home route 
app.get('/',async(req:Request,res:Response)=>{
	res.sendFile(join(__dirname,'../public','index.html'))
})


export default app

