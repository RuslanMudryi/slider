/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");




const sliderSettings = {
        wrapper: '.slides-wrapper',
        slide: '.slide-wrapper',
        field: '.inner-slides-wrapper',
        container: '.wrapper',
        content: [],
        orienation: 'horizontal',

}

;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderSettings);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map