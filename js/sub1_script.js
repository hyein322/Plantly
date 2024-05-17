
//글자 타이핑 효과
const content = "Plant care is not difficult"
const typing_text = document.querySelector(".typing_text")
let index = 0;

function typing() {
    typing_text.textContent += content[index++];
    if (index > content.length) {
        typing_text.textContent = ""
        index = 0;
    }
}
setInterval(typing, 200)

//커서 깜빡거리는 효과
const target = document.querySelector("#dynamic");
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500)



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


    //eco 스와이퍼

    var swiper = new Swiper(".eco_swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,

    });


});//기본구조 끝 