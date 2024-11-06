// 연습 : 회원관리 로직
// 1. 이름과 연락처를 입력 받음
// 2. 기본 리스트로 나열
// 3. 그룹(select 태그, 가족 / 친구 / 직장)으로 분류 (; 그룹 스타일 각각 다르게)
//    * 그룹 추가
// 4. 분류된 항목 각각의 리스트로 변경 (예: 완료 목록)
// 5. 삭제 가능 버튼

// *** 과일 가게, 상품명, 가격, 분류()

const clientInput = document.getElementById("clientInput");
const addName = document.getElementById("addName");
const addTel1 = document.getElementById("tel_1");
const addTel2 = document.getElementById("tel_2");

const clientList = document.getElementById("clientList");
const groupList = document.getElementById("groupList");

const famList = document.getElementsByClassName("family");
const frndList = document.getElementsByClassName("friends");
const cowList = document.getElementsByClassName("coworkers");
const cmmnList = document.getElementsByClassName("common");

window.addEventListener("DOMContentLoaded", function () {
  addName.focus();
});

clientInput.addEventListener("submit", function (n) {
  n.preventDefault(); // 기본동작 제거

  //   addName.focus();
  //   addName.value = "";

  let clientName = addName.value;
  let clientTel1 = addTel1.value;
  let clientTel2 = addTel2.value;

  const clientInfo = `${clientName} ${clientTel1} ${clientTel2} `;

  addInfo(clientInfo);
});

const $option = document.getElementsByTagName("option");

function addInfo(clientInfo) {
  const listItem = document.createElement("li");
  const group = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");

  option1.value = "unselected";
  option1.innerHTML = "기본 그룹";
  option2.value = "family";
  option2.innerHTML = "가족";
  option3.value = "friends";
  option3.innerHTML = "친구";
  option4.value = "coworkers";
  option4.innerHTML = "직장";

  clientList.appendChild(listItem);
  listItem.innerText = clientInfo;
  listItem.appendChild(group);
  group.appendChild(option1);
  group.appendChild(option2);
  group.appendChild(option3);
  group.appendChild(option4);

  // 그룹별 이동

  group.addEventListener("change", function () {
    console.log("worked");

    let opts = this.options;
    let indx = this.selectedIndex;
    let optVal = opts[indx].value;

    if (optVal == "family") {
    } else {
    }
  });
}
