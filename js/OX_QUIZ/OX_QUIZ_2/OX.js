// const swiper = new Swiper('.swiper-container',{
//   autoplay: {delay: 15000},
//   loop: false,
//   allowTouchMove : false,

//   navigation: {
//     nextEl: '.ox_box button',
//   },
//   pagination: {
//     el: '.swiper-container .pagination',
//     type: 'custom',
//     renderCustom: function (swiper, current, total) {
//       // 첫 번째 슬라이드를 제외하고 슬라이드 수를 계산
//       if (current === 1) {
//         current = 1; // 첫 번째 슬라이드는 항상 1로 유지
//       } else {
//         current = current - 1; // 나머지 슬라이드는 1을 빼서 슬라이드 수 맞추기
//       }
//       return '<span class="current">' + current + '</span> / <span class="total">10</span>';
//     }
//   },
// })

// // 슬라이드가 이동할 때마다 이벤트 처리
// swiper.on('slideChange', function () {
//   let currentSlideIndex = swiper.realIndex + 1; // 실제 슬라이드 인덱스 가져오기
//   if (currentSlideIndex === 11) {
//     swiper.autoplay.stop(); // 마지막 슬라이드 이후 처음으로 이동
//   }
// });

// // 타이머 함수 설정
// function startTimer() {
//   $('.progress_bar').css('animation', 'none'); // 애니메이션 초기화
//   setTimeout(() => {
//     swiper.slideNext(); // 다음 슬라이드로 이동
//     startTimer(); // 타이머 재시작
//   }, 15000); // 15초 후에 타이머 실행
//   setTimeout(() => {
//     $('.progress_bar').css('animation', 'timer 15s linear infinite'); // 애니메이션 재시작
//   }, 0); // 애니메이션 즉시 재시작
// }

// // 초기화 시 타이머 시작
// startTimer();


// let total = $('.swiper-slide').length - 1
// let current = 1;
// $('.total').text(total)
// $('.ox_box button').click(function() { // O, X 클릭 시 페이지 증가
//   current = (current >= total) ? 1 : current + 1
//   $('.current').text(current)
// })


// let btn_O = $('.btn_O')
// let btn_X = $('.btn_X')
// $('btn_O').click(function() {
//   let s = 10
//   this.score = score
//   if(btnO를 클릭하면) {
//     score + s
//   }
// })

// Swiper 초기화 설정
// const swiper = new Swiper('.swiper-container', {
//   autoplay: {
//     delay: 15000, // 15초 지연
//     disableOnInteraction: false, // 사용자가 인터랙션해도 자동 재생이 멈추지 않도록 설정
//   },
//   loop: false,
//   allowTouchMove: false,
//   navigation: {
//     nextEl: '.btn_P', // 다음 버튼을 올바르게 선택
//   },
//   pagination: {
//     el: '.swiper-container .pagination',
//     type: 'custom',
//     renderCustom: function (swiper, current, total) {
//       if (current === 1) {
//         current = 1; // 첫 번째 슬라이드는 항상 1로 유지
//       } else {
//         current = current - 1; // 나머지 슬라이드는 1을 빼서 슬라이드 수 맞추기
//       }
//       return '<span class="current">' + current + '</span> / <span class="total">10</span>';
//     }
//   },
// });

// // 타이머를 제어하는 함수
// function startTimer() {
//   $('.progress_bar').css('animation', 'none'); // 기존 애니메이션 초기화
//   setTimeout(() => {
//     swiper.slideNext(); // 다음 슬라이드로 이동
//     startTimer(); // 타이머 재시작
//   }, 15000); // 15초 후에 타이머 실행
//   setTimeout(() => {
//     $('.progress_bar').css('animation', 'timer 15s linear infinite'); // 애니메이션 재시작
//   }, 0); // 애니메이션 즉시 재시작
// }

// // 슬라이드 이동 시 이벤트 처리
// swiper.on('slideChange', function () {
//   let currentSlideIndex = swiper.realIndex + 1; // 실제 슬라이드 인덱스 가져오기
//   if (currentSlideIndex === 11) {
//     swiper.autoplay.stop(); // 마지막 슬라이드 이후 처음으로 이동
//   }
//   startTimer(); // 슬라이드 변경 시 타이머 리셋
// });

// // 초기화 시 타이머 시작
// startTimer();

$('.start').click(function() {
  $('.home').css('display', 'none')
  $('.play').css('display', 'block')
})

$('.btn_S').click(function() {
  $(this).css('display', 'none')
  $('.btn_Op').css('display', 'flex')
})

// Swiper 초기화
const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 15000, // 15초 지연
    disableOnInteraction: false, // 사용자가 인터랙션해도 자동 재생이 멈추지 않도록 설정
  },
  loop: false,
  allowTouchMove: false,
  navigation: {
    nextEl: '.ox_box button', // 다음 버튼을 올바르게 선택
  },
  pagination: {
    el: '.swiper-container .pagination',
    clickable: true, // 페이지네이션 클릭 가능하게 설정
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      if (current === 0) {
        current = 0; // 첫 번째 슬라이드는 항상 1로 유지
      } else {
        current = current - 1; // 나머지 슬라이드는 1을 빼서 슬라이드 수 맞추기
      }
      return '<span class="current">' + current + '</span> / <span class="total">' + (total - 1) + '</span>';
    }
  },
});

// 타이머를 제어하는 함수
function startTimer() {
  $('.progress_bar').css('animation', 'none'); // 기존 애니메이션 초기화
  setTimeout(() => {
    swiper.slideNext(); // 다음 슬라이드로 이동
    startTimer(); // 타이머 재시작
  }, 15000); // 15초 후에 타이머 실행
  setTimeout(() => {
    $('.progress_bar').css('animation', 'timer 15s linear infinite'); // 애니메이션 재시작
  }, 0); // 애니메이션 즉시 재시작
}

// 슬라이드 이동 시 이벤트 처리
swiper.on('slideChange', function () {
  let currentSlideIndex = swiper.realIndex + 1; // 실제 슬라이드 인덱스 가져오기
  if (currentSlideIndex === 11) {
    swiper.autoplay.stop(); // 마지막 슬라이드 이후 처음으로 이동
  }
  startTimer(); // 슬라이드 변경 시 타이머 리셋
});

// 초기화 시 타이머 시작
startTimer();

// 페이지네이션을 클릭할 때마다 슬라이드를 변경하고 타이머를 재실행하는 로직
swiper.pagina
