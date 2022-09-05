const swiper = new Swiper(".programming-language", {
  slidesPerView: "auto",
  spaceBetween: 8,
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    992: {
      spaceBetween: 16,
    }
  }
});

// $(function() {
//   const elem = document.querySelector('input[name="formDate"]');
//   const datepicker = new Datepicker(elem, {
//     language: 'zh-TW',
//     buttonClass: 'btn',
//   });
// });