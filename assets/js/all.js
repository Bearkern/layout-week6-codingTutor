"use strict";

$(function () {
  var swiperProgramming = new Swiper(".programming-language", {
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
      992: {
        spaceBetween: 16
      }
    }
  });
  var swiperFeedback = new Swiper(".feedback-content", {
    cssMode: true,
    navigation: {
      nextEl: ".feedback-btn-next",
      prevEl: ".feedback-btn-prev"
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true
    }
  });
  var elem = document.querySelector('input[id="reservationDate"]');
  var datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-TW',
    buttonClass: 'btn'
  });
});
//# sourceMappingURL=all.js.map
