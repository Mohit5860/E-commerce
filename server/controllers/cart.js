import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const addProduct = async (req, res) => {
  try {
    const { param, token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    const id = decoded.userId
    const user = await Cart.findOne({userId : id });
    if (user) {
      const filter = { userId: id };
      const update = {
        $push: { productId: param },
      };
      const result = await Cart.updateOne(filter, update);
    } else {
      const cart = new Cart({ userId: id, productId: [param] });
      await cart.save();
    }

    res.status(201).send("Item added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getProduct = async (req, res) => {
  try {
    const { value } = req.body;
    const decoded = jwt.verify(value, process.env.JWT_KEY)
    const id = decoded.userId
    const cart = await Cart.findOne({ userId: id });
    console.log(cart)

    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    const productPromises = cart.productId.map((id) => Product.findById(id));
    const products = await Promise.all(productPromises);

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export { addProduct, getProduct };
