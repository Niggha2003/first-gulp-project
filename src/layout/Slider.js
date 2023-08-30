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

