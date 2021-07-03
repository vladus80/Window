'use strict';

const modal = () => {

    function bindModal(triggerEl, winPopupEl, closeEl) {
        triggerEl.addEventListener('click', (evt) => {
            evt.preventDefault();
            winPopupEl.style.display = "block";
            document.body.style.overflow="hidden";

        })

        closeEl.addEventListener('click', (e) => {

            winPopupEl.style.display = "none";
            document.body.style.overflow=""

        })

        window.addEventListener("keypress", ev => {
            console.log(ev);
            if(ev.code === "Escape"){

                winPopupEl.style.display = "none";
                document.body.style.overflow="";
                console.log("SSS")
            }

        })

    }

    const modalPopupEngineer = document.querySelector(".popup_engineer"),
            trigger = document.querySelector(".header_btn_wrap_block"),
            close = document.querySelector("#popup_close");
    bindModal(trigger,modalPopupEngineer, close);
}

export default modal;
