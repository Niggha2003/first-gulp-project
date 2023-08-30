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


function content_control() {
    const contentControl = document.createElement('div');
    contentControl.className = 'Content__control';

    contentControl.innerHTML = `
        <span class="Content__control--left">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M16.2825 18.7098C16.3737 18.6169 16.4461 18.5063 16.4955 18.3844C16.5449 18.2626 16.5703 18.1319 16.5703 17.9998C16.5703 17.8678 16.5449 17.7371 16.4955 17.6153C16.4461 17.4934 16.3737 17.3828 16.2825 17.2898L11.8263 12.7098C11.7351 12.6169 11.6627 12.5063 11.6133 12.3844C11.5639 12.2626 11.5385 12.1319 11.5385 11.9998C11.5385 11.8678 11.5639 11.7371 11.6133 11.6153C11.6627 11.4934 11.7351 11.3828 11.8263 11.2898L16.2825 6.70985C16.3737 6.61688 16.4461 6.50628 16.4955 6.38442C16.5449 6.26256 16.5703 6.13186 16.5703 5.99985C16.5703 5.86783 16.5449 5.73713 16.4955 5.61527C16.4461 5.49341 16.3737 5.38281 16.2825 5.28985C16.1002 5.1036 15.8536 4.99905 15.5966 4.99905C15.3395 4.99905 15.0929 5.1036 14.9106 5.28985L10.4447 9.87985C9.89807 10.4423 9.59104 11.2048 9.59104 11.9998C9.59104 12.7948 9.89807 13.5573 10.4447 14.1198L14.9106 18.7098C15.0929 18.8961 15.3395 19.0006 15.5966 19.0006C15.8536 19.0006 16.1002 18.8961 16.2825 18.7098Z" fill="#555555"/>
            </svg>
        </span>
        <span class="Content__control--right">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M8.71749 5.29015C8.6263 5.38312 8.55391 5.49372 8.50452 5.61557C8.45512 5.73743 8.42969 5.86814 8.42969 6.00015C8.42969 6.13216 8.45512 6.26287 8.50452 6.38473C8.55391 6.50659 8.6263 6.61719 8.71749 6.71015L13.1737 11.2902C13.2649 11.3831 13.3373 11.4937 13.3867 11.6156C13.4361 11.7374 13.4615 11.8681 13.4615 12.0002C13.4615 12.1322 13.4361 12.2629 13.3867 12.3847C13.3373 12.5066 13.2649 12.6172 13.1737 12.7102L8.71749 17.2902C8.6263 17.3831 8.55391 17.4937 8.50452 17.6156C8.45512 17.7374 8.42969 17.8681 8.42969 18.0002C8.42969 18.1322 8.45512 18.2629 8.50452 18.3847C8.55391 18.5066 8.6263 18.6172 8.71749 18.7102C8.89979 18.8964 9.14639 19.0009 9.40344 19.0009C9.66048 19.0009 9.90708 18.8964 10.0894 18.7102L14.5553 14.1202C15.1019 13.5577 15.409 12.7952 15.409 12.0002C15.409 11.2052 15.1019 10.4427 14.5553 9.88015L10.0894 5.29015C9.90708 5.1039 9.66048 4.99936 9.40344 4.99936C9.14639 4.99936 8.89979 5.1039 8.71749 5.29015Z" fill="#555555"/>
            </svg>
        </span>
    `

    return contentControl;
}

function content_item_wrapper(items, type = "default",) {
    const contentItemBox = document.createElement('div');
    contentItemBox.className = 'Content__item__box';

    const contentItemWrapper = document.createElement('div');
    contentItemWrapper.className = 'Content__item__wrapper';

    if(type != "default") {
        contentItemWrapper.style.width = (100 * items.length) + '%';
    }

    items.forEach(item => {
        contentItemWrapper.appendChild(ContentItem({itemInfo: item}, type));
    })

    if(type === 'slider') {
        contentItemBox.appendChild(content_control())
    }
    contentItemBox.appendChild(contentItemWrapper);

    return contentItemBox;
}

export const content_item = {ContentItem, content_item_wrapper}



