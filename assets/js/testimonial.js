let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function updateSlide() {
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlide();
}

// Auto-scroll every 5 seconds
setInterval(nextSlide, 5000);

updateSlide();
