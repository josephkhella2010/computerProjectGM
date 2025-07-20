// ProductRoutes.js

const express = require("express");
const router = express.Router();
const { findAllProducts } = require("../awsDynamoDBFunctions/DynamoDBFunction");

router.get("/api/products", async (req, res) => {
  try {
    const products = await findAllProducts();
    return res.status(200).json({ products });
  } catch (error) {
    console.error("🔥 Error in /api/products route:", error); // ✅ ADD THIS
    return res.status(500).json({ error: "error with get method product" });
  }
});

module.exports = router;
