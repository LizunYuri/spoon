const fadeHeader = document.querySelector('.header-effect');
const fadeTitle = document.getElementById('title-effect');
const fadeSubtitle = document.getElementById('subtitle-effect');
const fadeBtn = document.getElementById('title-btn')

const fadeArray = () => {
    let textContent = fadeSubtitle.innerText;
    let textArray = textContent.split('');
    const delay = 55;

    textArray.forEach( (char, index) => {
        fadeSubtitle.innerText = ''
        fadeSubtitle.style.opacity = 1
        setTimeout( () => {
            fadeSubtitle.innerHTML +=`<span>${char}</span>` ;
        }, index * delay)
    })
}


const headerFedeFunction =() => {

    setTimeout(() => {
        fadeHeader.style.display = 'block';
        fadeBtn.style.opacity = 1;
    }, 5000);
    setTimeout(() => {
        fadeTitle.style.opacity = 1
        fadeTitle.classList.add('title-effect');
    }, 1000);
    setTimeout(() => {
        fadeArray()
    }, 3000);
} 

document.addEventListener('DOMContentLoaded', headerFedeFunction)


