const defaultTime = 10;
let time = defaultTime / 60;
const displayTimeCountdown = document.getElementById('timerContainer');

setInterval (countDown,1000);

function countDown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds:seconds;

    displayTimeCountdown.innerText = `${minutes}:${seconds}`;
    time--;
}