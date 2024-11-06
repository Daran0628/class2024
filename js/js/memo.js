const colorNames = [
  "DarkSeaGreen",
  "Khaki",
  "LightPink",
  "MediumPurple",
  "BurlyWood",
  "Thistle",
  "PowderBlue",
  "LightGreen",
];

const $memoList = document.querySelector("#memoList ul");
const $btnAddBoard = document.getElementById("btnAddBoard");
const $addBoard = document.querySelector(".addBoard");
const $btnAddMemo = document.getElementById("btnAddMemo");
const $memoInput = document.getElementById("memoInput");
const $memoContainer = document.getElementById("memoContainer");
const memoHeader = `
<div class="memoHeader">
  <div class="colorList">
    <span class="color"></span>
    <span class="color"></span>
    <span class="color"></span>
  </div>
  <div class="btns">
    <button class="hideMemo"><i class="bar"></i></button>
    <button class="removeMemo"><i class="ri-delete-bin-line"></i></button>
  </div>
</div>
`;

$btnAddBoard.addEventListener("click", function () {
  $addBoard.style.display = "flex";
  $memoInput.focus();
});
$btnAddMemo.addEventListener("click", function () {
  let memo = $memoInput.value;
  // 입력 값이 없을 때 추가 버튼을 누르면 스티커 생성 안 되고, 경고창

  // if(memo === '') {
  //    alert('write memo')
  //    $memoInput.focus()
  //    return
  // }
  // sticker 생성
  const _sticker = document.createElement("div");
  const _memoOutput = document.createElement("div");
  _sticker.classList.add("sticker");
  _memoOutput.classList.add("memoOutput");

  colorIndex = colorIndex >= colorNames.length - 1 ? 0 : colorIndex + 1;
  _sticker.style.backgroundColor = colorNames[colorIndex];

  _sticker.innerHTML = memoHeader;
  _sticker.appendChild(_memoOutput);

  _memoOutput.innerText = memo;
  $memoContainer.appendChild(_sticker);

  // 컬러 span에 컬러 적용하는 함수, 함수를 따로 만들지 않고 직접 작성해도 됨
  color(_sticker);

  $memoInput.value = "";
  $memoInput.focus();

  // 1. li 요소를 생성해서 memoList의 ul의 자손으로 추가
  // 2. li에 텍스트로 value 값
  const li = document.createElement("li");
  li.innerText = memo;
  $memoList.appendChild("li");
});