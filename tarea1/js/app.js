const hoy = new Date();
document.getElementById('fecha').textContent = hoy.toLocaleDateString('es-ES', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
