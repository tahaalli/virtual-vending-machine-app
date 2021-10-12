const express = require("express");
const router = express.Router();
const db = require("../../../utils/database/database");

// PUT - checkout by id
router.put("/:id", async (req, res) => {
  try {
    await db.CheckoutProduct(req.params.id);
    return res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
