/*메인 배너 슬라이드*/
var swiper = new Swiper(".mb_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

/*베스트 아이템 슬라이드*/
var swiper = new Swiper(".best_swiper", {
  /*slidesPerView: "auto",*/
  /*slidesPerView: 3,*/
  // spaceBetween: 150,
  slidesPerView: "auto",



  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

});

/*new 아이템 슬라이드*/
var swiper = new Swiper(".new_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

});

/*event 슬라이드*/
var swiper = new Swiper(".event_swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  loop: true,
});




$(document).ready(function () {
  var jbOffset = $('header').offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
      $('header').addClass("header_fixed");

    }
    else {
      $('header').removeClass("header_fixed");

    }
  });


  $("header").mouseenter(function () {
    $(".sub").stop().slideDown();
    $(".sub_bg").css({ "height": "200px", "background-color": " rgba(255, 255, 255, 1)" });


    /* $(this).css({
       "transition": "all 0.5s",
       "border-radius": "none"
     });*/

    /* $("header").stop().addClass("header_fixed");*/

  });

  $("header").mouseleave(function () {
    $(".sub").stop().slideUp();
    $(".sub_bg").css({ "height": "67px", "background-color": " rgba(255, 255, 255, 0.9)" });
    //$(this).css({ "transition": "all 5s", "border-radius": "100px" })
    /* $("header").stop().removeClass("header_fixed");*/
  });

  //커서

  /*
  $(document).mousemove(function (e) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
  
      $('.cusur').css({
        left: mouseX + "px",
        top: mouseY + "px"
      })
    })
  */

});//기본구조 끝



