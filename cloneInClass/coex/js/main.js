/* main header */

$("header .header_dep1>li").hover(
  function () {
    $(this).children("ul").css("display", "flex");
  },
  function () {
    $(this).children("ul").hide();
  }
);

$(".search_btn_open").click(function () {
  $(this).hide();
  $(".search_btn_close").css("display", "block");
  $(".search_pop_up").css("display", "flex");
});
$(".search_btn_close").click(function () {
  $(this).hide();
  $(".search_btn_open").show();
  $(".search_pop_up").css("display", "none");
});

$(".up_continfo").click(function () {
  $(".contract_board").show();
  $(".notice_board").css("display", "none");
});

$(".up_notice").click(function () {
  $(".notice_board").show();
  $(".contract_board").css("display", "none");
});

$(".family_site_bar").click(function () {
  $(".fam_list_wrap").toggle();
  $(".fam_arrow").toggleClass("close");
});

$(".wall_left_bottom .media_sns_link ul li a");

/*** main > ongoing_event_wrap ***/

$(".event_box").hover(function () {
  $(this).toggleClass("hover");
  $(this).find(".event_info_contents").toggle();
});

$(".update_index .up_continfo").click(function () {
  $(this).addClass("current");
  $(this).siblings(".up_notice").removeClass("current");
});

$(".update_index .up_notice").click(function () {
  if ($(this).hasClass("current")) {
  } else {
    $(this).addClass("current");
    $(this).siblings(".up_continfo").removeClass("current");
  }
});
