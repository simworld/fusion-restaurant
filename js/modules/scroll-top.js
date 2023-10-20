"use strict";

/*

Scroll Top

This script will display a button when the user scroll and the windows scroll is more then 20px.
Clicking the button will redirect the user to the top page.

*/

const topButton = document.getElementById("to-top");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

topButton.addEventListener("click", getToTop);

export { scrollFunction };
