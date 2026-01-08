const container = document.getElementById("products-container");

fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      data.data.forEach(prod => {
        const div = document.createElement("div");
        div.innerText = `${prod.name} - ${prod.category} - Kz ${prod.price}`;
        container.appendChild(div);
      });
    } else {
      container.innerText = "Erro ao carregar produtos";
    }
  })
  .catch(err => {
    container.innerText = "Erro na conexão com o servidor";
  });
