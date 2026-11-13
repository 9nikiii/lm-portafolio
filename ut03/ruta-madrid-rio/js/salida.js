// Inscripción a la salida en grupo: el mensaje se anuncia con role="status".
const formSalida = document.getElementById("form-boletin");
const mensajeSalida = document.getElementById("mensaje-boletin");

formSalida.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensajeSalida.textContent = "¡Hecho, " + formSalida.nombre.value + "! Te esperamos en el Puente del Rey.";
  formSalida.reset();
});
