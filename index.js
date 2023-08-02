// JavaScript to add the "slide-in" class to the image when the page loads
const slidingImage = document.getElementById('slidingImage');

window.addEventListener('load', () => {
  slidingImage.classList.add('slide-in');
});

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}
