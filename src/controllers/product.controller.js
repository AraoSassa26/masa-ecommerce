const supabase = require("../supabaseClient");

// GET /products
exports.listProducts = async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return res.status(500).json({ success: false, message: error.message });
  }

  res.json({ success: true, data, message: "Produtos listados com sucesso" });
};

// POST /products
exports.createProduct = async (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Nome e preço são obrigatórios" });
  }

  const { data, error } = await supabase
    .from("products")
    .insert([{ name, price, category }])
    .select();

  if (error) {
    return res.status(500).json({ success: false, message: error.message });
  }

  res.status(201).json({ success: true, data: data[0], message: "Produto criado com sucesso" });
};
