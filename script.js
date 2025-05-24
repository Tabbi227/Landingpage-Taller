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
track.addEventListener('scroll', () => {
    const scrollLeft = track.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const trackCenter = scrollLeft + track.offsetWidth / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }
    });
    dots.forEach(d => d.classList.remove('active'));
    dots[closestIndex].classList.add('active');
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
    updateDots(index);
}
function updateDots(index) {
    dotsEspecial.forEach(d => d.classList.remove('active'));
    if (dotsEspecial[index]) {
        dotsEspecial[index].classList.add('active');
    }
}
dotsEspecial.forEach((dot, i) => {
    dot.addEventListener('click', () => scrollToEspecial(i));
});
carrusel.addEventListener('scroll', () => {
    let closestIndex = 0;
    let closestDistance = Infinity;
    const carruselCenter = carrusel.scrollLeft + carrusel.offsetWidth / 2;
    especiales.forEach((img, i) => {
        const imgCenter = img.offsetLeft + img.offsetWidth / 2;
        const distance = Math.abs(carruselCenter - imgCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
        }
    });
    updateDots(closestIndex);
});



const btnsAbrirModal = document.querySelectorAll(".btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");
const formulario = document.getElementById("formulario-modal");
const pantallaGracias = document.getElementById("pantalla-gracias");
btnsAbrirModal.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
    pantallaGracias.classList.add("oculto");
  });
});
btnCerrarModal.addEventListener("click", () => {
  modal.close();
});
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const nombreUsuarioSpan = document.getElementById("nombre-usuario");
  if (nombre !== "") {
    nombreUsuarioSpan.textContent = nombre;
  } else {
    nombreUsuarioSpan.textContent = "usuario";
  }
  pantallaGracias.classList.remove("oculto");
});
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const btnEnviar = document.getElementById("btn-enviar");
function validarFormulario() {
  const nombreValido = nombreInput.value.trim() !== "";
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  btnEnviar.disabled = !(nombreValido && emailValido);
}
nombreInput.addEventListener("input", validarFormulario);
emailInput.addEventListener("input", validarFormulario);





