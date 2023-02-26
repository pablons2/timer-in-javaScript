const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');


const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const btnResume = document.getElementById('btnResume');

let interval;
let minutes =0;
let seconds =0;
let milliseconds = 0;
let hour = 0;
let isPaused = false;

btnStart.addEventListener("click", startTime)
btnPause.addEventListener("click",pauseTime)
btnResume.addEventListener("click",resumeTime)
btnReset.addEventListener("click",resetTime)
function startTime(){
    interval = setInterval(() =>{
        if(!isPaused){
            milliseconds+=10

            if(milliseconds ===1000){
                seconds++;
                milliseconds =0;
            }
            if(seconds ===60){
                minutes++;
                seconds =0;
            }
            if(minutes ===60){
                hour++;
                minutes =0;
            }
            hourEl.textContent = formatTime(hour);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatmilliseconds(milliseconds);
        }
    }, 10 );
    btnStart.style.display = "none";
    btnPause.style.display = "block";
}
function pauseTime(){
    isPaused = true;
    btnPause.style.display="none";
    btnResume.style.display="block";
}
function resumeTime(){
    isPaused = false;
    btnPause.style.display="block";
    btnResume.style.display="none";
}

function resetTime(){
    
    clearInterval(interval);
    hour = 0;
    minutes =0;
    seconds =0;
    milliseconds = 0;

    hourEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent="00";
    millisecondsEl.textContent = "000";

    btnStart.style.display="block";
    btnPause.style.display="none";
    btnResume.style.display="none"
     
}
function formatTime(time){
    return time<10? `0${time}`:time;
}
function formatmilliseconds(time){
    return time<100? `${time}`.padStart(3,"0"):time; //converto o time em string
}