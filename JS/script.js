

const emptyWorkspace = document.querySelector(".empty-workspace");
const createTask = document.querySelector(".create-task-btn");
const sidebarBtn = document.querySelector("#sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const taskBox = document.querySelector(".task-box");
const taskDisplay = document.querySelector(".task-display");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const form = document.querySelector(".form");
const addNewTask = document.querySelector(".add-new-task-btn");
const taskContainer = document.querySelector(".task-container");

document.addEventListener('DOMContentLoaded', function() {
    taskBox.classList.add("hidden");
})

sidebarBtn.addEventListener("click", event => {
    container.classList.toggle("sidebar-collapsed");
})

createTask.addEventListener("click", event => {
    emptyWorkspace.classList.add("hidden");
    taskBox.classList.remove("hidden");
})

form.addEventListener("submit", event => {
    addTask(event);
    console.log("Task Added!");
})

function addTask(event) {
    event.preventDefault();

    const taskList = document.createElement('li');
    taskList.className = "task-list";

    taskList.innerHTML = `
        <div class="task-row">
            <div class="task-item"> 
            <input type="checkbox" >
            <span class="taskTitle"></span>
            </div>
            <button><i class="fa-solid fa-ellipsis"></i></button> 
        </div>
    `;

    
    taskList.querySelector(".taskTitle").textContent = titleInput.value;

    taskContainer.appendChild(taskList);

    titleInput.value = "";

    taskBox.classList.add("hidden");
}