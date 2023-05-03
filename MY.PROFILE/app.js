// Get the relevant elements from the HTML
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;
const slideInterval = 5000; // Change this value to adjust the slide interval time


  showSlide(slideIndex);

// Event listeners for the previous and next buttons
prevBtn.addEventListener('click', () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});
nextBtn.addEventListener('click', () => {
  slideIndex += 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// Automatically advance to the next slide every slideInterval milliseconds
setInterval(() => {
  slideIndex += 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}, slideInterval);

// Function to show the current slide
function showSlide(n) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Show the current slide
  slides[n].style.display = 'block';
}




