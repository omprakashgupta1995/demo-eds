import Swiper from './swiper-bundle.min.js';

export default function decorate(blocks) {
  const createSwiperWrapperDiv = document.createElement('div');
  createSwiperWrapperDiv.classList.add('swiper-wrapper');
  const swiperMainChild = blocks.children;
  Array.from(swiperMainChild).forEach((eachSwiper) => {
    eachSwiper.classList.add('swiper-slide');
    createSwiperWrapperDiv.append(eachSwiper);
  });
  const createPaginationDiv = document.createElement('div');
  createPaginationDiv.classList.add('swiper-pagination');
  blocks.append(createSwiperWrapperDiv);
  blocks.append(createPaginationDiv);
  blocks.innerHTML += '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
  Swiper(blocks, {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
