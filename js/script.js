
document.addEventListener('DOMContentLoaded', function () {
// инициализация слайдера
var slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: false,
    interval: 5000,
    swipe: true,
});
let menuBurger = document.querySelector(".burger_head");
menuBurger.addEventListener("click", (e) => {
    let menuBody = document.querySelector(".nav__body");
    menuBody.classList.toggle("active");
})
  
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider');
      
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = function () {
        // перейдём к предыдущему слайду
        slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = function () {
        // перейдём к следующему слайду
        slider.next();
    }
          
});
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "flex";
}
       