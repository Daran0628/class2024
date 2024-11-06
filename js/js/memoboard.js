// 메모 저장을 누르면 작성자 이름과 메모 내용이 메모 보드에 div로 생성 됨
//

let memoBoard = [];
let memoId = 0;

const date = new Date();
const yy = date.getFullYear();
const mth = date.getMonth() + 1;
const mm = mth <= 10 ? "0" + mth : "";
const day = date.getDay();
const dd = day < 10 ? "0" + day : "";

const $memoForm = document.getElementById("memo_form");
const $writerName = document.getElementById("writer_name");
const $content = document.getElementById("content");
const $memoBoard = document.getElementById("memo_board");

window.addEventListener("DOMContentLoaded", function () {
  $writerName.focus();
});

$memoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 기본동작 제거
  let writer = $writerName.value;
  let content = $content.value;

  //   console.log(writer, content);

  $writerName.focus();
  $writerName.value = "";
  $content.value = "";

  saveMemo(writer, content);
});

function saveMemo(name, text) {
  memoId++;
  const memoPg = {
    id: memoId,
    writer: name,
    content: text,
  };
  memoBoard.push(memoPg);

  //   console.log(memoBoard);

  pinOnBoard();
}

function pinOnBoard() {
  $memoBoard.innerHTML = ``;

  memoBoard.forEach((memoPg) => {
    const _divElm = document.createElement("div");

    const _pWriter = document.createElement("p");
    const _pContent = document.createElement("p");
    const _sElm = document.createElement("span");
    const _btnEdit = document.createElement("button");
    const _btnDelete = document.createElement("button");

    //   const _inputElm = document.createElement("textarea");
    //   _inputElm = ;

    _pWriter.innerText = `작성자 : ${memoPg.writer}`;
    _pContent.innerText = memoPg.content;
    _sElm.innerText = `${yy} - ${mm} - ${dd}`;
    _btnEdit.innerHTML = `<i class="ri-edit-2-line"></i>`;
    _btnDelete.innerHTML = `<i class="ri-delete-bin-line"></i>`;

    _divElm.appendChild(_pWriter);
    _divElm.appendChild(_pContent);
    _divElm.appendChild(_sElm);
    _divElm.appendChild(_btnEdit);
    _divElm.appendChild(_btnDelete);

    $memoBoard.appendChild(_divElm);

    // edit
    // edit

    _btnEdit.addEventListener("click", function () {
      this.innerHTML = '<i class="ri-save-line"></i>';

      // this.innerHTML = `<i class="ri-edit-2-line"></i>`;
    });
  });
  console.log(memoBoard);
}
