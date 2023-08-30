import BigSwipe from "../layout/bigSwipe.js";
import Slider from "../layout/slider.js";
import Swipes from "../layout/Swipes.js";
import { header } from "../modules/Header.js";
import { footer } from "../modules/Footer.js";


function Wrapper(props = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = "Wrapper";
    wrapper.style.width = props.width;

    if(props.pd) {
        wrapper.classList.add('ps12');
    }

    if(props.color) {
        wrapper.style.backgroundColor = props.color;
    }

    if(props.children === Swipes) {
        wrapper.classList.add('swipe');
        wrapper.appendChild(swipe_move())
    }

    if(props.children === BigSwipe) {
        wrapper.classList.add('swipe--big');
        wrapper.classList.add('swipe');
        wrapper.appendChild(swipe_move())
    }

    if(props.children === Slider) {
        wrapper.classList.add('slider');
        wrapper.classList.add('swipe');
        wrapper.appendChild(swipe_move())
    }

    wrapper.appendChild(header.dartLogo())
    wrapper.appendChild(header.Header())

    if(props.children) {
        wrapper.appendChild(props.children({items: props.items}));
    }
    
    wrapper.appendChild(footer.Footer())

    return wrapper;
}

function swipe_move() {
    const moveSwipe = document.createElement('div');
    moveSwipe.className = 'Wrapper__move__swipe';

    moveSwipe.innerHTML = `
        <div class="Wrapper__move__control red"></div>
        <div class="Wrapper__move__control"></div>
        <div class="Wrapper__move__control"></div>
        <div class="Wrapper__move__control"></div>
    `

    return moveSwipe;
}

export const wrapper = {Wrapper, swipe_move}

