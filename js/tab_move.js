$(function () {
  //페이지 이동 코드
  //같은 페이지 내에서 동작하게 하는 코드
  $(".gnb> li:nth-child(2)> .sub> li").click(function () {
    var indexNo = $(this).index();
    $(".store_tabs li").removeClass("active");
    $(".store_tabs li").eq(indexNo).addClass("active");
    $(".product_content").hide();
    var activeTab2 = $(".store_tabs li.active").find("span").attr("data");
    $(activeTab2).fadeIn();
    return false;
  });
  $(".gnb li:nth-child(2) a").click(function () {
    var indexNo = $(this).index();
    $(".store_tabs li").removeClass("active");
    $(".store_tabs li").eq(indexNo).addClass("active");
    $(".product_content").hide();
    var activeTab2 = $(".store_tabs li.active").find("span").attr("data");
    $(activeTab2).fadeIn();
    return false;
  });


  var location = window.location.hash;
  var tab_arr = [];
  $(".store_tabs li span").each(function (index, element) {
    tab_arr.push($(this).attr("data"));
  });


  var numb = jQuery.inArray(location, tab_arr)
  $('.store_tabs li').removeClass("active");
  $('.store_tabs li').eq(numb).addClass("active");
  $(".product_content").hide();
  $('.product_container').find(location).show();

  return false;
});