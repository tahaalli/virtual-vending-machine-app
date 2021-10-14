const fs = require("fs");
const util = require("util");
const express = require("express");
const router = express.Router();
const db = require("../../../utils/database/database");

// Native promisify
const writeFile = util.promisify(fs.writeFile);

// Products array
const products = [
  {
    product_id: "fizz",
    product_name: "Fizz",
    description:
      "An effervescent fruity experience with hints of grape and coriander.",
  },
  {
    product_id: "pop",
    product_name: "Pop",
    description: "An explosion of flavor that will knock your socks off!",
  },
  {
    product_id: "cola",
    product_name: "Cola",
    description:
      "A basic no nonsense cola that is the perfect pick me up for any occasion.",
  },
  {
    product_id: "mega_pop",
    product_name: "Mega Pop",
    description:
      "Not for the faint of heart. So flavorful and so invigorating, it should probably be illegal.",
  },
];

// PUT - checkout by id
router.get("/:id", async (req, res) => {
  try {
    // Checkout from db
    const soldOut = await db.CheckoutProduct(req.params.id);
    // Check if the product is sold out
    if (soldOut) return res.status(400).send("Sold Out!");
    // Write product to txt file
    const checkedOutProduct = JSON.stringify(
      products.filter((p) => {
        return p.product_id == req.params.id;
      })[0]
    );
    await writeFile(
      __dirname + "/checkout.json",
      checkedOutProduct,
      (error) => {
        if (error) throw error;
      }
    );
    // Send 200 OK with checkout txt file
    return res.status(200).download(__dirname + "/checkout.json");
  } catch (err) {
    console.log(err);
    res.status(500).send("500 Internal Server Error!");
  }
});

module.exports = router;
