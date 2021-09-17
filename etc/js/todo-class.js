class ToDoClass {
  constructor() {
    this.tasks = [
      { task : 'Javascript 공부', isDone : false},
      { task : '저녁 약속 (19:00 서점 앞)', isDone : false},
      { task : '요가 가기', isDone : false}
    ];

    
    this.getTasks();

    this.addEventListener();
  }

  addEventListener() {
    document.querySelector("#addTask").addEventListener("keypress", event => {
      if(event.code === 13) {
        this.addTask(event.target.value);
        event.target.value = "";
      }
    });
  }

  toggleTaskStatus(index) {
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.getTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.getTasks();
  }

  addTaskClick() {
    let target = document.querySelector("#addTask");
    this.addTask(target.value);
    target.value = "";
  }

  addTask(task) {
    let newTask = {
      task,
      isComplete : false,
    };

    let parent = document.querySelector("#addTask").parentElement;
    if (task = "") {
      parent.classList.add("has-error");
    }
    else {
      parent.classList.remove("has-error");
      parent.classList.add("has-success");
      this.tasks.push(newTask);
      this.getTasks();
    }
  }

  insertHtml(task, index) {
    return `
      <li> 
        <div>
        <label><input id="toggleTask" type="checkbox" onChange="item.toggleTask(${index})" value="" ${task.isComplete ? "checked" : " "}></label>
        </div>
        <div class="${task.isComplete ? 'complete' : ' '}">${task.task}</div>
        <div onClick="item.deleteTask(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon">delete</i></div>
      </li>
    `;
  }

getTasks() {
  let taskHtml = this.tasks.reduce((html, task, index) => html += this.insertHtml(task, index), '');
  document.querySelector("#itemList").innerHTML = taskHtml;
}

}


let todo;
window.addEventListener("load", () => {
  todo = new ToDoClass();
});

