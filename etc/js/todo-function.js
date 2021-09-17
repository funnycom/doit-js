function ToDoTasks() {
  this.tasks = [
    { task : 'Javascript 공부', isDone : false},
    { task : '저녁 약속 (19:00 서점 앞)', isDone : false},
    { task : '요가 가기', isDone : false}
  ];

  this.displayTasks = function() {
    let taskForDisplay = this.tasks.reduce((html, task, index) => html += this.insertTask(task, index), '');
    document.querySelector("#taskList").innerHTML = taskForDisplay;
  };

  this.insertTask = function (task, index) {
    return `
      <li> 
        <div id="isDone" class="${task.isDone ? 'done' : ' '}" onClick="todo.toggleStatus(${index})">[완료]</div>
        <div class="${task.isDone ? 'done' : ' '}">${task.task}</div>
        <div id="isDelete" onClick="todo.deleteTask(${index})"><i id="deleteTask" data-id="${index}" class="delete-icon">delete</i></div>
      </li>
    `;
  };

  // this.getTask();
  // this.addTask();
  this.toggleStatus = function (index) {
    this.tasks[index].isDone = !this.tasks[index].isDone;
    this.displayTasks();
  };
  this.deleteTask = function (TaskIndex) {
    this.tasks.splice(TaskIndex, 1);
    this.displayTasks();
  };
}

let todo;
window.addEventListener("load", () => {
  todo = new ToDoTasks();
  todo.displayTasks();
});
