import { content } from "../modules/Content.js";
import { content_item } from "../modules/ContentItem.js";

export default function BigSwipe(props = {items: [],}) {
    const bigSwipe = document.createElement('div');
    bigSwipe.className = 'Content';

    bigSwipe.appendChild(content.content_banner());
    
    const ctw = content_item.content_item_wrapper(props.items, 'swipe--big');

    bigSwipe.appendChild(ctw);

    return bigSwipe;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXlvdXQvQmlnU3dpcGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9tb2R1bGVzL0NvbnRlbnQuanNcIjtcclxuaW1wb3J0IHsgY29udGVudF9pdGVtIH0gZnJvbSBcIi4uL21vZHVsZXMvQ29udGVudEl0ZW0uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZ1N3aXBlKHByb3BzID0ge2l0ZW1zOiBbXSx9KSB7XHJcbiAgICBjb25zdCBiaWdTd2lwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmlnU3dpcGUuY2xhc3NOYW1lID0gJ0NvbnRlbnQnO1xyXG5cclxuICAgIGJpZ1N3aXBlLmFwcGVuZENoaWxkKGNvbnRlbnQuY29udGVudF9iYW5uZXIoKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGN0dyA9IGNvbnRlbnRfaXRlbS5jb250ZW50X2l0ZW1fd3JhcHBlcihwcm9wcy5pdGVtcywgJ3N3aXBlLS1iaWcnKTtcclxuXHJcbiAgICBiaWdTd2lwZS5hcHBlbmRDaGlsZChjdHcpO1xyXG5cclxuICAgIHJldHVybiBiaWdTd2lwZTtcclxufVxyXG4iXSwiZmlsZSI6ImxheW91dC9CaWdTd2lwZS5qcyJ9
