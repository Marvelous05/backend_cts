import mongoose from "mongoose";
 const connectDb = async () =>{
   await  mongoose.connect('mongodb://127.0.0.1:27017/certificate_trackingdb');
}

export default connectDb