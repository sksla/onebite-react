/*
 1. Spread 연산자 (전개 구문, spread syntax)
 : 반복 가능한 배열이나 객체의 요소들을 개별적으로 펼치는데 사용
 -> Spread : 흩뿌리다, 펼치다 라는 뜻
 -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는(펼쳐주는) 역할

 - 함수 호출, 배열 리터럴 등에 사용
 - 배열, 객체 등을 합칠 때도 사용
*/
// 1-1. 배열
let arr1 = [1, 2, 3];
// 아래의 arr2에 arr1을 넣고 싶을 때
//let arr2 = [4, 5, 6];
// >> 기존
//let arr2 = [4, arr[0], arr[1], arr[2], 5, 6];

// >> spread 연산자 사용
let arr2 = [4, ...arr1, 5, 6];

// 1-2. 객체
let obj1 = {
  a: 1,
  b: 2,
};

// 아래의 obj2에 obj1을 넣고 싶을때
// >> 기존
/*
let obj2 = {
  a:obj1.a,
  c: 3,
  d: 4,
};
*/

// >> spread 연산자 사용
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// 1-3. 함수에서의 사용
function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3);
}

funcA(...arr1);

/* 
  2. Rest 매개변수
  : 함수에 전달된 인수 중 나머지 인수를 배열로 묶는 기능
  -> Rest는 나머지 , 나머지 매개변수
  *** Rest 매개변수는 전달된 값의 타입와 상관없이 "항상 배열"로 묶임 ***

  - 함수의 정의에서 사용
  - rest 문법도 ... 기호를 사용하기 때문데 spread와 비슷해보이나 둘은 서로 다른 역할을 하는 문법

  주의! =>  rest 매개변수 뒤에 추가적으로 매개변수 선언 불가!! ==> 오류 발생
*/

// 함수에서의 사용

/*
function funcB(...rest) {
  console.log(rest); // [1, 2, 3]
}
*/

/* 
function funcB(one, ...rest) {
   console.log(one, rest); // 1, [2, 3]
}
*/

// 주의!! : rest 매개변수 뒤에 추가적으로 매개변수 선언 불가!! ==> 오류 발생
/*
function funcB(one, ...rest, two) {
  console.log(one, rest); // 1, [2, 3]
}
*/

// rest 매개변수의 이름은 마음대로 설정 가능!
function funcB(one, two, ...ds) {
  console.log(ds);
}

funcB(...arr1);

/*
 spread 문법 : 객체나 배열에서 반복적인 값들을 "퍼뜨려주는" 문법
 rest 문법 : 특정 부분들을 하나의 배열이나 객체로 "묶는" 문법


 spread 와 rest 구별 기준

 1. 기존의 배열이나 객체 앞에 ... ==> spread 연산자
 2. 함수 매개변수 앞에 ... ==> Rest 매개변수
*/

/*
  +) Rest 매개변수와 Rest Properties

  - Rest Properties ==> 구조 분해 할당과 함께 사용될 때의 특별한 경우
                        기존의 데이터 타입을 유지하는 것이 특징
                        구조 분해 할당에서 남은 속성들을 처리하기 위해 설계된 문법

  * 함수 Rest 매개변수와 Rest Properties 차이점
                            Rest 매개변수     |           Rest Properties
  ====================================================================================
    사용되는 문맥     | 함수의 매개변수로 사용  |  객체, 배열 구조 분해 할당에서 사용
  ------------------------------------------------------------------------------------  
    결과 데이터 구조  |   항상 배열로 묶임      |   기존의 데이터 타입으로 묶임
  ------------------------------------------------------------------------------------  
    예제             |  function fuc(...args) |   const {a, ...rest} = obj
*/

// - 객체의 Rest Properties
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

//const { type, price, color } = blueToy;
const { type, ...rest1 } = blueToy;

console.log(type); // "bear"
console.log(rest1); // { price:15000, color:"blue" }

// - 배열의 Rest Properties
const color = ["red", "blue", "green", "yellow"];
const [c1, c2, ...rest2] = color;

console.log(c1); // "red"
console.log(c2); // "blue"
console.log(rest2); // ["green", "yellow"]
