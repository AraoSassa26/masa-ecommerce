const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// rotas
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

// rota teste
app.get("/", (req, res) => {
  res.send("API MASA a rodar 🚀");
});

module.exports = app; 
