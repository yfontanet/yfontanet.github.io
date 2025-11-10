// espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // selecciona los elementos del DOM
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // escucha el clic en el botón del menú
  toggleButton.addEventListener('click', () => {
    // alterna la clase "show" para abrir/cerrar el menú
    menu.classList.toggle('show');
  });
});