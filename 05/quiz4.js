const box = document.querySelector("#box")
let checkDrag = false;
let boxX = 0;
let boxY = 0;
let offset = {boxX, boxY};  

function drag(){
    function mousedown(){
        box.addEventListener('mousedown',(event)=>{
            checkDrag = true;
            offset.boxX = box.offsetLeft - event.clientX;
            offset.boxY = box.offsetTop - event.clientY;
        })
    }
    
    function mousemove(){
        box.addEventListener('mousemove', (event)=>{
            if(checkDrag){
                box.style.left = `${event.clientX + offset.boxX}px`; 
                box.style.top = `${event.clientY + offset.boxY}px`;
            }
        })
    }
    
    function mouseup(){
        box.addEventListener('mouseup', ()=>{
            checkDrag = false;
        })
    }
}

drag();

