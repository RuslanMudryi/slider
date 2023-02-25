import { enableScroll,disableScroll } from "../services/scrollControll";

function slider({
    wrapper,
    slide,
    field,
    container
}) {
    const sliderWrapper = document.querySelector(wrapper),
        slides = document.querySelectorAll(slide),
        sliderInner = document.querySelector(field),
        sliderContainer = document.querySelector(container),
        width = window.getComputedStyle(sliderContainer).width;


    let current = 0;
    let offset = 0;
    let total = slides.length;

    sliderInner.style.width = 100 * slides.length + '%';
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    const idicators = document.createElement("ol");
    idicators.classList.add('carousel-indicators');

    sliderWrapper.append(idicators);

    for (let i = 0; i < total; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i);
        idicators.append(dot);

    }
    activateDots(idicators);

    function change(i) {
        
        
        let widthInt = +width.slice(0, -2);
        console.log(widthInt);
        offset += i * widthInt;
        current += i;

        if (offset > widthInt * (slides.length - 1)) {
            offset = 0;
            current = 0;

        } else if (offset < 0) {
            offset = widthInt * (slides.length - 1);
            current = total-1
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;
        activateDots(idicators);
    }

    function activateDots(idicators) {
        idicators.childNodes.forEach(el => {
            console.log(el.getAttribute('data-slide-to'));
            if (el.getAttribute('data-slide-to') == current) {

                el.style.opacity = 1;
            } else {
                el.style.opacity = 0.5;
            }
        })
    }
    idicators.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            change(e.target.getAttribute('data-slide-to') - current)
        }
    })




    sliderInner.addEventListener('hover', (e) => {
        console.log('d');
    })

    sliderInner.addEventListener('wheel', (e) => {
        disableScroll();
        if (e.deltaY > 0)
            change(-1);
        else
            change(1);
    })

    sliderInner.addEventListener('mouseleave', (e)=>{
        enableScroll();
    })



}

export default slider