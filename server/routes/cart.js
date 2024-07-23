import express from "express";
import { addProduct, getProduct } from "../controllers/cart.js";

const router = express.Router();

router.post("/add", addProduct);
router.post("/get", getProduct)

export default router;
