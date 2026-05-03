import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:String,
        number:Number,
        age:Number,
        password:String
    }, {timestamps:true}
);

export default mongoose.model("User", userSchema);