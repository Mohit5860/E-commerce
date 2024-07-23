import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true
    },
    number:String,
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type: Number,
        min:6,
        required:true
    },
    landmark:String,
    label:{
        type:String,
    },
    default: Boolean
});

const Address = mongoose.model("Address", AddressSchema);

export default Address;