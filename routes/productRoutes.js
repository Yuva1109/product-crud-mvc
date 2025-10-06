import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getAllProducts).post("/", createProduct);

router.put("/:id", editProduct).delete("/:id", deleteProduct);

export default router;
