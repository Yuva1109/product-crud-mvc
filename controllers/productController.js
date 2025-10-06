import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productName, description, price } = req.body;
    await Product.create({ productName, description, price });
    console.log(productName, description, price);
    return res.json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (req, res) => {
  try {
    const { productName, description, price } = req.body;
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.json({ message: "Product not found" });
    product.productName = productName;
    product.description = description;
    product.price = price;
    await product.save();
    return res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });
    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
