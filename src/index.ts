import app from './app'
import dotenv from 'dotenv'

dotenv.config()

// starting server 
const { PORT } = process.env
app.listen(PORT,()=>{
	console.log(`listening on http://localhost:${ PORT }`)
})


