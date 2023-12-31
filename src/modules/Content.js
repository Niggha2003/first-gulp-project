function content_banner(props = {type: "default",}) {
    const contentBanner = document.createElement('div');
    contentBanner.className = 'Content__banner';

    contentBanner.innerHTML = `
        <span muted>
            <svg  xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g id="Frame 10821" clip-path="url(#clip0_71_1170)">
                    <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1.35355 0.521447C1.15829 0.326184 0.841709 0.326184 0.646447 0.521447C0.451184 0.716709 0.451184 1.03329 0.646447 1.22855L3.19926 3.78136H1.46075C1.04043 3.78136 0.699694 4.1221 0.699694 4.54242V6.95242C0.699694 7.37274 1.04043 7.71348 1.46075 7.71348H3.45945L5.86945 10.1235C6.34889 10.6029 7.16865 10.2634 7.16865 9.58533V7.75076L10.7069 11.289C10.9021 11.4843 11.2187 11.4843 11.414 11.289C11.6093 11.0937 11.6093 10.7771 11.414 10.5819L1.35355 0.521447ZM6.4076 6.98971L3.85154 4.43365C3.73411 4.50423 3.59875 4.54242 3.45945 4.54242H1.46075V6.95242H3.45945C3.66129 6.95242 3.85487 7.03261 3.99759 7.17533L6.4076 9.58533L6.4076 6.98971ZM6.4076 1.90951L6.4076 4.66419L7.16865 5.44902V1.90951C7.16865 1.23148 6.34889 0.891921 5.86945 1.37136L4.52158 2.71923L5.05145 3.26566L6.4076 1.90951ZM8.34939 6.66665L8.90431 7.23892C9.74159 5.87122 9.11231 4.47607 8.6708 3.92418C8.53951 3.76007 8.30005 3.73346 8.13594 3.86475C7.97184 3.99604 7.94523 4.2355 8.07651 4.39961C8.39597 4.79893 8.80481 5.72917 8.34939 6.66665ZM9.69245 8.05169L10.2523 8.62905C11.7295 5.87156 10.6973 3.52583 9.96311 2.37207C9.85029 2.19476 9.61509 2.1425 9.43778 2.25533C9.26048 2.36816 9.20821 2.60335 9.32104 2.78066C9.96302 3.78948 10.8204 5.73038 9.69245 8.05169Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_71_1170">
                        <rect width="12" height="12" fill="white" transform="translate(0.5 0.375)"/>
                    </clipPath>
                </defs>
            </svg>
        </span>
        <span unmuted>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clip-path="url(#clip0_71_1014)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00082 1.4818C6.48035 1.00227 7.30027 1.3419 7.30027 2.02005V9.69734C7.30027 10.3755 6.48035 10.7151 6.00082 10.2356L3.59036 7.82512H1.59128C1.17088 7.82512 0.830078 7.48432 0.830078 7.06392V4.65346C0.830078 4.23306 1.17088 3.89226 1.59128 3.89226H3.59036L6.00082 1.4818ZM6.53907 2.02005L4.12861 4.43051C3.98585 4.57326 3.79224 4.65346 3.59036 4.65346H1.59128V7.06392H3.59036C3.79224 7.06392 3.98585 7.14412 4.12861 7.28687L6.53907 9.69734L6.53907 2.02005ZM9.56983 2.36593C9.74717 2.25308 9.98241 2.30536 10.0953 2.4827C10.8731 3.70497 11.9852 6.26472 10.0953 9.23469C9.98241 9.41203 9.74717 9.4643 9.56983 9.35145C9.39249 9.2386 9.34021 9.00336 9.45307 8.82602C11.1153 6.21386 10.1554 3.99498 9.45307 2.89137C9.34021 2.71403 9.39249 2.47879 9.56983 2.36593ZM8.26774 3.97566C8.43188 3.84435 8.67139 3.87097 8.8027 4.0351C9.28011 4.63187 9.97701 6.21439 8.8027 7.68228C8.67139 7.84642 8.43188 7.87303 8.26774 7.74172C8.1036 7.61041 8.07699 7.3709 8.2083 7.20677C9.06385 6.13733 8.57666 4.97108 8.2083 4.51062C8.07699 4.34648 8.1036 4.10697 8.26774 3.97566Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_71_1014">
                    <rect width="12" height="12" fill="white" transform="translate(0.5 0.375)"/>
                </clipPath>
                </defs>
            </svg>
        </span>
        ${props.type === "video"? `
            <span skip>
                Skip
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M4.50466 9.50235C4.37694 9.50309 4.2519 9.46578 4.14547 9.39517C4.03904 9.32457 3.95604 9.22387 3.90707 9.10592C3.85809 8.98796 3.84535 8.85809 3.87047 8.73286C3.89559 8.60764 3.95744 8.49273 4.04812 8.40279L7.45609 5.00126L4.04812 1.59972C3.94278 1.47671 3.88774 1.31848 3.89399 1.15665C3.90024 0.994816 3.96732 0.841303 4.08184 0.726786C4.19636 0.612269 4.34987 0.545183 4.5117 0.538932C4.67353 0.532681 4.83176 0.587727 4.95477 0.693069L8.81285 4.55115C8.93261 4.67162 8.99983 4.8346 8.99983 5.00447C8.99983 5.17435 8.93261 5.33732 8.81285 5.45779L4.95477 9.31587C4.835 9.43466 4.67335 9.50163 4.50466 9.50235Z" fill="white"/>
                    <path d="M0.646752 9.50237C0.519034 9.50311 0.393988 9.4658 0.287557 9.3952C0.181126 9.3246 0.0981313 9.2239 0.049155 9.10594C0.000178832 8.98798 -0.0125602 8.85811 0.0125621 8.73289C0.0376844 8.60766 0.0995298 8.49276 0.190213 8.40282L3.59818 5.00128L0.190213 1.59974C0.0691316 1.47866 0.00110857 1.31444 0.00110857 1.1432C0.00110857 0.971967 0.0691316 0.807745 0.190213 0.686663C0.311295 0.565582 0.475517 0.497559 0.646752 0.497559C0.817988 0.497559 0.98221 0.565582 1.10329 0.686663L4.96137 4.54474C5.08113 4.66522 5.14835 4.82819 5.14835 4.99806C5.14835 5.16794 5.08113 5.33091 4.96137 5.45139L1.10329 9.30947C1.04374 9.37022 0.972722 9.41856 0.894355 9.45167C0.815987 9.48478 0.731828 9.50202 0.646752 9.50237Z" fill="white"/>
                </svg>
            </span>
        ` : ""}
    `
    return contentBanner;
}

function content_banner_mini() {

    const contentBannerMini = document.createElement('div');
    contentBannerMini.className = 'Content__banner--mini';

    return contentBannerMini;
}

function content_move() {

    const contentMove = document.createElement('div');
    contentMove.className = 'Content__move';

    contentMove.innerHTML = `
        <span move--up class="Content__move__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="0.4" y="13.6" width="13.2" height="13.2" rx="6.6" transform="rotate(-90 0.4 13.6)" fill="white"/>
                <path d="M10.5 8.38525L7.00007 4.88533L3.50014 8.38525" stroke="#0640D2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="0.4" y="13.6" width="13.2" height="13.2" rx="6.6" transform="rotate(-90 0.4 13.6)" stroke="#0640D2" stroke-width="0.8"/>
            </svg>
        </span>
        <span move--down class="Content__move__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="13.6" y="0.4" width="13.2" height="13.2" rx="6.6" transform="rotate(90 13.6 0.4)" fill="none"/>
                <path move__arrow--down d="M3.5 5.61475L6.99993 9.11467L10.4999 5.61475" stroke="#0640D2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="13.6" y="0.4" width="13.2" height="13.2" rx="6.6" transform="rotate(90 13.6 0.4)" stroke="#0640D2" stroke-width="0.8"/>
            </svg>
        </span>
    `

    return contentMove;
}

export const content = { content_banner, content_banner_mini, content_move} 