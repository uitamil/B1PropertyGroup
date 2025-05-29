(function ($) {
  "use strict";

  // Sticky Header Js

  function sticky_header_js() {
    var windowOn = $(window);

  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 400) {
      $("#header-sticky").removeClass("header-sticky");
    } else {
      $("#header-sticky").addClass("header-sticky");
    }
  });
   
     //Header Search Form
  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Offcanvas menu
  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overlay").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overlay").on("click", function () {
    $(".extra-info,.offcanvas-overlay").removeClass("active");
  });


  // data-backround

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // magnific popup

  $(".video-play-btn").magnificPopup({
    type: "iframe",
  });

  // Metis Menu

  $("#mobile-menu").metisMenu();

  $("#hamburger").on("click", function () {
    $(".mobile-nav").addClass("show");
    $(".overlay").addClass("active");
  });

  $(".close-nav").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });
    
}

 sticky_header_js()

  // Hero Area Slider
  function nx_hero_homepage_slider()
  {
    
  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    smartSpeed: 2000,
    slideSpeed: 600,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
      },
      1100: {
        items: 1,
      },
    },
  });

}
  // Client Slider

  $(".client-wrap").owlCarousel({
    loop: true,
    items: 5,
    dots: true,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: false,
        dots: false,
      },
      1100: {
        items: 5,
        nav: false,
        dots: true,
      },
    },
  });

  // Testimonial # 01
  function Testimonial_01() {
    

  $(".testimonial-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideSpeed: 300,
    margin: 30,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },

      575: {
        items: 1,
        nav: false,
      },

      767: {
        items: 2,
        nav: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        loop: true,
      },
    },
  });

    // Testimonial # 03

    $(".testimonial-wrapper").owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],    
    });
  }

  // Project Slider
  function project_sliderv1()
  {
    

  $(".project-slider").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideSpeed: 300,
    margin: 30,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },

      575: {
        items: 1,
        nav: false,
      },

      767: {
        items: 2,
        nav: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        loop: true,
      },
    },
  });

  $(".project-slider-2").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: true,
    loop: false,
    autoplay: true,
    responsiveClass: true,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        dots: true,
      },

      990: {
        items: 3,
        dots: false,
      },
      1200: {
        items: 2,
        dots: false,
      },
    },
  });

  }
  // Blog Carousel
  function blog_carousel() {
  
  $(".blog-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 40,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      1200: {
        items: 1,
        nav: false,
        dots: true,
      },

      990: {
        items: 3,
        nav: false,
        dots: true,
      },

      767: {
        items: 2,
        nav: false,
        dots: true,
      },

      575: {
        items: 2,
        nav: false,
        dots: true,
      },

      0: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });

}
  // Feature Slider
  function Future_service_slider() {
  
  $(".feature_item").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });

  // Service Slider

  $(".service-slider").owlCarousel({
    items: 1,
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },

      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        nav: false,
        dots: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        dots: false,
        loop: true,
      },
    },
  });
}


  //Progress Bar JS
  function skill_bar() {
  
  $("#bar1").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });
}

  //jQuery Animation
  new WOW().init();

  // Nice select
  $("select").niceSelect();

  // Pure Counter

	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});
  

  // Active Class

  $(".main-menu ul > li > ul li a").on("mouseover", function () {
    $(".main-menu ul > li > ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Odometer js

  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });


  // Masonry Filter

  function project_sliderv2() {
    $(window).on("load", function () {
    var e = $(".project-filter"),
      a = $("#menu-filter");
    e.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    }),
      a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return (
          a.find("a").removeClass("active"),
          $(this).addClass("active"),
          e.isotope({
            filter: o,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: !1,
            },
          }),
          !1
        );
      });
  });

 }

  // Contact Form

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response == "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response == "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($("#loader").length) {
      $("#loader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });

  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();





  
  // elementor fronted view
	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hgeader-01.default",sticky_header_js
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/Testimonial-widget-v1.default",Testimonial_01
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/skill-bar-widget.default",skill_bar
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero-widget.default",nx_hero_homepage_slider
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/service-slider.default",Future_service_slider
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/v2-project.default",project_sliderv1
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/project-widget-v1.default",project_sliderv2
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/project-widget-v1.default",project_sliderv1
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/Post-Slider.default",blog_carousel
		);
	});



})(window.jQuery);
