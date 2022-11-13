// 웹 요소 가져오기
const todoInput = document.querySelector('#todo-input');   // 사용자 입력
const addButton = document.querySelector('#add-button');   // 추가 버튼
const todoList = document.querySelector('#todo-list');    // 투두 리스트

// 이벤트 처리
document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener('click', addTodo);  
todoList.addEventListener('click', manageTodo);

// 함수
function addTodo(e) {
  e.preventDefault();   //  기본 동작 취소

  // 입력 값을 가져와 새로운 소스로 추가
  // 테스트 코드
  // <div class="todo">
  //   <li class="todo-content">내용 </li>
  //   <button class="complete-button">완료</button>
  //   <button class="delete-button">삭제</button>
  // </div>  

  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-content');
  newDiv.appendChild(newTodo);  // 새로운 내용 추가

  saveToLocal(todoInput.value);  // 로컬 스토리지에 저장

  const completeButton = document.createElement('button');
  completeButton.innerText = '완료';
  completeButton.classList.add('complete-button');
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '삭제';
  deleteButton.classList.add('delete-button');
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);   // ul 요소의 자식 요소로 추가

  todoInput.value = "";   // 입력 창 초기화
}

function saveToLocal(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocal() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {  // todos 요소마다 반복
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo; // 로컬 스토리지의 값 표시
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);  

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button'); 
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);   // ul 요소의 자식 요소로 추가

    todoInput.value = "";   // 입력 창 초기화
  });
}

function manageTodo(e) {
  const whichButton = e.target.classList[0];  // 클릭한 부분의 class명 가져오기 
  if(whichButton === 'complete-button') {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle('completed');  // 내용 부분에 .completed 클래스 토글
  } else if(whichButton === 'delete-button') {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}

function removeLocal(todo) {
  let todos;     // 로컬 스토리지에서 가져온 할 일들
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {  
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const index = todos.indexOf(todo.children[0].innerText);  // 삭제할 할 일의 인덱스
  todos.splice(index, 1);    // index번째 요소 삭제
  localStorage.setItem('todos', JSON.stringify(todos));    // 변경된 todos 저장
}