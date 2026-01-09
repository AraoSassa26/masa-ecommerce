const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 👇 SERVIR FRONTEND
app.use(express.static(path.join(__dirname, "../public")));

// Rotas API
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

module.exports = app;
