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

window.addEventListener('scroll', () => {
    let content = document.querySelector('.business')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('buss-trans')
    } else {
        content.classList.remove('buss-trans')
    }
})
window.addEventListener('scroll', () => {
    let contentTwo = document.querySelector('.container-price')
    let contentTwoPosition = contentTwo.getBoundingClientRect().top;
    let screenTwoPosition = window.innerHeight;
    if (contentTwoPosition < screenTwoPosition) {
        contentTwo.classList.add('animate-container')
    } else {
        contentTwo.classList.remove('animate-container')
    }
})
