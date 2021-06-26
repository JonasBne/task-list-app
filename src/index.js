// Import bootstrap
import 'bootstrap';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './css/custom.scss';

// Import fontawesome icons
import '@fortawesome/fontawesome-free/css/all.css';

// Define UI variables

const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const newTaskBtn = document.getElementById("submit-task-btn");
const deleteTasksBtn = document.getElementById("delete-tasks-btn");
const filter = document.getElementById("filter");

// Import function

import {loadAllEventListeners} from "./js/app";

// Load all event listeners

loadAllEventListeners();

export {taskInput, taskList, newTaskBtn, deleteTasksBtn, filter};