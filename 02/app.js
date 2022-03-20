/* 
github copilot 사용해보기
*/

// 변수
// var선언자 : 중복 선언 가능
var nm = 'ah';
nm = 111;
console.log(nm);

// boolean
var isMan = 'true';
var isMan1 = true
console.log(isMan)
console.log(isMan1)
console.log(typeof(isMan))
console.log(typeof(isMan1))

// 함수
function log(str){
    console.log(str);
}

log("hello")

// object(1)
a = {
    width : 1,
    height : 2
};
console.log(a.width)

a.color = "red"
console.log(a)

// Array(1)
img = []
img[0] = 'bear'
img[1] = 'cat'
console.log(img)

img[1] = 'dog'
console.log(img)

// 연산자Operator
console.log(Boolean(null==undefined))
console.log(Boolean(null===undefined))

console.log(typeof(1+'4'))
typeof foo !== 'undefined'
console.log(typeof(foo))

// object(2)
// debugger;
// json 형식 : 비동기 브라우저/서버 통신할 때 사용.
var me = {
    nick: 'FE',
    age: 23,
    area: 'jeju',
    hobby: ['sleep', 'book'],
    sayHi: function(){
        console.log('hihi')
    },
};

// 객체 안의 함수 = method
me.sayHi();

// 내장객체
// window: 브라우저 가장 최상위 객체
console.log(window) 

const date = new Date();
// 패턴매칭 : 패턴을 사용해 텍스트를 판별할 때 사용
var pattern = new RegExp('^abc') 

// Array(2)
var arr = [1,2,3]
console.log(arr.length)

for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// join
console.log(arr.join('&'))

// map
var newArr = arr.map((num) => {
    return num + 'ok';
});
console.log(newArr)

// every & some
var isCheck = arr.every((num) => {
    return num < 3;
})
console.log(isCheck)

var isCheck = arr.some((num) => {
    return num < 3;
})
console.log(isCheck)

var article1 = {
    title: '제목1',
    url: 'http://naver.com',
};

var articles = [article1];
console.log(articles)

// 배열 CRUD
// Create
var todos = ['운동'];
var todo = '게임'

// 재정의없이 추가.
todos.push(todo) 
console.log(todos)

// Read
todos.forEach((todo)=>{
    console.log(todo)
})

// Update
var updateTodo = '게임';
// 주어진 판별 함수를 만족하는 배열의 첫번째 요소에 대한 인덱스 반환
var updadteIndex = todos.findIndex((todo) => {
   return todo === updateTodo; 
})
console.log(updadteIndex);
todos[updadteIndex] = '공부';
console.log(todos);

// Delete
var deleteTodo = '공부';
var deleteIndex = todos.findIndex((todo)=>{
    return todo === deleteTodo;
})
// splice(index,num) : 배열 index번째부터 num개를 제거한다.
todos.splice(deleteIndex,1);
console.log(todos);

var todo = '코딩';
todos.push(todo);
var deleteTodo = '운동';
// filter 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용. 
var newTodos = todos.filter((todo) => {
    return todo !== deleteTodo;
});
console.log(newTodos)