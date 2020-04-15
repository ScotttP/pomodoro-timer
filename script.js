const defaultTime = 1;
let countDownTime = defaultTime * 60;
let intervalFunction;

const displayTimeCountdown = document.getElementById('timerContainer');
const playButtonFind= document.getElementById('play');
const pauseButtonFind= document.getElementById('pause');
const resetButtonFind= document.getElementById('reset');

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

playButton.addEventListener('click', () =>{
   intervalFunction = setInterval(startCountDown,1000);

})

pauseButton.addEventListener('click', () => {
    pauseCountDown();
})

resetButton.addEventListener('click', () => {
    displayTimeCountdown.innerText = defaultTime;
    clearInterval(intervalFunction);
    intervalFunction = null;
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


