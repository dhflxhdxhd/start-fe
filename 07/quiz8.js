const btn = document.querySelector("#btn");
const box = document.querySelector("#box");


function createRandomNum(minn,maxn){
    return Math.floor(Math.random() * (maxn - minn) + minn +1)
}

function showNumber(){
    let min = document.querySelector("#min").value;
    let max= document.querySelector("#max").value;

    box.innerHTML = createRandomNum(min,max);
}


function init(){
    btn.addEventListener("click",showNumber);
}

init();