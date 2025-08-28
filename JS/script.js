

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
const bottomBtn = document.querySelector(".bottom-plus-btn")


const taskArray = [];

document.addEventListener('DOMContentLoaded', function() {
    taskBox.classList.add("hidden");
})

sidebarBtn.addEventListener("click", event => {
    sidebar.classList.toggle("collapsed");
})

createTask.addEventListener("click", event => {
    emptyWorkspace.classList.add("hidden");
    taskBox.classList.remove("hidden");
})

form.addEventListener("submit", event => {
    event.preventDefault();
    addTask(event);
    console.log("Task Added!");
})

function addTask(event) {
    console.log("addTask fired!");

    const newTask = titleInput.value.trim();

    if(newTask === "") {
        console.log("Please enter a task");
        return;
    }

     //console.clear();

    taskArray.push(newTask);

    const taskList = document.createElement('li');
    taskList.className = "task-list";

    taskList.innerHTML = `
        <div class="task-row">
            <div class="task-item"> 
            <input type="checkbox" id="checkbox">
            <p class="taskTitle"></p>
            </div>
            <button id="options-btn"><i class="fa-solid fa-ellipsis"></i></button> 
        </div>
    `;

    
    taskList.querySelector(".taskTitle").textContent = newTask;

    taskContainer.appendChild(taskList);

    form.reset();
    
    taskBox.classList.add("hidden");

    console.log(taskArray);

};

bottomBtn.addEventListener("click", event => {
    taskBox.classList.remove("hidden");
})