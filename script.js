const defaultTime = 1;
let defaultTimeDisplay = defaultTime + ":00"
let countDownTime = defaultTime * 60;
let intervalFunction = null;

const displayTimeCountdown = document.getElementById('timerContainer');
const playButtonFind= document.getElementById('play');
const pauseButtonFind= document.getElementById('pause');
const resetButtonFind= document.getElementById('reset');
const increaseSessionTime = document.getElementById('increaseSessionTime')
const increaseBreakTime = document.getElementById('increaseBreakTime')
const decreaseSessionTime = document.getElementById('decreaseSessionTime')
const decreaseBreakTime = document.getElementById('decreaseBreakTime')


const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

displayTimeCountdown.innerText = defaultTimeDisplay;

playButton.addEventListener('click', () =>{
   intervalFunction = setInterval(startCountDown,1000);

})

pauseButton.addEventListener('click', () => {
    pauseCountDown();
})

resetButton.addEventListener('click', () => {
    displayTimeCountdown.innerText = defaultTimeDisplay;
    clearInterval(intervalFunction);
    
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
    
}

function pauseCountDown () {
    clearInterval(intervalFunction);
    playButtonFind.disabled = false; 
    resetButtonFind.disabled = false;
}

function increaseOrDecreaseTime (breakOrSession) {
    if (breakOrSession == "increaseSessionTime"){
        console.log('increase session time!');
    }else if (breakOrSession == "increaseBreakTime"){
        console.log('increase break time');
    }else if (breakOrSession == "decreaseSessionTime"){
        console.log('decrease session time');
    }else if (breakOrSession == "decreaseBreakTime"){
        console.log('decreease break time');
    }else {
        console.log ('something went wrong')
    }
}


