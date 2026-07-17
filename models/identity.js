import mongoose from "mongoose";

const identitySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    caste:{
        type:String,
        required:true,
    },
    height:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true,
    },
    isalive:{
        type:Boolean,
        default:true,
    },
    skincolor:{
        type:String,
    }
})

const Identity=mongoose.model('Identity', identitySchema);
export default Identity;