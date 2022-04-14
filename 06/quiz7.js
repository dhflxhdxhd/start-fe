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

function clickBugEvent(event){
    const target = event.target;
    // console.log(typeof(point.innerText));
    let score_point = parseInt(point.innerText);
    let score_life = parseInt(life.innerText);
    
    if (target === bug){
        score_point ++;
        point.innerHTML = score_point;
        
    }else {
        score_life --;
        life.innerHTML = score_life;

        if (score_life === 0){
            alert("gameover");
            location.reload();
        }

    }
}

function init(){
    setInterval(showBox, 1000);
    box.addEventListener('click', clickBugEvent);
}

init();



