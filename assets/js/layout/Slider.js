import { content } from "../modules/Content.js";
import { content_item } from "../modules/ContentItem.js";

export default function Slider(props = {items: [],}) {
    const slider = document.createElement('div');
    slider.className = 'Content';

    slider.appendChild(content.content_banner({type: 'video'}));
    slider.appendChild(content.content_banner_mini());

    const ctw = content_item.content_item_wrapper(props.items, 'slider');

    slider.appendChild(ctw);

    return slider;
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXlvdXQvU2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vbW9kdWxlcy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCB7IGNvbnRlbnRfaXRlbSB9IGZyb20gXCIuLi9tb2R1bGVzL0NvbnRlbnRJdGVtLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIocHJvcHMgPSB7aXRlbXM6IFtdLH0pIHtcclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2xpZGVyLmNsYXNzTmFtZSA9ICdDb250ZW50JztcclxuXHJcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoY29udGVudC5jb250ZW50X2Jhbm5lcih7dHlwZTogJ3ZpZGVvJ30pKTtcclxuICAgIHNsaWRlci5hcHBlbmRDaGlsZChjb250ZW50LmNvbnRlbnRfYmFubmVyX21pbmkoKSk7XHJcblxyXG4gICAgY29uc3QgY3R3ID0gY29udGVudF9pdGVtLmNvbnRlbnRfaXRlbV93cmFwcGVyKHByb3BzLml0ZW1zLCAnc2xpZGVyJyk7XHJcblxyXG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKGN0dyk7XHJcblxyXG4gICAgcmV0dXJuIHNsaWRlcjtcclxufVxyXG5cclxuIl0sImZpbGUiOiJsYXlvdXQvU2xpZGVyLmpzIn0=
