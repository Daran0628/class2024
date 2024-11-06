let todos = [];
let completedTodos = [];
let important = []
let pin = []
let todoId = 0;

const todoForm = document.getElementById('todo_form')
const newTodo = document.getElementById('add_todo')
const todoList = document.getElementById('todo_list')
const completedList = document.getElementById('completed_list')

window.addEventListener('DOMContentLoaded', function() {
  newTodo.focus()
})

todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); //기본동작 제거
  let addText = newTodo.value;

  newTodo.focus()
  newTodo.value = ''

  // addTask(addText);
  addTodo(addText) //data 처리
})

function addTodo(txt) { //id, text, completed
  todoId++;
  const todo = {
    id: todoId,
    text: txt,
    completed: false
  }
  todos.push(todo)

  renderTodos() //DOM으로 화면 출력
}

function renderTodos() {
  //input을 입력할 때마다 todos 배열의 갯수만큼 li를 생성
  // 기존의 내용은 삭제
  todoList.innerHTML = '';
  completedList.innerHTML = '';

  todos.forEach(todo => {
    const listItem = document.createElement('li')

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = todo.text;
    taskText.readOnly = true;

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="ri-edit-2-line"></i>'

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>'

    listItem.appendChild(checkbox)
    listItem.appendChild(taskText)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    // todoList.appendChild(listItem)
    if(todo.completed) {
      //완료목록
      completedList.appendChild(listItem)
    } else {
      //기본 목록
      todoList.appendChild(listItem)
    }

    //delete
    deleteButton.addEventListener('click', function() {
      deleteTodo(todo.id);
      renderTodos()
    })

    //checkbox
    checkbox.addEventListener('change', function() {
      completionTodo(todo.id)
    })

    //edit
    editButton.addEventListener('click',function() {
      if(taskText.readOnly) {
        taskText.readOnly = false;
        this.innerHTML = '<i class="ri-save-line"></i>' //save
      } else {
        taskText.readOnly = true;
        this.innerHTML = '<i class="ri-edit-2-line"></i>' //수정
        editTodo(todo.id,taskText.value)
      }
    })
  })
}

function editTodo(id, newTxt) {
  todos = todos.map(function(todo) {
    if(todo.id === id) {
      todo.text = newTxt
    }
    return todo
  })
  renderTodos()
}

function completionTodo(id) {
  todos = todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
      if(todo.completed) { //true => completedTodos 로
        completedTodos.push(todo)
      } else { //false 변경, completedTodos에서 제외
        completedTodos = completedTodos.filter(item => item.id !== id)
      }
    }
    return todo;
  })
  renderTodos()
  console.log('completed ', completedTodos);
  console.log('todos ', todos);
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
}


function addTask(txt) { //DOM으로만 처리한 로직
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskText = document.createElement('input');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  checkbox.type = 'checkbox';
  taskText.type = 'text';
  taskText.value = txt;
  taskText.readOnly = true;
  editButton.innerHTML = '<i class="ri-edit-2-line"></i>'
  deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>'

  todoList.appendChild(listItem)
  listItem.appendChild(checkbox)
  listItem.appendChild(taskText)
  listItem.appendChild(editButton)
  listItem.appendChild(deleteButton)

  //edit 버튼
  editButton.addEventListener('click', function() {
    // taskText를 수정할 수 => readOnly
    // 자신의 innerText를 변경 => save / edit
    // taskText.readOnly

    if(taskText.readOnly) {
      taskText.readOnly = false;
      this.innerHTML = '<i class="ri-save-line"></i>'
    } else {
      taskText.readOnly = true;
      this.innerHTML = '<i class="ri-edit-2-line"></i>'
    }
  })
  //checkbox 버튼
  checkbox.addEventListener('change',function() {
    if(checkbox.checked) {
      taskText.classList.add('checked')
      completedList.appendChild(listItem)
    } else {
      taskText.classList.remove('checked')
      todoList.appendChild(listItem)
    }
  })

  //delete 버튼
  deleteButton.addEventListener('click', function() {
    listItem.remove()
  })
}

let a = [1,2,3,4,5]
a = a.map(function(item) {
  if(item === 2) {
    item = 10
  }
  return item
})
console.log('a ', a); //4, 5,6,7,8

let d1 = new Date(2024, 8, 2, 17, 32, 0)
let now = new Date()
let diffSec = now - d1
let second = diffSec / (1000 * 60 * 60)
console.log(second);

const btn = document.querySelector('.btn')

btn.addEventListener('click', function(

  ))

  console.log('hello');