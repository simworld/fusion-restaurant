"use strict";

/*

Hamburger Menu Handler 

The scripts handles the menutoggle element to open/close the hamburger menu. 
When the window width is greater than 768px, the hamburger icon and menu are hidden and a different navigation menu is displayed.
*/

const icon = document.getElementById("menutoggle");
const menu = document.getElementById("nav-menu");
let open = false; // Keeps track of the open/close state

// Handles the hambuger menu
function hamburger() {
  icon.addEventListener("click", () => {
    if (open) {
      menu.style.display = "none";
      open = false;
    } else {
      menu.style.display = "block";
      open = true;
    }
  });
}

// Menu setup based on the window width
if (window.innerWidth > 768) {
  menu.style.display = "flex";
  open = false;
} else {
  menu.style.display = "none";
  open = false;
}

// Show the menu with flex layout when window width is greater than 768px
// and when is smaller hide the menu based on the open variable state
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = open ? "block" : "none";
  }
});

export { hamburger };
