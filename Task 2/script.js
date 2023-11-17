
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = taskInput.value;
  
    if (task !== "") {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  