// 자료형(Type)은 "집합"이다.
// 자료형 원시타입, 객체타입으로 크게 구분
// 원시타입(기본형 타입)

// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
*/
// % : 모듈러

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 연산에 실패했을 때의 값 Not a Number;
//console.log(1 * "hello");

// 2. String Type('' 또는 ""로 감싸야함)
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

//console.log(introduce);

// ``으로 감씬 문자열 안에는 ${} 이용해서 동적으로 문자열 포함 가능
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
//console.log(introduceText);
// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다. 개발자가 직접 넣어줘야하는 값)
let empty = null;

// 5. Undefined Type(초기화 하지 않은 변수에 자동으로 할당되는 값, 존재하지 않는 변수의 값)
let none;
console.log(none);
