import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
    userName:string
    hashedPassword:string
    email:string
}

export const UserSchema: Schema = new Schema<IUser>({
    userName:{
      type:String,
      min:[3,'min lenght for name is 3 leeters'],
      required:[true,'user name is required'],
      unique:true
    },
    hashedPassword:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:[true,'email is required'],
      unique:true
    }
    

    
    
  }, {timestamps:true});
  
