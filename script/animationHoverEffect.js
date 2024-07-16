
const linkHoverEffect = document.querySelectorAll('.hover-effect')

linkHoverEffect.forEach(e => {
    e.addEventListener('mouseenter', (event) =>{
        const rect = e.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const middleXRight = rect.left + rect.width * 2;
        const middleY = rect.top + rect.height /2;

        if(mouseX < middleXRight || mouseY < middleY){
            e.classList.remove('hover-left');
            e.classList.add('hover-right');
            
        } else {
            e.classList.remove('hover-right');
            e.classList.add('hover-left');
        }
    })

    e.addEventListener('mouseleave', () => {
        e.classList.remove('hover-left');
        e.classList.remove('hover-right');
        c
    })
})

