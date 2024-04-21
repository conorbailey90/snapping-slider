const slider = document.querySelector('.slider__inner');
const panels = [...document.querySelectorAll('.panel')];

let isMobile = /Mobi/.test(window.navigator.userAgent);
console.log(isMobile)

if(!isMobile){
    let sliderGrabbed = false;
    let index = 0;
    let mouseMovement = 0;

    slider.addEventListener('mousedown', () => {
        sliderGrabbed = true;
        slider.style.cursor = 'grabbing'
    });

    slider.addEventListener('mouseup', () => {
        if(mouseMovement > 50 && index > 0) index--;
        if(mouseMovement < -50 && index < panels.length - 2) index++;
        console.log(index)
        mouseMovement = 0;
        sliderGrabbed = false;
        slider.style.cursor = 'grab';
        slider.parentElement.style.scrollBehavior = 'smooth';
        slider.parentElement.scrollLeft = (index * panels[0].getBoundingClientRect().width) + (index * 10);

        setTimeout(() => {
            slider.parentElement.style.scrollBehavior = 'auto';

        }, 500)

    })

    slider.addEventListener('mousemove', (e) =>{
        if(sliderGrabbed){
            mouseMovement += e.movementX;
            slider.parentElement.scrollLeft -= e.movementX
        }
    })
}else{
    slider.parentElement.style.overflow = 'scroll'
}