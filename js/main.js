$(document).ready(function () {
  "use strict";

  // Responsive Sidevar Menu JS  Start Here

  (() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu
        .querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu
        .querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  })();

  // Responsive Sidevar Menu JS  End Here


  //jQuery Counter
  $(".counter").counterUp({
    time: 3000,
  });

  //preloader

  $(".car-slider").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true">',
      '<i class="fa fa-angle-right" aria-hidden="true">',
    ],
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // corporatereview Slider
  $(".review-area").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".client-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  //Testimonial Carousel
  $(".says_content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: "",
    nextArrow: "",
    dots: false,
    fade: true,
    asNavFor: ".says_info",
  });
  $(".says_info").slick({
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: ".says_content",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
    prevArrow: '<button class="slide-arrow slick-prev"></button>',
    nextArrow: '<button class="slide-arrow slick-next"></button>',
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


});
// video play 
$(".image-section a").magnificPopup({
  type: "iframe",
  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      "</div>",
    patterns: {
      youtube: {
        index: "youtube.com/",
        id: "v=",
        src: "http://www.youtube.com/embed/%id%?autoplay=1",
      },
    },
    srcAction: "iframe_src",
  },
});

// owl carouswel

$(".customer-slider").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  autoplay:true,
  autoplayTimeout: 2500,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  mouseDrag: true,
  touchDrag: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// owl carouswel

$(".team-wrapper").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// owl carouswel
//Portfolio Lightbox
  $('.gallery-box').magnificPopup({
    delegate: 'a.image',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
//Portfolio Lightbox


//Portfolio Lightbox