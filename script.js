let navbar = document.querySelector('.header .navbar');
document.querySelector('#toggle-btn').onclick = () => {
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});