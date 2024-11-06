let todos = [];
let completedTodos = [];
let important = [];
let pinned = [];
let todoId = 0;

const todoForm = document.getElementById("todo_form");
const newTodo = document.getElementById("add_todo");
const todoList = document.getElementById("todo_list");
const completedItem = document.getElementById("completed_list");

window.addEventListener("DOMContentLoaded", function () {
  newTodo.focus();
});

todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 기본동작 제거
  let addText = newTodo.value;

  newTodo.focus();
  newTodo.value = "";

  //   addTask(addText);
  addTodo(addText); // data 처리
});

function addTodo(txt) {
  // id, text, completed
  todoId++;
  const todo = {
    id: todoId,
    text: txt,
    completed: false,
  };
  todos.push(todo);

  renderTodos(); // DOM으로 화면 출력
}
// _배열의 갯수만큼 li을 재생성 (DOM으로만 만든 로직처럼 li를 누적할 수 없음)

function renderTodos() {
  // todos 배열의 갯수만큼 li를 생성
  // 기존의 내용은 삭제 + completed 도 삭제
  todoList.innerHTML = "";
  completedItem.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input"); // li 자손
    checkbox.type = "checkbox";

    const taskText = document.createElement("input"); // li 자손
    taskText.type = "text";
    taskText.value = todo.text;
    taskText.readOnly = true;

    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="ri-edit-2-line"></i>`;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="ri-delete-bin-line"></i>`;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    //  todoList.appendChild(listItem);
    if (todo.completed) {
      // 완료 목록
      completedItem.appendChild(listItem);
    } else {
      // 기본 목록
      todoList.appendChild(listItem);
    }

    // delete
    // delete
    deleteButton.addEventListener("click", function () {
      deleteTodo(todo.id);
      renderTodos();
    });

    // checkbox
    // checkbox
    // map(), completionTodo()
    checkbox.addEventListener("change", function () {
      completionTodo(todo.id);
    });

    // edit
    // edit
    editButton.addEventListener("click", function () {
      // taskText를 수정할 수 -> readOnly
      // editButton, 자신의 innerText를 변경 -> save / edit

      if (taskText.readOnly) {
        taskText.readOnly = false;
        this.innerHTML = '<i class="ri-save-line"></i>'; // save
      } else {
        taskText.readOnly = true;
        this.innerHTML = `<i class="ri-edit-2-line"></i>`; // edit
        editTodo(todo.id, taskText.value);
      }
    });
  });
}

function deleteTodo(id) {
  // filter() Method 사용
  todos = todos.filter((todo) => todo.id !== id);
}

function completionTodo(id) {
  // map() => completed : true (todo.id === id)
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      // completedTodos 로 이동 / 나머지는 todos로 보내줌

      if (todo.completed) {
        // true -> completedTodos로
        completedTodos.push(todo);
      } else {
        // 나머지는 원래 배열로 false -> true를 제외시킴
        completedTodos = completedTodos.filter((item) => item.id === id);
      }
    }
    return todo;
  });
  renderTodos();
}
function editTodo(id, newText) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.text = newText;
    }
    return todo;
  });
  renderTodos();
}

// function addTask(txt) { // DOM으로만 처리한 로직
//   const listItem = document.createElement("li");
//   const checkbox = document.createElement("input");
//   const taskText = document.createElement("input");
//   const editButton = document.createElement("button");
//   const deleteButton = document.createElement("button");

//   //   editButton.textContent = "버튼";
//   checkbox.type = "checkbox";
//   taskText.type = "text";
//   taskText.value = txt;
//   taskText.readOnly = true;

//   editButton.innerHTML = `<i class="ri-edit-2-line"></i>`;
//   deleteButton.innerHTML = `<i class="ri-delete-bin-line"></i>`;

//   todoList.appendChild(listItem);
//   listItem.appendChild(checkbox);
//   listItem.appendChild(taskText);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   // editButton
//   editButton.addEventListener("click", function () {
//     // taskText를 수정할 수 -> readOnly
//     // editButton, 자신의 innerText를 변경 -> save / edit

//     if (taskText.readOnly) {
//       taskText.readOnly = false;
//       this.innerHTML = '<i class="ri-save-line"></i>';
//     } else {
//       taskText.readOnly = true;
//       this.innerHTML = `<i class="ri-edit-2-line"></i>`;
//     }
//   });

//   // checkbox
//   checkbox.addEventListener("change", function () {
//     if (checkbox.checked) {
//       taskText.classList.add("checked");
//       completedItem.appendChild(listItem);
//     } else {
//       taskText.classList.remove("checked");
//       todoList.appendChild(listItem);
//     }
//   });

//   // deleteButton
//   deleteButton.addEventListener("click", function () {
//     listItem.remove();
//   });
// }
