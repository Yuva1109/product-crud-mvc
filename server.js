import express from "express";
import connectToDb from "./config/db.js";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";


const app = express();
const port = 3000;

app.use(express.json());

await connectToDb();  

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Product Management API");
});

mongoose.connection.on("connected", () => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});
