const express = require("express");
const router = express.Router();
const db = require("../../../utils/database/database");

// PUT - Restock the product by qty
router.put("/:id/:quantity", async (req, res) => {
  try {
    // Get product from db by id
    const product = await db.GetProduct(req.params.id);
    // Validate the product
    if (!product) return res.status(400).send("400 Bad Request!");
    // Validate req quantity
    if (Number(req.params.quantity) < 0)
      return res.status(400).send("400 Bad Request!");
    // Set product quantity
    product.quantity += Number(req.params.quantity);
    // Update entity
    await db.UpdateProduct(product);
    res.status(200).send();
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
