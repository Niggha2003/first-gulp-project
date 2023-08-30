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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqc19maWxlcy9XcmFwcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaWdTd2lwZSBmcm9tIFwiLi4vbGF5b3V0L2JpZ1N3aXBlLmpzXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL2xheW91dC9zbGlkZXIuanNcIjtcclxuaW1wb3J0IFN3aXBlcyBmcm9tIFwiLi4vbGF5b3V0L1N3aXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9IZWFkZXIuanNcIjtcclxuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4uL21vZHVsZXMvRm9vdGVyLmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gV3JhcHBlcihwcm9wcyA9IHt9KSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwiV3JhcHBlclwiO1xyXG4gICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IHByb3BzLndpZHRoO1xyXG5cclxuICAgIGlmKHByb3BzLnBkKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwczEyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocHJvcHMuY29sb3IpIHtcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb3BzLmNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHByb3BzLmNoaWxkcmVuID09PSBTd2lwZXMpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3N3aXBlJyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzd2lwZV9tb3ZlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4gPT09IEJpZ1N3aXBlKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzd2lwZS0tYmlnJyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzd2lwZScpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3dpcGVfbW92ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHByb3BzLmNoaWxkcmVuID09PSBTbGlkZXIpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3dpcGUnKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHN3aXBlX21vdmUoKSlcclxuICAgIH1cclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlci5kYXJ0TG9nbygpKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIuSGVhZGVyKCkpXHJcblxyXG4gICAgaWYocHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb3BzLmNoaWxkcmVuKHtpdGVtczogcHJvcHMuaXRlbXN9KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9vdGVyLkZvb3RlcigpKVxyXG5cclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2lwZV9tb3ZlKCkge1xyXG4gICAgY29uc3QgbW92ZVN3aXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb3ZlU3dpcGUuY2xhc3NOYW1lID0gJ1dyYXBwZXJfX21vdmVfX3N3aXBlJztcclxuXHJcbiAgICBtb3ZlU3dpcGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJXcmFwcGVyX19tb3ZlX19jb250cm9sIHJlZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJXcmFwcGVyX19tb3ZlX19jb250cm9sXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIldyYXBwZXJfX21vdmVfX2NvbnRyb2xcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiV3JhcHBlcl9fbW92ZV9fY29udHJvbFwiPjwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIHJldHVybiBtb3ZlU3dpcGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0ge1dyYXBwZXIsIHN3aXBlX21vdmV9XHJcblxyXG4iXSwiZmlsZSI6ImpzX2ZpbGVzL1dyYXBwZXIuanMifQ==
