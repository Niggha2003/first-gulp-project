function BigSwipe(props = {items: [],}) {
    const bigSwipe = document.createElement('div');
    bigSwipe.className = 'Content';

    bigSwipe.appendChild(content_banner());
    
    const ctw = content_item_wrapper(props.items, 'swipe--big');

    bigSwipe.appendChild(ctw);

    return bigSwipe;

}
