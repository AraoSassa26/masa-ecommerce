const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  
  if(username === "admin" && password === "1234") {
    alert("Login bem-sucedido!");
    window.location.href = "admin.html"; 
  } else {
    alert("Usuário ou senha incorretos!");
  }
});
