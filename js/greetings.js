const greetingsEl = document.getElementById("greetings");
const currentHour = new Date().getHours();

function setGreetings(){
    let text = "Good Morning";

    if(currentHour >= 12){
        text = "Good Afternoon";
    }
    else if(currentHour >= 21 || currentHour <= 6){
        text = "Good Night";
    }

    greetingsEl.innerText = text;
}