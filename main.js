import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



// Swiper 

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 2.8,
            spaceBetween: 24,
        },
    },
});
