const express = require("express");
const router = express.Router();
const db = require("../../../utils/database/database");

// GET - session balance
router.get("/", async (req, res) => {
  try {
    const balance = await db.GetBalance();
    if (!(Number(balance) >= 0))
      return res.status(400).send("400 Bad Request!");
    res.status(200).json(balance);
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

router.put("/:balance", async (req, res) => {
  try {
    await db.UpdateBalance(req.params.balance);
    res.status(200).send();
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
