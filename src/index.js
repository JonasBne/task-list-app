// Import bootstrap
import 'bootstrap';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './css/custom.scss';

// Import fontawesome icons
import '@fortawesome/fontawesome-free/css/all.css';
import isTableElement from "@popperjs/core/lib/dom-utils/isTableElement";

// Define UI variables

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const newTaskBtn = document.getElementById("submit-task-btn");
const deleteTasksBtn = document.getElementById("delete-tasks-btn");
const filter = document.getElementById("filter");

// Load all event listeners
    // todo: add seperate functions to app.js and export and import them here
loadAllEventListeners();

// Event listeners

function loadAllEventListeners() {
    // Add task
    newTaskBtn.addEventListener("click", addNewTask);
    // Remove task
    taskList.addEventListener("click", removeTask);
    // Remove all tasks
    deleteTasksBtn.addEventListener("click", removeAllTasks);
    // Filter tasks
    filter.addEventListener("input", filterTasks);
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
        listItem.className = "list-group-item list-group-item-light my-2";
        // Create text node and append to list item
        listItem.appendChild(document.createTextNode(taskInput.value));
        // Create icon
        const icon = document.createElement("i");
        // Add class
        icon.className = "fa fa-trash mx-4";
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

// Remove task

function removeTask(event) {
    // Only remove in case icon was clicked
    if (event.target.classList.contains("fa-trash")) {
        // Get parent list item
        const listItemToRemove = event.target.closest("li");
        // Remove from DOM with confirmation
        if (confirm("Are you sure?")) {
            listItemToRemove.remove();
        }
    }
}

// Remove all tasks

function removeAllTasks(event) {
    if (confirm("Are you sure?") && taskList.getElementsByTagName("li").length > 0) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    } else {
        alert("No tasks to remove!")
    }

    // Prevent default behaviour (i.e. no page reloading)
    event.preventDefault();
}

// Filter tasks

function filterTasks() {
    // Store input filter
    const filteredTask = filter.value.toLowerCase();
    // Select all list items
        // Spread operator to turn HTML collection into an array
    const allTasks = [...document.getElementsByTagName("li")];
    // Get content of the array
    allTasks.forEach(task => {
        const item = task.innerText.toLowerCase();
        if (item.indexOf(filteredTask) !== -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })

}