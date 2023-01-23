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

//  Tasks logic
let addTask = document.getElementById("task");
let addBtn = document.getElementById("add");
let taskIndex;
let tasks = localStorage.getItem("taskDataBase") ? JSON.parse(localStorage.getItem("taskDataBase")) : [];


//clears input after add
const clearForm = () => {
  addTask.value = null;
}

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
    // addTask.style.borderColor = 'red';
    tasks[taskIndex] = aTask;
    taskIndex = null;
  }

  loadTasksData();
  modal.close();
  clearForm();
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
    <div data-indexdata="${index}" class="done bg-purple-200 w-80 h-16 rounded-xl border-b-4 border-ppurple flex justify-between">
      <h2 class="mt-4 ml-4 text-xl font-semibold" data-indexdata=${index}>${tasks[index]["task"]}</h2>
      <buton id="done" class="done w-7 h-7 mt-4 mr-6 rounded-2xl p-1 text-white bg-black hover:bg-ppurple grid place-content-center">
        <a href="#" indexdata=${index}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </a>
      </button>
    </div>
    `;
  }

  let taskList = document.getElementById("task-list");
  taskList.innerHTML = rows;

  var hours = 24;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
      localStorage.setItem('setupTime', now);
  } else {
      if(now-setupTime > hours*60*60*1000) {
          localStorage.getItem('taskDataBase').clear();
          localStorage.setItem('setupTime', now);
      }
  }
}

//LOOK. Just use the index of the buttons to delete the list
//Delete a record in the array
let doneBtn = document.querySelectorAll("div.done");
[...doneBtn].forEach((done) =>{
// for (let i = 0; i<doneArr.length; ++i){
  done.addEventListener("click", function() {
        let finalDelete = confirm("Mark As Completed?");

        // let ele = this.getAttribute("data-indexdata")
        // let element = document.querySelector("#done > a");
        // let deleteIndex = element.getAttribute('data-indexdata');
        // console.log(ele);

        if (finalDelete) {
          let element = document.querySelector("div.done");
          let deleteIndex = element.getAttribute('data-indexdata');
          console.log(deleteIndex)

          // Splice task
          tasks = tasks.splice(deleteIndex, 1);
          // localStorage.setItem("taskDataBase", JSON.stringify(tasks));
          console.log(tasks)
        
          //reload a new array without the deleted task
          localStorage.setItem("taskDataBase", JSON.stringify(tasks));
          // then reload the list
          loadTasksData();
        }

  });
  loadTasksData();
});
  

// })

    


  // let doneBtn = document.querySelectorAll("div.done");
  // [...doneBtn].forEach((done)=>{
  //   console.log(done);
  // })

 