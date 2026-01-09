document.addEventListener("DOMContentLoaded", () => {

  /* MENU MOBILE */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.onclick = () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  };

  /* LOCALIZAÇÃO POR IP (NOME) */
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      document.getElementById("location").textContent =
        `📍 ${data.city}, ${data.country_name}`;
    })
    .catch(() => {
      document.getElementById("location").textContent = "📍 Angola";
    });

  /* PRODUTOS (MOCK – estilo NCR Angola) */
  const products = [
    {
      name: "T-shirt MASA",
      price: "12.000 Kz",
      desc: "Algodão premium, confortável.",
      img: "https://via.placeholder.com/300"
    },
    {
      name: "Tênis Urbano",
      price: "45.000 Kz",
      desc: "Estilo moderno e resistente.",
      img: "https://via.placeholder.com/300"
    }
  ];

  const container = document.getElementById("products");

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <strong>${p.price}</strong>
    `;
    div.onclick = () => openPopup(p);
    container.appendChild(div);
  });

  /* POPUP */
  const popup = document.getElementById("popup");
  document.getElementById("closePopup").onclick = () =>
    popup.classList.remove("show");

  function openPopup(p) {
    document.getElementById("pName").textContent = p.name;
    document.getElementById("pPrice").textContent = p.price;
    document.getElementById("pDesc").textContent = p.desc;
    popup.classList.add("show");
  }

});
