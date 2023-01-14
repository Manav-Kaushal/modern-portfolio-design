// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set the Initial State of the Menu
let showMenu = false;

// Adding an Event Listener
menuBtn.addEventListener("click", toggleMenu);

// Creating 'toggleMenu' Function
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    // Nav Links
    navItems.forEach((item) => {
      item.classList.add("show");
    });

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    // Nav Links
    navItems.forEach((item) => {
      item.classList.remove("show");
    });

    // Set Menu State
    showMenu = false;
  }
}
