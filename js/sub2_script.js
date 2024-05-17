
$(document).ready(function () {
    var jbOffset = $('.scroll_icon').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {//여기 지정된 길이 이후부터 적용됩니다
            $('.scroll_icon').addClass("scroll_opacity");

        }
        else {
            $('.scroll_icon').removeClass("scroll_opacity");

        }
    });


    $("header").mouseenter(function () {
        $(".sub").stop().slideDown();
        $(".sub_bg").css({ "height": "200px", "background-color": " rgba(255, 255, 255, 0.9)" });

    });

    $("header").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_bg").css({ "height": "67px", "background-color": " rgba(255, 255, 255, 1)" });

    });

    /*  //bg1

    $(".bg1").click(function () {
        $(this).css({ "-webkit-text-fill-color": "#00DA58" });
    });

    $(".bg2, .bg3, .bg4").click(function () {
        $(".bg1").css({ "-webkit-text-fill-color": "transparent" });
    });

    // $(".bg1").hover(function () {
    //   $(".bg1").css({ "-webkit-text-fill-color": "#00DA58" })
    // }, function () {
    //   $(".bg1").css({ "-webkit-text-fill-color": "transparent" })
    // });

    //bg2
    $(".bg2").click(function () {
        $(this).css({ "-webkit-text-fill-color": "#ff9b96" });

    });

    $(".bg1, .bg3, .bg4").click(function () {
        $(".bg2").css({ "-webkit-text-fill-color": "transparent" });
    });

    //bg3
    $(".bg3").click(function () {
        $(this).css({ "-webkit-text-fill-color": "#ffe169" });
    });

    $(".bg1, .bg2, .bg4").click(function () {
        $(".bg3").css({ "-webkit-text-fill-color": "transparent" });
    });

    //bg4
    $(".bg4").click(function () {
        $(this).css({ "-webkit-text-fill-color": "#1a8ffa" });

    });
    $(".bg1, .bg2, .bg3").click(function () {
        $(".bg4").css({ "-webkit-text-fill-color": "transparent" });
    });
  */



});//기본구조 끝 