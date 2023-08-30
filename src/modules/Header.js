function Header() {

    const header = document.createElement('header');
    header.className = 'Header';
    
    header.innerHTML = `
        <div class="Header__info">
            <div class="Header__info__title">
                <div class="Header__info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="26" viewBox="0 0 6 26" fill="none">
                        <path d="M0 0H6V26H0V0Z" fill="#0640D2"/>
                    </svg>
                </div>
                <p>Tủ thuốc gia đình</p>
            </div>
            <a class="Header__info__logo">
                
            </a>
        </div>
    `
    return header;
}

function dartLogo() {
    const dartLogo = document.createElement('span');
    dartLogo.className = 'Wrapper__dart--logo';

    return dartLogo;
}

export const header = {Header, dartLogo}