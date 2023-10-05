const slides = document.querySelectorAll('.slide');
const navigators = document.querySelectorAll('.navigator');
const slider = document.querySelector('#slider');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let currentSlide = 0;

function goToSlide() {
    slider.style.transform = `translate(calc(${currentSlide} * (-100%)))`;
    navigators.forEach(element => {
        (element.getAttribute('data-naigator-id') == currentSlide)? element.classList.add('bg-dark'):element.classList.remove('bg-dark');
    });
};



right.addEventListener('click', () => {
    (currentSlide === 3)? currentSlide = 0 : currentSlide++ ;
    goToSlide();
});
left.addEventListener('click', () => {
    (currentSlide === 0)? currentSlide = 3 : currentSlide-- ;
    goToSlide();
});
navigators.forEach(element => {
    element.addEventListener('click', () => {
        currentSlide =  element.getAttribute('data-naigator-id');
        goToSlide();
    });
});


