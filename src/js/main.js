let btn = document.querySelector('.hamburger-js');
let menu = document.querySelector('.mobile-nav');
btn.addEventListener('click', () => {
    menu.classList.toggle('opacity-100');
})