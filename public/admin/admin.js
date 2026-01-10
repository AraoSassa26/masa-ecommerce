// admin.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔐 CONFIGURAÇÃO SUPABASE
const SUPABASE_URL = "https://rvrmpcwzfbtbbqskfrxt.supabase.co ";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cm1wY3d6ZmJ0YmJxc2tmcnh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODY2MTMsImV4cCI6MjA4MzM2MjYxM30.5BARg21wFO0NySLw8bIaOv9MbvemBi_LP_AOVuaUL2g";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Admin JS carregado");

  const form = document.getElementById("product-form");
  const productsList = document.getElementById("products-list");

  // =============================
  // LISTAR PRODUTOS
  // =============================
  async function loadProducts() {
    productsList.innerHTML = "A carregar produtos...";

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      productsList.innerHTML = "❌ Erro ao carregar produtos";
      console.error(error);
      return;
    }

    if (data.length === 0) {
      productsList.innerHTML = "Nenhum produto cadastrado.";
      return;
    }

    productsList.innerHTML = "";

    data.forEach((product) => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";

      div.innerHTML = `
        <strong>${product.name}</strong><br>
        💰 ${product.price} Kz<br>
        🏷️ ${product.category}<br>
        📝 ${product.description || "Sem descrição"}<br><br>
        <button data-id="${product.id}" class="delete-btn">🗑️ Apagar</button>
      `;

      productsList.appendChild(div);
    });

    // ligar eventos de apagar
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        deleteProduct(btn.dataset.id);
      });
    });
  }

  // =============================
  // CRIAR PRODUTO
  // =============================
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = Number(document.getElementById("price").value);
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const { error } = await supabase.from("products").insert([
      { name, price, category, description }
    ]);

    if (error) {
      alert("❌ Erro ao adicionar produto");
      console.error(error);
      return;
    }

    alert("✅ Produto adicionado com sucesso");
    form.reset();
    loadProducts();
  });

  // =============================
  // APAGAR PRODUTO
  // =============================
  async function deleteProduct(id) {
    const confirmDelete = confirm("Tens certeza que queres apagar?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert("❌ Erro ao apagar produto");
      console.error(error);
      return;
    }

    alert("🗑️ Produto apagado");
    loadProducts();
  }

  // carregar ao abrir
  loadProducts();
});
