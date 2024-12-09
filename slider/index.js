const slides = document.querySelectorAll('.slider img');
let slideIndex = 0;
let intervalID = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide'); // Show the first slide
        intervalID = setInterval(nextSlide, 5000); // Start automatic sliding
    }
}

function showSlide(index) {
    // Wrap around the index
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('displaySlide'); // Remove displaySlide class from all slides
    });

    // Show the current slide
    slides[slideIndex].classList.add('displaySlide'); // Add displaySlide class to the current slide
}

function prevSlide() {
    clearInterval(intervalID); // Stop automatic sliding
    showSlide(slideIndex - 1); // Show the previous slide
    intervalID = setInterval(nextSlide, 5000); // Restart automatic sliding
}

function nextSlide() {
    showSlide(slideIndex + 1); // Show the next slide
}