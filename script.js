const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function changeHeaderBackground(color) {
  const header = document.querySelector(".header");
  if (header) {
    header.style.background = color;
  }
}

swiper.on('slideChange', function () {
  const index = swiper.realIndex;

  if (index === 1) {
    changeHeaderBackground("#ADB0B0");
  } else if (index === 2) {
    changeHeaderBackground("#30A357");
  } else if (index === 3) {
    changeHeaderBackground("#F24F4F");
  } else {
    changeHeaderBackground("linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)");
  }
});
