import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;
const connect = mongoose.connect(url);
export default connect;
