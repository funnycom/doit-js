class ToDoClass {
  constructor() {
    this.tasks = [
      { task : 'HTML', isComplete : true },
      { task : 'CSS', isComplete : false },
      { task : 'Javascript', isComplete : false },
    ];

    
    this.loadTasks();

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
    this.loadTasks();
  }

  deleteTask(event, taskIndex) {
    event.preventDefault();
    this.tasks.splice(taskIndex, 1);
    this.loadTasks();
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
      this.loadTasks();
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

loadTasks() {
  let taskHtml = this.tasks.reduce((html, task, index) => html += this.insertHtml(task, index), '');
  document.querySelector("#itemList").innerHTML = taskHtml;
}

}


let todo;
window.addEventListener("load", () => {
  todo = new ToDoClass();
});

