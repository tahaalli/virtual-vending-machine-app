const express = require("express");
const router = express.Router();
const db = require("../../utils/database/database");

// GET - all products
router.get("/", async (req, res) => {
  try {
    const products = await db.GetProducts();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
