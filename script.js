

const daysEl = document.getElementById('days');
const hourEl = document.getElementById('hour');
const minutsEl = document.getElementById('minuts');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2022'

function countDown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 60) % 24;
    const minuts = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)
    
daysEl.innerHTML = formatTime(days);
hourEl.innerHTML = formatTime(hours);
minutsEl.innerHTML = formatTime(minuts) ;
secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, minuts, seconds)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000)