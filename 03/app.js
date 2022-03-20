/* 
비동기 함수의 실행 순서를 알아보자.
*/

// 타입변환
/*
동적타입
JS의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 및 재할당 가능. 
*/
var foo = 42
var foo = "bar"
var foo = true

if("test"){  //true로 자동변환
    console.log("true");
}

console.log("2" + 2); // "22"

console.log(2 + 5 + "1");

/*
원시타입 || 참조타입
원시타입 : 변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값 보관
참조타입 : 변수에는 데이터에 대한 참조만 저장
*/

// 값 value
var a = 1;
var b = a;
b = 2;
console.log(a,b);

// 참조 reference
var a = [1];
var b = a;
b[0] = [2];
console.log(a,b);

var a = { x:1 };
var b = a;
b.x = 2;
console.log(a,b);

// call by value
function byValue(count){
    count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); // 3

// call by referenct
function byReference(count){
    count.push('2')
}
var count = ['1'];
byReference(count);
console.log(count)

// 구문
// IF
isMan = true
if (isMan) {
    console.log('man');
} else {
    console.log('woman');
}

var gender = isMan ? 'man' : 'woman'; // 삼항 연산자

// for
for(var count = 0; count < 5; count++){
    // 5번 반복 실행
}

var obj = {a:1, b:2};

for (var prop in obj) {
    console.log(prop, obj[prop]);
}

// while
var isClosed = true;
while (isClosed) {
}

// 함수
// 좋은 함수란? 

// 전역함수 -> window의 method
// method : 객체 안의 특정 함수. 
// 객체 : ...


// scope
// 유효범위
var nick = 'age';
function test(){
    var age=30;
    console.log(nick,age);
}

test();
console.log(age);

// 호이스팅..?
var name = 'global';
function test() {
    console.log(nm);
    var nm = 'local';
    console.log(nm);
}

// function
// 가변 길이 전달인자
function sum(){
    var size = 0;
    for(var i = 0; i<arguments.length; i++)size += arguments[i];

    console.log(size);
}

sum(1,2,3,4,5,6)

// 정규표현식 Regular Expression
// 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴

// .test() : 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 불린값으로 return
var test = 'abc def ghi jkl abc def';
var testReg = /abc/; // 정규표현식 리터럴 : 슬래시로 패턴을 감싸서 작성
var result = testReg.test(text);

console.log(result) //true

// 휴대폰 번호 정규식
var num = 010-0000-0000

var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
regPhone.test(num)


// CRUD 함수화
var todos = [];
function create(todo){
    todos.push(todo)
}

function read(){
    todos.forEach(function(todo){
        console.log(todo);
    });
}

function update(updateTodo, newTodo){
    var updateIndex = todos.findIndex((todo) => {
        return todo === updateTodo;
    });

    todos[updateIndex] = newTodo;
}

function del(deleteTodo){
    todos = todos.filter((todo) => {
        return todo !==  deleteTodo;
    }
);}

create('game')
create('music')
console.log(todos)

read()

update('game','food')
console.log(todos)

del('music')
console.log(todos)




