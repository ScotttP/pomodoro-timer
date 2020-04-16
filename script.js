let selectedSessionTimeValue = 25;
let selectedBreakTimeValue = 5;
let countDownTime = selectedSessionTimeValue * 60;
let intervalFunction;

const displayTimeCountdown = document.getElementById('timerContainer');
const playButtonFind= document.getElementById('play');
const pauseButtonFind= document.getElementById('pause');
const resetButtonFind= document.getElementById('reset');
const increaseSessionTime = document.getElementById('increaseSessionTime');
const increaseBreakTime = document.getElementById('increaseBreakTime');
const decreaseSessionTime = document.getElementById('decreaseSessionTime');
const decreaseBreakTime = document.getElementById('decreaseBreakTime');
const selectedSessionTime = document.getElementById('selectedSessionTime');
const selectedBreakTime = document.getElementById('selectedBreakTime');


const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

selectedSessionTime.innerText = selectedSessionTimeValue;
selectedBreakTime.innerText = selectedBreakTimeValue;
displayTimeCountdown.innerText = selectedSessionTime.innerText + ':00';

playButton.addEventListener('click', () =>{
   intervalFunction = setInterval(startCountDown,1000);

})

pauseButton.addEventListener('click', () => {
    pauseCountDown();
    
})

resetButton.addEventListener('click', () => {
    increaseSessionTime.disabled = false;
    decreaseSessionTime.disabled = false;
    clearInterval(intervalFunction);
    selectedSessionTime.innerText = selectedSessionTimeValue;
    selectedBreakTime.innerText = selectedBreakTimeValue;
    displayTimeCountdown.innerText = selectedSessionTime.innerText + ':00';
    
})

increaseSessionTime.addEventListener('click', () => {
    increaseOrDecreaseTime(increaseSessionTime.id);
})

increaseBreakTime.addEventListener('click', () => {
    increaseOrDecreaseTime(increaseBreakTime.id)
})

decreaseSessionTime.addEventListener('click', () => {
    increaseOrDecreaseTime(decreaseSessionTime.id);
})

decreaseBreakTime.addEventListener('click', () => {
    increaseOrDecreaseTime(decreaseBreakTime.id)
})

function startCountDown () {
    let minutes = Math.floor(countDownTime / 60);
    let seconds = countDownTime % 60;
    seconds = seconds < 10 ? '0' + seconds:seconds;

    displayTimeCountdown.innerText = `${minutes}:${seconds}`;

    countDownTime--;
    countDownTime = countDownTime < 0 ? 0 : countDownTime; 

    playButtonFind.disabled = true; 
    resetButtonFind.disabled = true;
    increaseSessionTime.disabled = true;
    increaseBreakTime.disabled = true;
    decreaseSessionTime.disabled = true;
    decreaseBreakTime.disabled = true;  
    
}

function pauseCountDown () {
    clearInterval(intervalFunction);
    playButtonFind.disabled = false; 
    resetButtonFind.disabled = false;
    increaseBreakTime.disabled = false;
    decreaseBreakTime.disabled = false;  
}

function increaseOrDecreaseTime (breakOrSession) { //conditional that increases or decreases session or break buttons.
    if (selectedSessionTimeValue <= 0 || selectedBreakTimeValue <= 0){ //need to fix the conditional. once the value is at 0, you cannot increase it after that
        selectedSessionTime.innerText == selectedSessionTimeValue;
        selectedBreakTime.innerText == selectedBreakTimeValue;
    }
    if (breakOrSession == "increaseSessionTime"){
        selectedSessionTime.innerText = ++selectedSessionTimeValue;
        displayTimeCountdown.innerText = selectedSessionTime.innerText + ":00"; //countdown time display is updated when session time is updated
    }else if (breakOrSession == "increaseBreakTime"){
        selectedBreakTime.innerText = ++selectedBreakTimeValue;
    }else if (breakOrSession == "decreaseSessionTime"){
        selectedSessionTime.innerText = --selectedSessionTimeValue;
        displayTimeCountdown.innerText = selectedSessionTime.innerText+ ":00";//countdown time display is updated when session time is updated
    }else if (breakOrSession == "decreaseBreakTime"){
        selectedBreakTime.innerText = --selectedBreakTimeValue;
    }else {
        return;
    }
}


