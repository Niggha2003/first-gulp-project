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
