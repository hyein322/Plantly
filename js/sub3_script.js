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

    //처음들어갔을때 모습 만들기
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스(클릭한 li만 붙음. 내가 클릭한 부분에 들어갈 스타일을 따로 붙여준다.) 붙임
        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("span").attr("data");
        /*내가 방금 클릭한 li 안에있는 span태그의 data부분 안에 들어있는 id이름을 가져오는것.*/
        $(activeTab).fadeIn();
        /*위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다. 여기서 fadeIn대신에 show를 쓰면 번쩍번쩍한 느낌을 없앨 수 있다.*/
        return false;
    });

    $("ul.tabs li").mouseenter(function () {
        $(this).addClass("tab_bg");
    });
    $("ul.tabs li").mouseleave(function () {
        $(this).removeClass("tab_bg");
    });

    //qna
    $(".qna_box> ul> li").click(function () {
        $(this).children(".answ").slideToggle();
        $(this).siblings().children(".answ").slideUp();
    });

    $(".qna_box> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });

    //popup
    $(".event_info a").click(function () {
        $(".popup, .pop_back ").fadeIn();


        /*fadeIn대신에 show로 바꿀 수 있따.*/
    });
    $(".close span").click(function () {
        $(".popup, .pop_back ").fadeOut();
        /*fadeOut대신 hide 사용 가능*/
    });

});