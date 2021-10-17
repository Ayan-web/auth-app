import userModel from '../models/User'
import {Router,Request,Response} from 'express'
import {compare} from 'bcrypt'

const loginRouter = Router();

loginRouter.get('/',async(req:Request,res:Response)=>{
		const { username,password } = req.body
		if (!(username && password)) {
			return res.status(400).send("All input is required");
		}
		const user = await userModel.findOne({ username });
		if(user &&(await compare(password,user.password)))
		{
				return res.status(200).send("login sucess")
		}
		return res.status(400).send('Invalid Credentials');
})

export default loginRouter;
