function Swipes(props = {items: [],}) {
    const swipes = document.createElement('div');
    swipes.className = 'Content';

    swipes.appendChild(content_banner());
    
    const ctw = content_item_wrapper(props.items, 'swipe');

    swipes.appendChild(ctw);

    return swipes;
}

