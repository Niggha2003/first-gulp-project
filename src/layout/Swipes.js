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

