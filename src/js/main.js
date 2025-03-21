// $(document).ready(function(){
//   $('.category-slide').owlCarousel({
//     loop: false,
//     margin: 14,
//     dots: false,
//     nav: true,
//     navText: ["<img src='./src/image/Arrow-left.png'/>","<img src='./src/image/Arrow-right.png'/>"],
//     rewind: true,
//     // autoplay: true,
//     // autoplayTimeout: 4000,
//     smartSpeed: 1000,
//     responsive:{
//         0:{
//             items: 2
//         },
//         540:{
//             items: 2
//         },
//         820:{
//             items: 3
//         },
//         1440:{
//             items: 4
//         },
//         1920:{
//             items: 6
//         }
//     }
//   })
// })


// const swiperThumbs = new Swiper('.product-info__slide-thumbs', {
//     speed: 400,
//     slidesPerView: 3,
//     spaceBetween: 12,
//     loop: false,
// });
// const swiper = new Swiper('.product-info__slide-large', {
//     speed: 400,
//     slidesPerView: 1,
//     spaceBetween: 12,
//     loop: false,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiperThumbs
//     }
// });


// $('.product-info__detail-icons').click(function(){
//     $(this).next('.product-info__detail-text').slideToggle();
//     $(this).parent('.product-info__detail-collapsible').toggleClass('product-info__detail-collapsible--active');
// })



document.addEventListener("DOMContentLoaded", function () {
    function changeScreen(){
        const elements = document.querySelectorAll(".review__content-img");
        const bodyWidth = document.body.offsetWidth;
        const widthPaddingLarge = (bodyWidth - 1632)/2;
        const widthPaddingSmall = 14;
        let widthPadding = bodyWidth > 1600 ? widthPaddingLarge : widthPaddingSmall;
        console.log("bodyWidth:", bodyWidth, "=> widthPadding:", widthPadding);
        elements.forEach((element, index) => {
            const content = element.querySelector(".review__content-des"); 
    
            const image = element.querySelector("img");
            const imageWidth = image.offsetWidth; 
                
            console.log(`width của ảnh: ${index + 1}: ${imageWidth}px`);
    
            const offsetLeft = element.offsetLeft + imageWidth + widthPadding;
            // const offsetRight = bodyWidth - offsetLeft - imageWidth;
            // console.log("offsetRight: " + offsetRight);
            const contentWidth = content.offsetWidth;
            const overWidth = offsetLeft + contentWidth - bodyWidth;
    
            console.log(`Phần tử thứ ${index + 1}: widthPadding + offsetLeft + imageWidth = ${offsetLeft}px`);
    
            if (offsetLeft + contentWidth >= bodyWidth) {
                element.classList.add("active");
                element.style.setProperty("--overWidth", `${overWidth + 30}px`);
                console.log(`Phần tử thứ ${index + 1}: ${offsetLeft} + ${contentWidth}px = ${offsetLeft + contentWidth + "px"} vượt quá body (${bodyWidth}px) là ${overWidth}px`);
            } else {
                console.log(`Phần tử thứ ${index + 1}: ${offsetLeft} + ${contentWidth}px = ${offsetLeft + contentWidth + "px"} nằm trong body (${bodyWidth}px)`);
            }
        });
    }
    

    changeScreen();
    window.addEventListener("resize", changeScreen);
});
