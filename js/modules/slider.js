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
        current = current + i < 0 ? total : current + i > total ? 0 : current + i;
        let widthInt = +width.slice(0, -2);
        console.log(widthInt);
        offset += i * widthInt;

        if (offset > widthInt * (slides.length - 1)) {
            offset = 0;

        } else if (offset < 0) {
            offset = widthInt * (slides.length - 1);

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




    console.log(slides);


    sliderInner.addEventListener('mousedown',(e)=>{
        change(-1);
    })


}

export default slider