import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/carrerHunt");
        console.log("mongodb connect successfully");
    } catch (err) {
        console.log(err);
    }
} 

export default connectDB;