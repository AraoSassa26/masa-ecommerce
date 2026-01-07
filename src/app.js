const express = require("express");
const app = express();
const productRoutes = require("./routes/products.routes");

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API MASA a rodar 🚀");
});

module.exports = app;
