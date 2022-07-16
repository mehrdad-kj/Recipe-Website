const menuClick = document.querySelector('.menu-svg');
const menu = document.querySelector('.display-none');

menuClick.addEventListener('click', e=>{
    e.preventDefault();
    menu.classList.toggle('test');
});