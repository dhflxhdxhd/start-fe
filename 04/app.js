/*
팝업창 레이어 형식으로 많이 사용
emmet
*/

// dom 탐색
// const el = document.getElementById('title');
// const el = document.querySelector('#title');
// const el = document.querySelectorAll('h1');
// console.log(el)

//     const div = document.createElement('div');
//     div.style.border = "2px solid blue";
//     div.innerHTML = "domdomdomdom";

//     // append vs appendChild
//     document.body.appendChild(div)

// window.onload = load

// function load() {
//     alert('load');
// }

// window.addEventListener('load', load);

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function(){
//     console.log("click");
// });

// const list = document.getElementById("list");

// list.addEventListener('click',function(event){
//     if(event.target.nodeName == "LI"){
//         alert("don't click")
//     }
// })


// preventDefault vs stopPropagation
const link = document.querySelector('a');
link.addEventListener('click', function(event){
    window.open("https://www.daum.net");
    event.preventDefault();
});