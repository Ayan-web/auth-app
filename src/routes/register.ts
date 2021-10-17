import {Router,Request,Response} from 'express'
import userModel from '../models/User'
import {hash} from 'bcrypt'

const router = Router()

router.post('/',async(req:Request,res:Response)=>{
	
	// we don't check for validation as we expect the client the request after all checks
	const { username, email, password} = req.body;
	if (!(email && password && username)) {
		return res.status(404).send("All input is required");
	}

	const oldUser = await userModel.findOne({ email });

	if (oldUser) {
		return res.status(404).send("User Already Exist. Please Login")
	}
	const hashedpassword = await hash(password,10)


	const user = new userModel({
		username:username,
		email:email,
		password:hashedpassword
	})
	try{
		await user.save();
		res.send("registration sucess")
	}
	catch(err)
	{
		res.send(err.message)

	}
})

export default router;
