$(document).ready(function(){
  $('.category-slide').owlCarousel({
    loop: false,
    margin: 14,
    dots: false,
    nav: true,
    navText: ["<img src='./src/image/arrow-left.png'/>","<img src='./src/image/arrow-right.png'/>"],
    rewind: true,
    // autoplay: true,
    // autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items: 2
        },
        540:{
            items: 2
        },
        820:{
            items: 3
        },
        1440:{
            items: 4
        },
        1920:{
            items: 6
        }
    }
  })
})


const swiperThumbs = new Swiper('.product-info__slide-thumbs', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 12,
    loop: false,
});
const swiper = new Swiper('.product-info__slide-large', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 12,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbs
    }
});


$('.product-info__detail-icons').click(function(){
    $(this).next('.product-info__detail-text').slideToggle();
    $(this).parent('.product-info__detail-collapsible').toggleClass('product-info__detail-collapsible--active');
})