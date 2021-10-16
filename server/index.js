const express = require("express");
require("dotenv").config();

const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = process.env.SERVER_PORT || 3001;

// Import routes
const products = require("./routes/products/products");
const product = require("./routes/product/product");
const checkout = require("./routes/product/checkout/checkout");
const restock = require("./routes/product/restock/restock");
const price = require("./routes/product/price/price");
// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Set routes
app.use("/api/products", products);
app.use("/api/product", product);
app.use("/api/product/checkout", checkout);
app.use("/api/product/restock", restock);
app.use("/api/product/price", price);
// Ping server
app.get("/api", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
