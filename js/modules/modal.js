"use strict";

/*

Modal

This script will display a modal element when the download button is clicked.
The model also will be displayed once the page is loaded.

*/

var modalButton = document.getElementById("download-button");
var closeButton = document.getElementsByClassName("close")[0];

const displayModal = () => {
  modal.style.display = "block";
};
modalButton.addEventListener("click", displayModal);

const closeModal = () => {
  modal.style.display = "none";
};

closeButton.addEventListener("click", closeModal);

export { displayModal };
