const form = document.getElementById("product-form");
const productsList = document.getElementById("products-list");

// Função para mostrar produtos
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  productsList.innerHTML = "";
  data.data.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = `${prod.name} — Kz ${prod.price} — ${prod.category}`;
    productsList.appendChild(li);
  });
}

// Adicionar produto
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, category })
  });

  const data = await res.json();
  alert(data.message);
  form.reset();
  fetchProducts();
});

// Carregar produtos ao abrir
fetchProducts();
