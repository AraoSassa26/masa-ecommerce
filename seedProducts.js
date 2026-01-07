require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function seedProducts() {
  const products = [
    { name: "Vestido Feminino", price: 25000, category: "Moda Feminina" },
    { name: "Blusa Casual", price: 15000, category: "Moda Feminina" },
    { name: "Saia Jeans", price: 20000, category: "Moda Feminina" },
    { name: "Calça Legging", price: 18000, category: "Moda Feminina" },
    { name: "Sandália Conforto", price: 22000, category: "Moda Feminina" }
  ];

  // Inserir produtos
  const { data, error } = await supabase.from("products").insert(products);

  if (error) {
    console.log("Erro ao criar produtos:", error);
  } else {
    console.log("Produtos criados com sucesso:", data);
  }

  // Listar todos os produtos
  const { data: allProducts, error: getError } = await supabase.from("products").select("*");
  if (getError) {
    console.log("Erro ao listar produtos:", getError);
  } else {
    console.log("Lista completa de produtos:", allProducts);
  }
}

seedProducts();
