// Menu hambúrguer
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Carregar produtos do backend
const container = document.getElementById("products-container");

fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      data.data.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p>${product.price} Kz</p>
        `;
        container.appendChild(div);
      });
    }
  })
  .catch(err => console.error(err));
// Accordion footer mobile
const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(title => {
  title.addEventListener("click", () => {
    title.classList.toggle("accordion-active");
  });
});
