const track = document.querySelector('.card-track');
const cards = document.querySelectorAll('.card-img');
const dots = document.querySelectorAll('.doti');
function scrollToIndex(index) {
    const cardWidth = cards[0].offsetWidth + 20; 
    const scrollLeft = cards[index].offsetLeft - (track.offsetWidth - cardWidth) / 2;
    track.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => scrollToIndex(i));
});
window.addEventListener('load', () => {
    scrollToIndex(1);
});

const carrusel = document.querySelector('.carrusel');
const especiales = document.querySelectorAll('.especial-img');
const dotsEspecial = document.querySelectorAll('.dot-especial');
function scrollToEspecial(index) {
    const imgWidth = especiales[0].offsetWidth;
    const scrollLeft = especiales[index].offsetLeft - (carrusel.offsetWidth - imgWidth) / 2;
    carrusel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
    dotsEspecial.forEach(d => d.classList.remove('active'));
    dotsEspecial[index].classList.add('active');
}
dotsEspecial.forEach((dot, i) => {
    dot.addEventListener('click', () => scrollToEspecial(i));
});



const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
const formulario = document.getElementById("formulario-modal");
const pantallaGracias = document.getElementById("pantalla-gracias");
btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
  mensajeGracias.classList.add("oculto"); // 
});
btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  pantallaGracias.classList.remove("oculto");
});




