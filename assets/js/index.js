$('.top-slider').slick({
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.product-slider').slick({
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 2,
    autoplay: true,
    prevArrow: $('.prev-arrow'),
nextArrow: $('.next-arrow'),
//   prevArrow: ".prev-arrow",
//   nextArrow: ".next-arrow",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






// brand logo slider
$('.bramd-logo-alider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




// essential slider

$('.essential-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  prevArrow: $('.essential-prev-arrow'),
  nextArrow: $('.essential-next-arrow'),
  // prevArrow: false,
  // nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// slick slider


$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  // adaptiveHeight: true,
  infinite: true,
  // useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  prevArrow: $('.testimonial-prev-arrow'),
  nextArrow: $('.testimonial-next-arrow'),
});

$('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 400,
    fade: true,
    // focusOnSelect: false,
    infinite: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
     }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
   }
    }]
  });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

const closeMenu = document.querySelector(".close-menu")
const openMenu = document.querySelector(".menu-open")
const menu = document.querySelector(".mobile-menu-nav")


openMenu.addEventListener("click", () => {
menu.classList.add("active")
})
closeMenu.addEventListener("click", () => {
menu.classList.remove("active")
})
