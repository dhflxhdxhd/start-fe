/* 

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
