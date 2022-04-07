const input = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// 마지막 값만 출력됨
// 리스트로 추가시켜서 출력될 수 있도록해야함.
function paintList(text){
    const li = document.createElement("li");
    
}



function gugu(num){
    for (let j = 1; j < 10; j++ ){
        result.innerHTML = `${num} X ${j} = ${num*j}`
        console.log(`${num} X ${j} = ${num*j} `)
    }
}

function print_gugu(){
    btn.addEventListener("click", e =>{
        if(isNaN(input.value)) {
            alert("숫자를 입력하세요");
        }else{
            gugu(input.value)
        }
    })
}

print_gugu()