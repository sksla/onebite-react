// JavaScript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다
/* 
  * Truthy & Falsy란?
  - 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
  - JavaScript의 모든 값은 Truthy 하거나 Falsy함 
    ==> 이를 이용하면 조건문을 간결하게 만들 수 있음

*/
// 1. Falsy한 값 (거짓 같은 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big Integer : 아주아주 큰 숫자 저장할 때 (알아만 두자)

/*
if (!f7) {
  console.log("falsy");
}
*/

// 2. Truthy 한 값 (참 같은 값)
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

/*
if (t1) {
  console.log("Truthy");
}
*/

// 3. 활용 사례
// Truthy, Falsy 이용 X
/*
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
*/

// Truthy, Falsy 이용 O
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
