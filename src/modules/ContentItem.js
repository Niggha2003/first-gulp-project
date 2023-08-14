function ContentItem(props = { itemInfo: {},}, type = "default") {
    const contentItem = document.createElement('div');
    contentItem.className = `Content__item${type != "default"? "__swipe" : ""}`;

    contentItem.innerHTML = `
        <div class="item__info__title ${type === "swipe--big"? "" : "hide"}">
            ${props.itemInfo.title}
        </div>
        <div class="Content__item__image ${type === "swipe--big"? "hide" : ""}">
        </div>
        <div class="Content__item__info__wrapper">
            <div class="Content__item__image ${type === "swipe--big"? "" : "hide"}">
            </div>
            <div class="Content__item__info">
                <div class="item__info__title ${type === "swipe--big"? "hide" : ""}">
                    ${props.itemInfo.title}
                </div>
                <div class="item__info__description">
                    ${props.itemInfo.description}
                </div>
                <span class="item__info__link">
                    <a href="${props.itemInfo.link}">
                        xem thêm
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect width="12" height="12" fill="white"/>
                            <path d="M7.46875 8.99988L10.4687 5.99994L7.46875 3" stroke="#0640D2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.875 6.0625H1.53125" stroke="#0640D2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
    `

    return contentItem;
}

function content_item_wrapper(items, type = "default",) {
    const contentItemBox = document.createElement('div');
    contentItemBox.className = 'Content__item__box';

    const contentItemWrapper = document.createElement('div');
    contentItemWrapper.className = 'Content__item__wrapper';

    contentItemWrapper.style.width = (100 * items.length) + '%';
    console.log(contentItemWrapper.style.width);

    items.forEach(item => {
        contentItemWrapper.appendChild(ContentItem({itemInfo: item}, type));
    })

    if(type === 'slider') {
        contentItemBox.appendChild(content_control())
    }
    contentItemBox.appendChild(contentItemWrapper);

    return contentItemBox;
}



