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

// Array
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