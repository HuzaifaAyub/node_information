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
    is_alive:{
        type:Boolean,
        default:true,
    },
    skin_color:{
        type:String,
    }
})

const Identity=mongoose.model('Identity', identitySchema);
export default Identity;