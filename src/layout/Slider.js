function Slider(props = {items: [],}) {
    const slider = document.createElement('div');
    slider.className = 'Content';

    slider.appendChild(content_banner({type: 'video'}));
    slider.appendChild(content_banner_mini());

    const ctw = content_item_wrapper(props.items, 'slider');

    slider.appendChild(ctw);

    return slider;
}

