const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});




// Get the modal popup
var popup = document.querySelector(".popup");

// Get the modal content container
var popupContent = document.querySelector(".popup-content");

// Get all project links
var projectLinks = document.querySelectorAll(".project-link");

// Get the close button
var closeBtn = document.querySelector(".close");

// Loop through each project link and attach a click event listener
projectLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var imgUrl = link.querySelector("img").src;
    popupContent.querySelector("img").src = imgUrl;
    popup.style.display = "block";
  });
});

// When the user clicks on close button, close the popup
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// When the user clicks outside of the popup content container, close the popup
window.addEventListener("click", function(e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});
