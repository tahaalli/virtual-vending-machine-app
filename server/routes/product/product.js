const express = require("express");
const router = express.Router();
const db = require("../../utils/database/database");

// GET - product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await db.GetProduct(req.params.id);
    if (!product) return res.status(400).send("400 Bad Request!");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
