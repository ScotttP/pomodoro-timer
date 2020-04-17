//SELECTION OF ELEMENTS//
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
const displaySessionOrBreakTime = document.getElementById('displaySessionOrBreakTime');

//QUERY SELECTORS//
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

//GLOBAL VARIABLES//
let selectedSessionTimeValue = 25;
let selectedBreakTimeValue = 5;
let countDownTime = selectedSessionTimeValue * 60;
let sessionIntervalFunction; //this is declared so the clear interval function works properly
let breakIntervalFunction; //this is declared so the clear interval function works properly

//ASSIGNMENT OF INNERTEXT DEFAULT VALUES
selectedSessionTime.innerText = selectedSessionTimeValue;
selectedBreakTime.innerText = selectedBreakTimeValue;
displayTimeCountdown.innerText = selectedSessionTimeValue + ':00';
displaySessionOrBreakTime.innerText = 'Press Play to Start!'

// EVENT LISTENERS //
playButton.addEventListener('click', () =>{
    if (displaySessionOrBreakTime.innerText == 'Press Play to Start!' || displaySessionOrBreakTime.innerText == 'Session Time!' ) {
        sessionIntervalFunction = setInterval(startSessionCountDown,1000);
    }else{
        breakIntervalFunction = setInterval(startBreakCountDown,1000);
    }
})
pauseButton.addEventListener('click', () => {
    pauseCountDown();
})
resetButton.addEventListener('click', () => {
    resetCountDown();
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

//FUNCTIONS//
function startSessionCountDown () {
    let minutes = Math.floor(countDownTime / 60);
    let seconds = countDownTime % 60;
    seconds = seconds < 10 ? '0' + seconds:seconds;

    displayTimeCountdown.innerText = `${minutes}:${seconds}`;
    displaySessionOrBreakTime.innerText = 'Session Time!';

    countDownTime--;
    countDownTime = countDownTime < 0 ? 0 :countDownTime; 
    
    if (countDownTime === 0){ //conditional that states when the session time hits zero, it calls the break time function
        countDownTime = selectedBreakTimeValue * 60
        clearInterval(sessionIntervalFunction)
        breakIntervalFunction = setInterval(startBreakCountDown,1000);
        
    }
    playButtonFind.disabled = true; 
    resetButtonFind.disabled = true;
    increaseSessionTime.disabled = true;
    increaseBreakTime.disabled = true;
    decreaseSessionTime.disabled = true;
    decreaseBreakTime.disabled = true;   
}
function startBreakCountDown () {
    let minutes = Math.floor(countDownTime / 60);
    let seconds = countDownTime % 60;
    seconds = seconds < 10 ? '0' + seconds:seconds;

    displayTimeCountdown.innerText = `${minutes}:${seconds}`;
    displaySessionOrBreakTime.innerText = 'Break Time!'

    countDownTime--;
    countDownTime = countDownTime < 0 ? 0 :countDownTime; 

    if (countDownTime === 0){//conditional that states when the break time hits zero, it calls the session time function
        countDownTime = selectedSessionTimeValue * 60;
        clearInterval(breakIntervalFunction);
        sessionIntervalFunction = setInterval(startSessionCountDown,1000);
        
    }
    playButtonFind.disabled = true; 
    resetButtonFind.disabled = true;
    increaseSessionTime.disabled = true;
    increaseBreakTime.disabled = true;
    decreaseSessionTime.disabled = true;
    decreaseBreakTime.disabled = true;   
}
function pauseCountDown () {
    clearInterval(sessionIntervalFunction);
    clearInterval(breakIntervalFunction);
    playButtonFind.disabled = false; 
    resetButtonFind.disabled = false;
    if (displaySessionOrBreakTime.innerText = 'Session Time!'){
        increaseBreakTime.disabled = false;
        decreaseBreakTime.disabled = false; 
    }else{
        increaseSessionTime.disabled = false;
        decreaseSessionTime.disabled = false;
    }
}
function resetCountDown () {
    clearInterval(sessionIntervalFunction);
    clearInterval(breakIntervalFunction);
    increaseSessionTime.disabled = false;
    decreaseSessionTime.disabled = false;
    //variables assigned to their default values
    selectedSessionTimeValue = 25;
    selectedBreakTimeValue = 5;
    countDownTime = selectedSessionTimeValue * 60;
    //the display functionality of changing the default values
    selectedSessionTime.innerText = selectedSessionTimeValue;
    selectedBreakTime.innerText = selectedBreakTimeValue;
    displayTimeCountdown.innerText = selectedSessionTime.innerText + ':00';
    displaySessionOrBreakTime.innerText = 'Press Play to Start!'
}
function increaseOrDecreaseTime (breakOrSession) { //conditional that increases or decreases session or break buttons.
    if (selectedSessionTimeValue <= 0){ //need to fix the conditional. once the value is at 0, you cannot increase it after that
        selectedSessionTimeValue += 1;
    }else if(selectedBreakTimeValue <= 0){
        selectedBreakTimeValue += 1;
    }else{
        decreaseSessionTime.disabled=false;
        decreaseBreakTime.disabled=false;
        if (breakOrSession == "increaseSessionTime"){
            selectedSessionTime.innerText = ++selectedSessionTimeValue;
            displayTimeCountdown.innerText = selectedSessionTimeValue + ":00"; //countdown time display is updated when session time is updated
            countDownTime = selectedSessionTimeValue * 60;
        }else if (breakOrSession == "increaseBreakTime"){
            selectedBreakTime.innerText = ++selectedBreakTimeValue;
        }else if (breakOrSession == "decreaseSessionTime"){
            selectedSessionTime.innerText = --selectedSessionTimeValue;
            displayTimeCountdown.innerText = selectedSessionTimeValue+ ":00";//countdown time display is updated when session time is updated
            countDownTime = selectedSessionTimeValue * 60;
        }else if (breakOrSession == "decreaseBreakTime"){
            selectedBreakTime.innerText = --selectedBreakTimeValue;
        }else {
            return;
        }
    }
}


