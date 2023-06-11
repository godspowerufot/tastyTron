"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}
const openModalBtn = document.getElementById("openModalBtn");
const myModal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const quantityValue = document.getElementById("quantityValue");
const addToCartBtn = document.getElementById("addToCart");

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

function changeBannerImages() {
  var sliderItems = document.getElementsByClassName("slider-item");
  var activeIndex = 0;

  setInterval(function () {
    // Hide the currently active slider item
    sliderItems[activeIndex].classList.remove("active");

    // Calculate the index of the next slider item
    activeIndex = (activeIndex + 1) % sliderItems.length;

    // Show the next slider item
    sliderItems[activeIndex].classList.add("active");
  }, 5000);
}
window.onload = function () {
  changeBannerImages();
};
function togglePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = popup.style.display === "none" ? "block" : "none";

}
var submitform = document.getElementById("submit");
submitform.addEventListener("click",()=>{  var popup = document.getElementById("Successful");
popup.style.display = popup.style.display === "none" ? "block" : "none";})