// 3주차 퀴즈

//  var count = [10,20,30,40,50,60,70,100]; 배열 count 요소들의 평균값 구하는 코드를 작성하세요 *
const count = [10,20,30,40,50,60,70,100];
let sum = 0
for (let i = 0; i < count.length; i++){
    sum += count[i]
}
const av = sum / count.length
console.log(av)

// 구구단을 출력하는 코드를 for구문을 사용하여 작성하세요 

// for (let i = 1; i < 10; i++){
//     for (let j = 1; j < 10; j++ ){
//         console.log(`${i} X ${j} = ${i*j} `)
//     }
// }

// // 
// function gugu(){
//     for (let i = 1; i < 10; i++){
//         for (let j = 1; j < 10; j++ ){
//             console.log(`${i} X ${j} = ${i*j} `)
//         }
//     }
// }

// gugu()

// 
var CRUD = {
    create : function create(...todo){
        var n = arguments.length
        if (n>1) {
            for ( var cnt = 0;  cnt < n; cnt++){
                todos.push(arguments[cnt]);
            }
        }else{
            todos.push(arguments[0]);
        }
    },
    read : function read(){
        todos.forEach(function(todo){
            console.log(todo);
        });
    },
    update : function update(updateTodo, newTodo){
        var updateIndex = todos.findIndex((todo) => {
            return todo === updateTodo;
        });
    
        todos[updateIndex] = newTodo;
    },
    delete : function del(deleteTodo){
        todos = todos.filter((todo) => {
            return todo !==  deleteTodo;
        }
    );},
}

// 