"use strict";

/* 

Read More/ Less

This script will handle the read more / read less functionality
It allows the user to display the whole content of the paragraph when clicking on the button ...Read More,
and to display less text when clicking on the button ...Read Less
*/

const originals = [];
let counter = 0;

function readMoreLess() {
  // Select all the <p> elements within elements with class "featured-food"
  const targetElement = document.querySelectorAll(".featured-food p");

  // Adding the ID to each paragraph
  function addIds(element) {
    let pWithId = (element.id = counter);
    // counter++;
    return pWithId;
  }

  // Function to truncate text to a maximum of 200 characters
  function truncateText(text) {
    originals.push(text); // Save the original text
    return text.substring(0, 200); // Return the truncated text
  }

  // Function to update the paragraph with truncated text
  function renderNewParagraph(element, truncated) {
    element.innerHTML = truncated;
  }

  // Add the "...Read More" button to a paragraph
  function addButton(element) {
    const buttonHTML = `<div id="button-${counter}" class="readBtn">...Read More</div>`;
    element.innerHTML += buttonHTML;
    // console.log(element.innerHTML);
  }

  // Function to handle "Read More" action
  function readMore(element) {
    const id = element.id; // Get the ID of the paragraph
    const buttonHTML = `<div class="readBtn">...Read Less</div>`;
    element.innerHTML = originals[id] + buttonHTML; // Restore original text with "Read Less" button
  }

  // Function to handle "Read Less" action
  function readLess(element) {
    const truncated = truncateText(element.textContent); // Truncate the text
    renderNewParagraph(element, truncated); // Update the paragraph with truncated text
    addButton(element); // Add the "Read More" button
  }

  // Loop through the selected <p> elements
  targetElement.forEach(function (element) {
    addIds(element);
    const truncated = truncateText(element.textContent); // Truncate the text
    renderNewParagraph(element, truncated); // Update the paragraph with truncated text
    addButton(element); // Add the "Read More" button

    element.addEventListener("click", (event) => {
      if (event.target.classList.contains("readBtn")) {
        const button = event.target; // Define button within the event listener
        if (button.innerText === "...Read More") {
          readMore(element);
        } else if (button.innerText === "...Read Less") {
          readLess(element);
        }
      }
    });
  });
}

export { readMoreLess };
