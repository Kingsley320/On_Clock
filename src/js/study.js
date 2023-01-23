// variable declaration
let workSession = document.getElementById('work');
let breakSession = document.getElementById('break');
let audio = new Audio('./sounds/start.wav');

let workTime = 25;
let breakTime = 5;
let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
}

document.getElementById('start').addEventListener('click', ()=>{
    start()
})

// start timer
function start() {
 
    audio.play()
    //Instead of changing button, i change pointer events
    document.getElementById('start').style.pointerEvents = 'none';
    document.getElementById('start').style.opacity = '0.4';

    //Change label on click start
    document.getElementById('work').innerHTML = 'work';

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    let breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // change the painel
                    document.getElementById('work').innerHTML = 'break';
                    let audio = new Audio('sounds/pause.mps');
                    audio.play()
                    // console.log("hi")
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // change the painel
                    document.getElementById('work').innerHTML = 'work';
                }
            }
            seconds = 59;
        }
    }

    // start the countdown. 1000ms = 1second
    setInterval(timerFunction, 1000);
}