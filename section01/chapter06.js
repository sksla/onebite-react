// 형 변환 (Type Casting) : 어떤 값의 타입을 다른 타입으로 변경함
// 묵시적 형 변환 (암묵적 형 변환) : 알아서 자바스크립트 엔진이 형 변환 함 => 자동
// 명시적 형 변환 : 개발자가 직접 함수 등을 이용해 형 변환 함 => 수동

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
// 하나의 변수만 수정하면 오류가 나지 않을 경우에만

let num = 10;
let str = "20";

// 자동으로 numberType 에서 String Type으로 변환
const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래며 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);
console.log(10 + strToNum);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);
// 숫자가 먼저 나와있는 경우만 형변환 가능

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
