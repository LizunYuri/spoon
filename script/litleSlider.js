const slider = document.querySelector('.litle-slider');
const slides = document.querySelectorAll('.litle-slide');
const paginator = document.querySelectorAll('.paginator-rectangle');

let currentIndex = 0;
let currentRectangleIndex = 0; // Ваш текущий индекс пагинатора

const slideWidth = slides[0].clientWidth;

const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;

    currentIndex = index;
    const offset = -slideWidth * currentIndex;
    document.querySelector('.litle-slides').style.transform = `translateX(${offset}px)`;
}

const goToPaginator = (index) => {
    if (index < 0 || index >= paginator.length) return;

    // Remove active class from all paginators
    paginator.forEach(p => p.classList.remove('active'));
    
    // Add active class to the current paginator
    paginator[index].classList.add('active');
  };

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
    currentRectangleIndex = (currentRectangleIndex + 1) % paginator.length;
    goToPaginator(currentRectangleIndex);
}, 5000);
