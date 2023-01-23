import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
// you can export a function by 'export function () and import that function and its values here.'
// import '/src/js/explore.js' ;

//let exploreVal = localStorage.getItem('exploreUsage')
let exploreVal = 1;
let studyVal = 2;
let taskVal = 3;
let calendarVal = 4;

let myChart = document.getElementById("my-chart").getContext("2d");

let userChart = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: ["Explore", "Study", "Tasks", "Calendar"],
    datasets: [
      {
        label: "Stats",
        data: [exploreVal, studyVal, taskVal, calendarVal],
        backgroundColor: ["#ff4a02", "#6de1ea", "#ad01f8", "#ffa990"],
        borderWidth: 0.5,
        borderColor: "dddddd",
        hoverBorderWidth: 2,
        cutout: "90%",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
        align: "middle",
        // maxWidth: 50,
        borderRadius: 2,
      },
    },
  },
});
