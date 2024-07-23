import express from "express";
import {
  register,
  login,
  getProducts,
  deleteProduct,
  getOrders,
  getUsers,
  deleteUser,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getproducts", getProducts);
router.delete("/deleteproduct/:productId", deleteProduct);
router.get("/getorders", getOrders);
router.get("/getusers", getUsers);
router.delete("/deleteuser/:userId", deleteUser);

export default router;
