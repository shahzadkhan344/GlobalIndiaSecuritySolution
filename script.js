// Toggle the navbar visibility on mobile
document.getElementById('navbar-toggle').addEventListener('click', function () {
    const navbarItems = document.querySelector('.navbar-items');
    navbarItems.classList.toggle('show');
});








const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
let currentIndex = 0;

// Function to trigger animations for the current slide
function triggerAnimations(slide) {
    const text = slide.querySelector('h5.text');
    const text2 = slide.querySelector('h1.text2');
    const buttons = slide.querySelectorAll('.button-container button');

    // Reset animations by removing and re-adding them
    text.style.animation = 'none';
    text2.style.animation = 'none';
    buttons.forEach(button => button.style.animation = 'none');

    // Reapply animations with a slight delay
    setTimeout(() => {
        text.style.animation = 'flipIn 1s ease-in-out forwards';
        text2.style.animation = 'growIn 1s ease-out forwards 0.5s';
        buttons[0].style.animation = 'slideInLeft 1s ease-in-out forwards 1s';
        buttons[1].style.animation = 'slideInRight 1s ease-in-out forwards 1s';
    }, 10);
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateSlidePosition();
}

// Function to update the slide position and trigger animations
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    triggerAnimations(slideElements[currentIndex]); // Trigger animations for the current slide
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);

// Trigger animations for the first slide on page load
triggerAnimations(slideElements[currentIndex]);




document.querySelector('.whatsapp-icon').addEventListener('click', () => {
    console.log('WhatsApp icon clicked');
    // Add your analytics tracking code here
});
