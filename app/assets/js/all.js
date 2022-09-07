$(function() {
  const swiperProgramming = new Swiper(".programming-language", {
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
      992: {
        spaceBetween: 16,
      }
    }
  });

  const swiperFeedback = new Swiper(".feedback-content", {
    cssMode: true,
    navigation: {
      nextEl: ".feedback-btn-next",
      prevEl: ".feedback-btn-prev",
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true,
    },
  });

  const elem = document.querySelector('input[id="reservationDate"]');
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: 'zh-TW',
    buttonClass: 'btn',
  });
});
