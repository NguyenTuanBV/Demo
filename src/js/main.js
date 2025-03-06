$(document).ready(function(){
  $('.category-slide').owlCarousel({
    loop: false,
    margin: 14,
    dots: false,
    nav: true,
    navText: ["<img src='../src/image/arrow-left.png'/>","<img src='../src/image/arrow-right.png'/>"],
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


