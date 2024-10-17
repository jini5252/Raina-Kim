const menu = document.querySelector('.navbar_menu');
const menu2 = document.querySelector('.navbar_sns');
const toggleBtn = document.querySelector('.nav_ham');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu2.classList.toggle('active');
});