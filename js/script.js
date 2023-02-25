import slider from "./modules/slider";
import $ from'jquery'


const sliderSettings = {
        wrapper: '.slides-wrapper',
        slide: '.slide-wrapper',
        field: '.inner-slides-wrapper',
        container: '.wrapper',
        content: [],
        orienation: 'horizontal',

}

fetch('https://item-value5.appspot.com/ItemValue?i=1&id=MisterRuslanchik&app=730&ts=1677257605&key=6ecd6dc2cf96ce108f3bc4d90015208689da5e23')
.then((response)=> response.data)
.then((data)=>{
        console.log(data);
})



slider(sliderSettings);