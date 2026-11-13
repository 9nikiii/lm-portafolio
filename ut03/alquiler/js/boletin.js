// Suscripción al boletín: el formulario valida el correo (required + type="email")
// y el mensaje se anuncia a los lectores de pantalla gracias a role="status".
const formBoletin = document.getElementById("form-boletin");
const mensajeBoletin = document.getElementById("mensaje-boletin");

formBoletin.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensajeBoletin.textContent = "¡Gracias! Te has suscrito con " + formBoletin.correo.value + ".";
  formBoletin.reset();
});
