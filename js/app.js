const menu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector(".open_menu");
const  closeMenuBtn = document.querySelector(".close_menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav_menu a[href^="#"]')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.getAttribute("id");
        document.querySelector('.nav_menu a[href="#${id}"]')

        if (entry.isIntersecting) {
            document.querySelector("nav_menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        } else {
            menuLink.classList.remove("selected");
        }

    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })

      const hash  = menuLink.getAttribute("href");
      const target  = document.querySelector(hash);
      if(target) {
        observer.observe(target)
      }
})



