// Слайдер
var swiper1 = new Swiper('.catalog__block-swiper-1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.catalog__block-arrows__next',
        prevEl: '.catalog__block-arrows__prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    },
    simulateTouch: false
});
var swiper2 = new Swiper('.catalog__block-swiper-2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.catalog__block-arrows__next-swiper2',
        prevEl: '.catalog__block-arrows__prev-swiper2',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    },
    simulateTouch: false
});
var swiper3 = new Swiper('.reviews-block__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.reviews-block__arrows-next',
        prevEl: '.reviews-block__arrows-prev',
    },
    simulateTouch: false
});
// Появление хедера при скролле
if (document.documentElement.clientWidth > 768) {
    window.onscroll = function showHeader() {

        var header = document.querySelector('.header');
        var body = document.querySelector('.body');

        if (window.pageYOffset > 200) {
            header.classList.add('header-fixed')
            body.classList.add('body-fixed')
        }
        else {
            header.classList.remove('header-fixed')
            body.classList.remove('body-fixed')
        }

    }
}
//Плавная прокрутка и подсветка активного пункта меню
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

'use strict';
const headerHeight = document.querySelector('.header').offsetHeight;

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - headerHeight + 2;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

class NavigationMenu {
    constructor(root) {
        this.root = root;
        this.links = null;
        this.cacheNodes();
        this.bindEvents();
    }

    cacheNodes() {
        this.links = this.root.querySelectorAll('.js-page-scroll');
    }

    bindEvents() {
        document.addEventListener('click', (event) => {
            const target = event.target;

            if (target.classList.contains('js-page-scroll')) {
                event.preventDefault();
                const id = target.hash;

                smoothScroll(id, 1000);
            }
        });
        if (document.documentElement.clientWidth > 768) {
            window.addEventListener("scroll", event => {
                let fromTop = window.scrollY + headerHeight;

                this.links.forEach(link => {
                    let section = document.querySelector(link.hash);

                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("header__nav-menu__item-link-active");
                    } else {
                        link.classList.remove("header__nav-menu__item-link-active");
                    }
                });
            });
        }
    }
}

const menuNode = document.querySelector('.js-nav-menu');
const Menu = new NavigationMenu(menuNode);
// Модальное окно "Заказать звонок"
$('#callback').click(function () {
    $('.header-modal').fadeIn();
});
$('#callback-mobile').click(function () {
    $('.header-modal').fadeIn();
});
$('#close').click(function () {
    $('.header-modal').fadeOut();
});
$('#thank-close').click(function () {
    $('.thank-modal').fadeOut();
});
// Меню для телефонов
var menuButton = document.querySelector('.header-menu__button');
var menu = document.querySelector('.header__nav');
var link1 = document.querySelector('#link1')
var link2 = document.querySelector('#link2')
var link3 = document.querySelector('#link3')
var link4 = document.querySelector('#link4')
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('header-menu__button-active');
    menu.classList.toggle('header__nav-active');
})
link1.addEventListener('click', function () {
    menuButton.classList.remove('header-menu__button-active');
    menu.classList.remove('header__nav-active');
})
link2.addEventListener('click', function () {
    menuButton.classList.remove('header-menu__button-active');
    menu.classList.remove('header__nav-active');
})
link3.addEventListener('click', function () {
    menuButton.classList.remove('header-menu__button-active');
    menu.classList.remove('header__nav-active');
})
link4.addEventListener('click', function () {
    menuButton.classList.remove('header-menu__button-active');
    menu.classList.remove('header__nav-active');
})
// Маска для поля ввода телефона
$("#modal_phonemask").mask("+7(999)999-99-99");
$("#footer_phonemask").mask("+7(999)999-99-99");
$("#mobile_phonemask").mask("+7(999)999-99-99");