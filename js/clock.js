const clockForm = document.getElementById("clock");

function getTime(){
    const currentTime = Date.now();
    const dateObj = new Date(currentTime);
    let hour = dateObj.getHours();
    let min = String(dateObj.getMinutes()).padStart(2, "0");
    let sec = String(dateObj.getSeconds()).padStart(2, "0");
    let AmPm = hour >= 12 ? "PM" : "AM";
    hour = String(dateObj.getHours() % 12);

    return `${hour}:${min}:${sec} ${AmPm}`
}

function renderClock(){
    clock = clockForm.querySelector("p");
    clock.innerText = getTime();
}

renderClock();
setInterval(renderClock, 1000);