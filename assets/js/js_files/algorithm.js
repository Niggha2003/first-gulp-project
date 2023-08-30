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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqc19maWxlcy9hbGdvcml0aG0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGFuZGxlTXV0ZUFuZFVubXV0ZSgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIlttdXRlZF1cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCJbdW5tdXRlZF1cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiW211dGVkXVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCJbdW5tdXRlZF1cIikuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCJbbXV0ZWRdXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgJChcIlttdXRlZF1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiW3VubXV0ZWRdXCIpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBcnJvd01vdmVDbGljaygpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIlttb3ZlLS11cF1cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiW21vdmUtLXVwXVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCJbbW92ZS0tZG93bl1cIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiW21vdmUtLWRvd25dXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSGlkZUNvdmVyQmFubmVyKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiW3NraXBdXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY292ZXJCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlciAuQ29udGVudF9fYmFubmVyXCIpO1xyXG4gICAgICAgICAgICBjb3ZlckJhbm5lci5zdHlsZS5hbmltYXRpb24gPSBcIi4zcyBlYXNlLW91dCBkaXNhcHBlYXJcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlckJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0sMzAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrV3JhcHBlcldpZHRoKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuV3JhcHBlcicpO1xyXG4gICAgd3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xyXG4gICAgICAgIGlmKHdyYXBwZXIuY2xpZW50V2lkdGggPiA1MDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuSGVhZGVyX19pbmZvX19pY29uID4gc3ZnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLkZvb3RlcicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN2Zy5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgICAgICAgc3ZnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBmb290ZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuaGFuZGxlSGlkZUNvdmVyQmFubmVyKCk7XHJcbmhhbmRsZU11dGVBbmRVbm11dGUoKTtcclxuaGFuZGxlQXJyb3dNb3ZlQ2xpY2soKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLGNoZWNrV3JhcHBlcldpZHRoKTsgIl0sImZpbGUiOiJqc19maWxlcy9hbGdvcml0aG0uanMifQ==
