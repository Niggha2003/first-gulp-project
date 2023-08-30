import { content } from "../modules/Content.js";
import { content_item } from "../modules/ContentItem.js";

export default function Default(props = {items: [],}) {
    const normal = document.createElement('div');
    normal.className = 'Content';

    normal.appendChild(content.content_move());

    normal.appendChild(content.content_banner());
    
    const ctw = content_item.content_item_wrapper(props.items);

    normal.appendChild(ctw);

    return normal;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXlvdXQvRGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL21vZHVsZXMvQ29udGVudC5qc1wiO1xyXG5pbXBvcnQgeyBjb250ZW50X2l0ZW0gfSBmcm9tIFwiLi4vbW9kdWxlcy9Db250ZW50SXRlbS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmYXVsdChwcm9wcyA9IHtpdGVtczogW10sfSkge1xyXG4gICAgY29uc3Qgbm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3JtYWwuY2xhc3NOYW1lID0gJ0NvbnRlbnQnO1xyXG5cclxuICAgIG5vcm1hbC5hcHBlbmRDaGlsZChjb250ZW50LmNvbnRlbnRfbW92ZSgpKTtcclxuXHJcbiAgICBub3JtYWwuYXBwZW5kQ2hpbGQoY29udGVudC5jb250ZW50X2Jhbm5lcigpKTtcclxuICAgIFxyXG4gICAgY29uc3QgY3R3ID0gY29udGVudF9pdGVtLmNvbnRlbnRfaXRlbV93cmFwcGVyKHByb3BzLml0ZW1zKTtcclxuXHJcbiAgICBub3JtYWwuYXBwZW5kQ2hpbGQoY3R3KTtcclxuXHJcbiAgICByZXR1cm4gbm9ybWFsO1xyXG59Il0sImZpbGUiOiJsYXlvdXQvRGVmYXVsdC5qcyJ9
