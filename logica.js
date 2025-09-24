document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usuarioInput = document.getElementById("usuario");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();

    if (usuario === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (usuario === "admin" && password === "1234") {
      alert("Inicio de sesión exitoso.");

    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});
