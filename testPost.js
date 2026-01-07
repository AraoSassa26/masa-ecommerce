require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function addProduct() {
  const { data, error } = await supabase
    .from("products")
    .insert([
      { name: "Vestido Feminino", price: 25000, category: "Moda Feminina" }
    ]);

  if (error) {
    console.log("Erro:", error);
  } else {
    console.log("Produto criado:", data);
  }
}

addProduct();
