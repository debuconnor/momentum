const greetingsEl = document.getElementById("greetings");
const currentHour = new Date().getHours();

function setGreetings(){
    let text = "Good Morning";

    if(currentHour >= 12 && currentHour < 19){
        text = "Good Afternoon";
    }
    else if(currentHour >= 19 || currentHour < 7){
        text = "Good Night";
    }

    greetingsEl.innerText = text;
}