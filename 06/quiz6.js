const input = document.getElementById("num");
const btn = document.getElementById("btn");

function gugu(num){
    for (let j = 1; j < 10; j++ ){
        console.log(`${num} X ${j} = ${num*j} `)
    }
}

btn.addEventListener("click", 
    gugu(input.value)
)

