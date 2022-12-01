const express = require("express");
const productRouter = express.Router();
const auth = require("../middlewares/auth");
const Product = require("../models/product");

productRouter.get("/api/products", auth, async (req, res) => {
  try {
    const products = await Product.find({ category: req.query.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productRouter.get("/api/products/search/:name", auth, async (req, res) => {
  try {
    const products = await Product.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = productRouter;
