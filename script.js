const defaultTime = 10;
let countDownTime = defaultTime * 60;

const displayTimeCountdown = document.getElementById('timerContainer');
const playButton = document.querySelector('#play')
playButton.addEventListener('click', () =>{
    setInterval(startCountDown,1000);
})

function startCountDown () {
    const minutes = Math.floor(countDownTime / 60);
    let seconds = countDownTime % 60;
    seconds = seconds < 10 ? '0' + seconds:seconds;

    displayTimeCountdown.innerText = `${minutes}:${seconds}`;

    countDownTime--;
    countDownTime = countDownTime < 0 ? 0 : countDownTime; 

    document.getElementById('play').disabled = true;
    
}

function pauseCountDown () {
    
}
