const express = require("express");
const router = express.Router();
const db = require("../../../utils/database/database");

// PUT - session auth token
router.post("/:token", async (req, res) => {
  try {
    await db.SetAuthToken(req.params.token);
    res.status(200).send();
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await db.AuthUser();
    if (!result) res.status(400).send("Invalid Auth Token!");
    res.status(200).send();
  } catch (err) {
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
