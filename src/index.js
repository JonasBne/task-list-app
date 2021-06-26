// Import bootstrap
import 'bootstrap';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './css/style.scss';

// Import fontawesome icons
import '@fortawesome/fontawesome-free/css/all.css';

// Define UI variables

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const newTaskBtn = document.getElementById("submit-task-btn");
const deleteTasksBtn = document.getElementById("delete-tasks-btn");

// Load all event listeners

loadAllEventListeners();

// Event listeners

function loadAllEventListeners() {
    // Add new task
    newTaskBtn.addEventListener("click", addNewTask);
}

// Add new task

function addNewTask(event) {
    // If value is not empty
    if (taskInput.value === "") {
        alert("Add a task before submitting!")
    } else {
        // Create list item
        const listItem = document.createElement("li");
        // Add class
        listItem.className = "list-group-item list-group-item-light my-2 d-flex justify-content-between";
        // Create text node and append to list item
        listItem.appendChild(document.createTextNode(taskInput.value));
        // Create icon
        const icon = document.createElement("i");
        // Add class
        icon.className = "fa fa-trash";
        // Append icon to list item
        listItem.appendChild(icon)
        // Append to unordered list
        taskList.appendChild(listItem);
    }

    // Clear input value
    taskInput.value = "";

    // Prevent default behaviour (i.e. no page reloading)
    event.preventDefault();
}