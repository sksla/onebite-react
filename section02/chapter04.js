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
  : 함수에 전달된 나머지 인수를 배열로 수집하는 기능
  -> Rest는 나머지 , 나머지 매개변수

  - 함수의 정의에서 사용
  - rest 문법도 ... 기호를 사용하기 때문데 spread와 비슷해보이나 둘은 서로 다른 역할을 하는 문법

  주의! =>  rest 매개변수 뒤에 추가적으로 매개변수 선언 불가!! ==> 오류 발생
*/

// 2-1. 객체
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

//const { type, price, color } = blueToy;
const { type, ...rest1 } = blueToy;

console.log(type); // "bear"
console.log(rest1); // { price:15000, color:"blue" }

// 2-2. 배열
const color = ["red", "blue", "green", "yellow"];
const [c1, c2, ...rest2] = color;

console.log(c1); // "red"
console.log(c2); // "blue"
console.log(rest2); // ["green", "yellow"]

// 2-3. 함수에서의 사용

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
 spread 문법 : 객체나 배열에서 반복적인 값들을 퍼뜨려주는 문법
 rest 문법 : 특정 부분들을 하나의 배열이나 객체로 묶는 문법
*/
