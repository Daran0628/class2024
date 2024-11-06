// const swiper = new Swiper(".swiper-container", {
//   // direction: 'horizontal',
//   autoplay: true,
//   loop: true,
//   navigation: {
//     nextEl: ".ox_box button",
//   },
// });

// let total = $(".swiper-slide").length;
// let current = 1;
// $(".total").text(total);
// $(".ox_box button").click(function () {
//   // O, X 클릭 시 페이지 증가
//   current = current >= total ? 1 : current + 1;
//   $(".current").text(current);
// });

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: ".ox_box button",
  },
  pagination: {
    el: ".swiper-container .pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 15000,
  },
  allowTouchMove: false,
});

// 정답 1.X 2.X 3.O 4.X 5.O 6.O 7.X 8.X 9.X 10.O
// ex) FFTTFFFTFFT f:7 t:4 40점

// o가 정답인 문제 3, 5, 6, 10
// x가 정답인 문제 1, 2, 4, 7, 8, 9

// O가 정답인 문제일 때
// .btn_O > T
// .btn_X > F
// .btn_P > F

// X가 정답인 문제일 때
// .btn_O > F
// .btn_X > T
// .btn_P > F

// $(".swiper-slide").index() ->  질문 페이지의 인덱스 넘버 get
// -> 지금 보이고 있는 슬라이드의 위치값을 구하고
// -> 슬라이드가 위치값이 변할 때마다 클래스를 .nowShowing 더하도록 함
// -> .nowShowing 클래스가 붙은 슬라이드의 인덱스 넘버를 조건으로 버튼을 눌렀을 때 플레이어의 답안 값을 저장 (o가 정답일 때 / x가 정답일 때 각 함수 만들기)
// -> 같은 슬라이드가 보이는 상태에서는 몇번을 눌러도 1번만 값이 쓰여야 함
// -> 플레이어의 답안을 점수로 변환 배열에 모은 후 최종 점수 계산 후 반환
