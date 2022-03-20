const backgroundEl = document.querySelector(".background");
const imagePrefix = 'img/';
const imageSuffix = '.JPG';
const IMAGE_COUNT = 5;

function getRandomNum(maxNum){
    return Math.floor(Math.random() * maxNum);
}

function getImageUrl(){
    let imgUrl = `${getRandomNum(IMAGE_COUNT)}${imageSuffix}`;
    let path = "night/";
    const currentHour = new Date().getHours();
    
    if(currentHour >= 6 && currentHour < 12){
        path = "morning/";
    }
    else if(currentHour >= 12 && currentHour < 19){
        path = "day/";
    }

    imgUrl = imagePrefix + path + imgUrl;

    return imgUrl;
}

function setBackgroundImg(){
    backgroundEl.style.backgroundImage = `url(${getImageUrl()})`;
}