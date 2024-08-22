// Slider configuration
const slideInterval = 5000; // Time in milliseconds for auto-slide
let currentIndex = 0;
const sliders = document.querySelectorAll('.slider');
const totalSlides = sliders.length;

// Function to show a specific slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    sliders.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Event listeners for navigation buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, slideInterval);

// Reset auto-slide timer on manual navigation
document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, slideInterval);
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, slideInterval);
});

// Initialize slider
showSlide(currentIndex);
