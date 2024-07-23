import express from "express";
import {
  getProducts,
  getProductbyId,
  addProduct,
  top,
} from "../controllers/products.js";


const router = express.Router();

router.post("/add", addProduct);
router.get("/product/:id", getProductbyId);
router.get("/get", top);
router.get("/:category", getProducts);

export default router;
