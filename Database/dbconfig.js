import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async (req, res) => {
    try {
        console.log(process.env.MONGODBCONNECTIONSTRING);
        const mongoURL = process.env.MONGODBCONNECTIONSTRING
    const connection = await mongoose.connect(mongoURL)
    console.log("connected to MongoDB");
    return connection
        
    } catch (error) {
console.error("error",error)
        
    }
   
}
export default connectDB;
