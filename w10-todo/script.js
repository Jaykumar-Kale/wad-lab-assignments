// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
            ${task}
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

    list.appendChild(li);
  });
}

// Save to "server"
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task (CREATE)
function addTask() {
  let input = document.getElementById("taskInput");
  let value = input.value;

  if (value === "") return;

  tasks.push(value);

  saveTasks(); // AJAX-like save
  displayTasks();

  input.value = "";
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  displayTasks();
}

// Update task
function editTask(index) {
  let newTask = prompt("Edit task:", tasks[index]);

  if (newTask) {
    tasks[index] = newTask;

    saveTasks();
    displayTasks();
  }
}

// Initial load
displayTasks();
