const fadeElementsLeft = document.querySelectorAll(".fade-animation-loader-left");
const fadeElementsRight = document.querySelectorAll('.fade-animation-loader-right');
const fadeElementsBottom = document.querySelectorAll('.fade-animation-loader-bottom')
const fadeBodyCards = document.querySelectorAll('.promouting-card-body');

window.addEventListener('scroll', () => {
    let anyElementFadedIn = false;

    fadeElementsLeft.forEach(e => {
        const position = e.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            e.classList.add("fade-in-left");
            anyElementFadedIn = true;
        } 
    });

    fadeElementsRight.forEach(e => {
        const position = e.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            e.classList.add("fade-in-right");
            anyElementFadedIn = true;
        } 
    });

    fadeElementsBottom.forEach(e => {
        const position = e.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            e.classList.add("fade-in-bottom");
            anyElementFadedIn = true;
        } 
    });

    if (anyElementFadedIn) {
        fadeBodyCards.forEach(card => {
            card.classList.add('show-card-block');
        });
    }
});
