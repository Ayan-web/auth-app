import { model, Schema } from 'mongoose';

interface User{
	username: string;
	email: string;
	password: string;
}

const userSchema = new Schema<User>({
	username:{type: String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true}
})
const userModel = model<User>('Users',userSchema);
export default  userModel;

