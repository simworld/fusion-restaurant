"use strict";

/*

Scroll Top

This script will display a button when the user scroll and the windows scroll is more than 20px.
Clicking the button will redirect the user to the top page.

*/

const topButton = document.getElementById("to-top");

// On scroll will call the scrollFunction to display or hide the button
window.onscroll = function () {
  scrollFunction();
};

// The function manage the visibility of the button
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// This function will scroll up to the top of the page
const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Event on click that triggers the getToTop function
topButton.addEventListener("click", getToTop);

export { scrollFunction };
