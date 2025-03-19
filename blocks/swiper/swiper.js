import Swiper from './swiper-bundle.min.js';

export default function decorate(block) {
  // block.classList.add('swiper')
  const swiperWrapper = document.createElement('div');
  const paginationWarpper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });
  block.append(swiperWrapper);

  const config = {
    // Optional parameters
    direction: block.classList.contains('vertical') ? 'vertical' : '',
    loop: block.classList.contains('loop'),
    autoplay: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  };

  if (block.classList.contains('pagination')) {
    config.pagination = paginationWarpper;
  }
  if (block.classList.contains('three-side')) {
    config.pagination = paginationWarpper;
  }
  Swiper(block, config);
}
