// module1.js

const name = "John";
const age = 25;

// document.body.innerHTML = `<h1>${name}</h1>`;
// 모듈로 사용되는 js 파일에는 다른 실행문은 작성하지 말 것

export default age;
// 여럿을 내보내거나, 하나만 내보내더라도 하나의 목적을 가지지 않았다면 default 가 아니라 {} 방식으로

//default 내보내기는 하나만 내보내거나, 내보낼 자료(특히, 함수)의 목적을 명확하게하기 위해 모듈 파일은 하나만 사용하는 것을 선호

//export 방식에 따라 import 방식도 달라짐
