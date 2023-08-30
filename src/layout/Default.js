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