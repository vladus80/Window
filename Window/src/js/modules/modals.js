'use strict';

// Переменная куда помещаем анонимную функцию
const modal = () => {

    // Функция где описываем логигу с модальным окно (открытие и закрытие)
    // triggerEl - селектор при клике на который  срабатывает обработчик (ссылка, кнопка и тп
    // winPopupEl - селектор модального окна
    // closeEl - селектор (кнопка и тп) которая закрывает окно
    function bindModal(triggerEl, winPopupEl, closeEl) {

        // Клик на триггер (ссылка, кнопка и тп.) - показываем модальное окно
        triggerEl.addEventListener('click', (evt) => {
            evt.preventDefault();
            winPopupEl.style.display = "block";
            document.body.style.overflow="hidden";
        })

        // Клик на крестик модального окно - закрываем модальное окно
        closeEl.addEventListener('click', (e) => {

            winPopupEl.style.display = "none";
            document.body.style.overflow="";
        })

        // Нажимаем на ESC - закрываем модальное окно
        document.addEventListener("keydown", ev => {
            if(ev.code === "Escape"){
                winPopupEl.style.display = "none";
                document.body.style.overflow="";
            }
        })

        // Клик на подложку - закрываем модальное окно
        winPopupEl.addEventListener("click", ev => {
           winPopupEl.style.display = "none";
        })
    }

    const modalPopupEngineer = document.querySelector(".popup_engineer"),
            trigger = document.querySelector(".header_btn_wrap_block"),
            close = document.querySelector("#popup_close");

    // Заполняем функцию реальными элементами
    bindModal(trigger,modalPopupEngineer, close);
}

// Экспортируем переменную куда записали всю логику по работе с модальным окном
export default modal;
