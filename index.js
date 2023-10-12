import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbconfig.js'
import router from './Routers/forgetpasswoard.route.js'
import taskrouter from './Routers/task.route.js'
import userrouter from './Routers/user.route.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/api/fb',router)
app.use('/api/task', taskrouter)
app.use('/api/user', userrouter)
connectDB()
app.listen(port, () => {
    console.log("App is Listening",port);
})
