import userModel from '../models/User'
import { Router,Request,Response } from 'express'
import { hash } from 'bcrypt'

const forgotPasswordRouter = Router()

forgotPasswordRouter.post('/',async (req:Request,res:Response)=>{
	const { email,newpassword } = req.body

	if (!(email && newpassword )) {
		return res.status(400).send("All input is required");
	}
	const user = await userModel.findOne({ email });
	if(user){
		const hashedpassword = await hash(newpassword,10)
		await userModel.findOneAndUpdate({email:email},{$set:{password:hashedpassword}})
		return res.send('password changed sucessfully')
	}
	return res.status(400).send('Invalid Credentials');
})

export default forgotPasswordRouter;
