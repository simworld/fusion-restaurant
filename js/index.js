"use strict";

import { hamburger } from "./modules/hamburger.js";
import { scrollFunction } from "./modules/scroll-top.js";
import { readMoreLess } from "./modules/read-more-less.js";
import { displayModal } from "./modules/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  hamburger();
  scrollFunction();
  readMoreLess();
  displayModal();
});
