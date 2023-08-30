function handleMuteAndUnmute() {
    $(document).ready(function(){
        $("[muted]").hide();
        $("[unmuted]").click(() => {
            $("[muted]").show();
            $("[unmuted]").hide();
        });
        $("[muted]").click(() => {
            $("[muted]").hide();
            $("[unmuted]").show();
        });
        
    });
}

function handleArrowMoveClick() {
    $(document).ready(function(){
        $("[move--up]").click(() => {
            $("[move--up]").toggleClass("active")
        });
        $("[move--down]").click(() => {
            $("[move--down]").toggleClass("active")
        });
    });
}

function handleHideCoverBanner() {
    $(document).ready(function(){
        $("[skip]").click(() => {
            const coverBanner = document.querySelector(".slider .Content__banner");
            coverBanner.style.animation = ".3s ease-out disappear";
            setTimeout(() => {
                coverBanner.style.display = "none";
            },300)
        });
    });
}

function checkWrapperWidth() {
    const wrappers = document.querySelectorAll('.Wrapper');
    wrappers.forEach((wrapper) => {
        if(wrapper.clientWidth > 500) {
            const svg = wrapper.querySelector('.Header__info__icon > svg');
            const footer = wrapper.querySelector('.Footer');
    
            svg.style.height = "20px";
            svg.style.display = 'block';
            footer.style.textAlign = 'center';
        }
    })
}

handleHideCoverBanner();
handleMuteAndUnmute();
handleArrowMoveClick();

document.addEventListener('DOMContentLoaded',checkWrapperWidth); 