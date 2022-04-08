const box =document.querySelector(".box")
const point = document.querySelector("#point");
const life = document.querySelector("#life")

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

box.addEventListener('click', clickBoxEvent);