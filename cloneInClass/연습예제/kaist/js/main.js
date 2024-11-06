// * main.js를 head 태그에 연결한 경우 body 요소가 생성 전이라 js가 실행되지 않으므로 아래 3가지 방법 중 하나를 이용해 연결

// window.onload = function () {//js 실행문}  >>> js
// $(document).ready(function() {//jus 실행문}) >>> jQuery
// script 태그에 defer 속성을 추가

/* pop up */
$("#popup").draggable();
$("#popup").hide(); //문서 완성 후 삭제
$(".btn_popup_close").click(function () {
  $("#popup").hide();
});

/* header lang */

// $(".lang_wrap button").click(function () {
//     $(".lang_wrap ul").css({
//       display: "flex",
//       opacity: "0.5",
//     })
//     $('.lang_wrap button i').css({
//       transform: 'rotate(180deg)',
//     })
$(".lang_wrap button").click(function () {
  $(".lang_wrap button, .lang_wrap ul").toggleClass("open");
});

/* header allmenu */
$(".btn_allmenu_open").click(function () {
  $(".allmenu_popup").css("display", "flex");
  $("html, body").css("overflow", "hidden");
});

$(".btn_allmenu_close").click(function () {
  $(".allmenu_popup").hide();
  $("html, body").css("overflow", "auto");
});
