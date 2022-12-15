const menu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector(".open_menu");
const  closeMenuBtn = document.querySelector(".close_menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);