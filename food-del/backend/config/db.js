import mongoose from "mongoose";

export const connectDB = async()=>
{
   await mongoose.connect('mongodb+srv://aishanidhar18:mongoProjOne@cluster0.i1qdg.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
