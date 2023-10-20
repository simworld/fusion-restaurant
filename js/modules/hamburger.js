"use strict";
const icon = document.getElementById("menutoggle");
const menu = document.getElementById("nav-menu");
let open = false;

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

if (window.innerWidth > 768) {
  menu.style.display = "flex";
  open = false;
} else {
  menu.style.display = "none";
  open = false;
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = open ? "block" : "none";
  }
});

export { hamburger };
