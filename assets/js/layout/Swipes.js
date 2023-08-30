import { content } from "../modules/Content.js";
import { content_item } from "../modules/ContentItem.js";

export default function Swipes(props = {items: [],}) {
    const swipes = document.createElement('div');
    swipes.className = 'Content';

    swipes.appendChild(content.content_banner());
    
    const ctw = content_item.content_item_wrapper(props.items, 'swipe');

    swipes.appendChild(ctw);

    return swipes;
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXlvdXQvU3dpcGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vbW9kdWxlcy9Db250ZW50LmpzXCI7XHJcbmltcG9ydCB7IGNvbnRlbnRfaXRlbSB9IGZyb20gXCIuLi9tb2R1bGVzL0NvbnRlbnRJdGVtLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2lwZXMocHJvcHMgPSB7aXRlbXM6IFtdLH0pIHtcclxuICAgIGNvbnN0IHN3aXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3dpcGVzLmNsYXNzTmFtZSA9ICdDb250ZW50JztcclxuXHJcbiAgICBzd2lwZXMuYXBwZW5kQ2hpbGQoY29udGVudC5jb250ZW50X2Jhbm5lcigpKTtcclxuICAgIFxyXG4gICAgY29uc3QgY3R3ID0gY29udGVudF9pdGVtLmNvbnRlbnRfaXRlbV93cmFwcGVyKHByb3BzLml0ZW1zLCAnc3dpcGUnKTtcclxuXHJcbiAgICBzd2lwZXMuYXBwZW5kQ2hpbGQoY3R3KTtcclxuXHJcbiAgICByZXR1cm4gc3dpcGVzO1xyXG59XHJcblxyXG4iXSwiZmlsZSI6ImxheW91dC9Td2lwZXMuanMifQ==
