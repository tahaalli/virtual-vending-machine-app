const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3001;

// Import routes
const products = require("./routes/products/products");
const product = require("./routes/product/product");
const checkout = require("./routes/product/checkout/checkout");
const restock = require("./routes/product/restock/restock");
const price = require("./routes/product/price/price");
const balance = require("./routes/session/balance/balance");
const auth = require("./routes/session/auth/auth");

app.use(express.static(path.join(__dirname, "../client/build")));

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
app.use("/api/session/balance", balance);
app.use("/api/session/auth", auth);
// Ping server
app.get("/api", (req, res) => {
  res.status(200).send("OK");
});
// React
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
