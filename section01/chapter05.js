/*
  자료형(Type)은 "집합"이다.
  자료형 원시타입, 객체타입으로 크게 구분
  원시타입(기본형 타입)
    - Number, String, Boolean, Null, Undefined
*/

// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // % : 모듈러
*/
// 모듈러 연산 : 나머지를 구하는 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // NaN(Not a Number) : 연산에 실패했을 때의 값 ;
//console.log(1 * "hello");

// 2. String Type ('' 또는 ""로 감싸야함)
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation; // 덧셈 연산 지원

//console.log(introduce);

// * 템플릿 리터럴 문법
// : `(백틱)으로 만든 문자열 ==> 기본적으로 ",'로 만든 문자열과 동일
//  `(백틱)에서는 ${}를 통해서 변수의 값을 동적으로 문자열에 포함할 수 있다
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
//console.log(introduceText);

// 3. Boolean Type
// => 주로 상태를 의미하는 데에 주로 사용됨
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (변수에 아무런 값도 담겨있지 않다. 개발자가 직접 넣어줘야하는 값)
let empty = null;

// 5. Undefined Type (초기화 하지 않은 변수에 자동으로 할당되는 값, 존재하지 않는 변수의 값)
let none;
console.log(none);

/*
  Null, Undefined 모두 아무것도 없다라는 뜻
  둘의 차이점
  - Null : 개발자가 이 변수에 어떠한 값도 없다를 표현할 때 사용하는 값
  - Undefined : 변수를 미처 초기화하지 못했거나, 존재하지 않는 값을 불러오려할 때 발생할 수 있는 값
*/
