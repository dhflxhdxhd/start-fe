const box = document.querySelector(".box");
const bug = document.querySelector("#bug");
const point = document.querySelector("#point");
const life = document.querySelector("#life")


function getRandom(max){
    return Math.floor(Math.random()*max);
}

function showBox(){
    const x = getRandom(box.offsetWidth - bug.offsetWidth);
    const y = getRandom(box.offsetHeight - bug.offsetHeight);

    bug.style.left = `${x}px`;
    bug.style.top = `${y}px`;
}

function clickBoxEvent(event){
    const target = event.target;
    let score_point = parseInt(point.innerText);
    let score_life = parseInt(life.innerText);
    
    if (target === event.currentTarget.querySelector("#bug")){
        score_point += 1
        point.innerHTML = score_point;
        
    }else {
        score_life -= 1
        life.innerHTML = score_life;

        if (score_life === 0){
            alert("gameover");
        }

    }
}

function init(){
    setInterval(showBox, 2000);
    box.addEventListener('click', clickBoxEvent);
}

init();



