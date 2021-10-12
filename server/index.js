const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT || 3000;

// Import routes
const products = require("./routes/products/products");
const product = require("./routes/product/product");
const checkout = require("./routes/product/checkout/checkout");
// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Set routes
app.use("/api/products", products);
app.use("/api/product", product);
app.use("/api/product/checkout", checkout);
// Ping server
app.get("/api", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
