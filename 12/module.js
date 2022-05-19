import sumModule from './sum.js';
import { sum } from './sum2.js';
// 이름은 같은데 다른 기능이면?
// SyntaxError가 뜬다. 이미 생성한 변수 이름이라서. 

console.log(sumModule(1,2));
console.log(sum(1, 2));