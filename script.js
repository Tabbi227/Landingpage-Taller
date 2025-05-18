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