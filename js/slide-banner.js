const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;

function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});