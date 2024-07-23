import mongoose, { Types } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    image:String,
    gender: String,
    category: String,
    type: String,
    rating: Number,
    price: Number
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;