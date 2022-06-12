const guguInput = document.getElementById("num");
const guguBtn = document.getElementById("btn");
const guguResult = document.getElementById("result");

let result = [];

function gugu(num){
    for (let j = 1; j < 10; j++ ){
        result.push(`${num} X ${j} = ${num*j}`)
        // console.log(`${num} X ${j} = ${num*j} `)
    }
}

function print_gugu(){
    const num  = parseInt(guguInput.value);
 
    // debugger;
    if (isNaN(num)){
        alert("숫자를 입력하세요");
    }else{
        gugu(num);
        guguResult.innerHTML = result.join("<br>");
    }
    result = [];
}

guguBtn.addEventListener("click", print_gugu);

