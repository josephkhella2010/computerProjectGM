const express = require("express");
const router = express.Router();
const Product = require("../Schemas/ProductSchema"); // ✅ now SQLite, not Mongoose
router.post("/addProduct", async (req, res) => {
  try {
    const { name, description, price, imgs } = req.body;
    const newProduct = { name, description, price, imgs };
    const product = await Product.create(newProduct);
    return res
      .status(201)
      .json({ product, sms: "product created sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error while add product" });
  }
});
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();

    return res
      .status(200)
      .json({ products, sms: "product created sucessfully" });
  } catch (error) {
    return res.status(500).json({ error: "error while get product" });
  }
});

module.exports = router;
