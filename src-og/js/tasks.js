// @unocss-include

const modal = document.getElementById("modal");
const openmodal = document.getElementById("open-modal");
const closemodal = document.getElementById("close-modal");

openmodal.addEventListener("click", () => {
  modal.showModal();
});
// closemodal.addEventListener('click', () => {
// modal.close();
// })

// Getting days date
var date = document.getElementById("date");
var today = new Date();
var month = today.getMonth();
var day = today.getDay();
var year = today.getFullYear();
var monthlist = [
  "January",
  "February",
  "March",
  "April ",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var weeklist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
date.innerText = weeklist[day] + ", " + monthlist[month] + "\n" + year + ".";
// alert(day);

//  Tasks logic
let doneBtn = document.getElementById("done");
let addTask = document.getElementById("task");
let addBtn = document.getElementById("add");
let taskIndex;
let tasks = [];

loadTasksData();
// Add task event
addBtn.addEventListener("click", () => {
  let aTask = {
    task: addTask.value,
  };

  if (taskIndex == null && addTask.value != "") {
    tasks.push(aTask);
    localStorage.setItem("taskDataBase", JSON.stringify(tasks));
  } else {
    tasks[taskIndex] = aTask;
    taskIndex = null;
  }

  loadTasksData();
  modal.close();
  clearForm();
});

//Delete a record in the array
let taskList = document.getElementById("task-list");
taskList.addEventListener("click", "done", () => {
  let finalDelete = confirm("Mark As Completed?");

  if (finalDelete) {
    // This gets index of task
    let deleteIndex = this.attr("indexData");

    // Splice task
    tasks.splice(deleteIndex, 1);

    //reload a new array without the deleted task
    localStorage.setItem("taskDatabase", JSON.stringify(tasks));
    // then reload the list
    loadTasksData();
  }
});

function loadTasksData() {
  // retrive data from the localstorage
  let taskData = localStorage.getItem("taskDataBase");
  if (taskData != null) {
    tasks = JSON.parse(taskData);
  }

  // console.log(taskData);
  let rows = "";
  for (let index = 0; index < tasks.length; index++) {
    rows += ` 
    <div class="bg-purple-200 w-80 h-16 rounded-xl border-b-4 border-ppurple flex justify-between ">
                <h2 class="mt-4 ml-4 text-xl font-semibold">${tasks[index]["task"]}</h2>
    <button id="done" class="w-7 h-7 mt-4 mr-6 rounded-2xl p-1 text-white bg-black hover:bg-ppurple grid place-content-center"><a href="#" indexData="${index}">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg></a>
    </button>
</div>
    `;
  }

  let taskList = document.getElementById("task-list");
  taskList.innerHTML = rows;
}

const clearForm = () => {
  addTask.value = null;
};
