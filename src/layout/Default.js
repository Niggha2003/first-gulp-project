function Default(props = {items: [],}) {
    const normal = document.createElement('div');
    normal.className = 'Content';

    normal.appendChild(content_move());

    normal.appendChild(content_banner());
    
    const ctw = content_item_wrapper(props.items);

    normal.appendChild(ctw);

    return normal;
}