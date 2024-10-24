// 함수표현식과 화살표 함수

// 1. 함수 표현식 : 값으로서 함수를 생성하는 방식, 함수선언으로 생성하지 않음
//                 ==> 값으로 취급됨, 호이스팅의 대상이 되지 않음

function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 선언식
varA();

// 바로 변수에 담기 가능 ==> 익명함수
let varB = function funcB() {
  console.log("funcB");
};

varB();

// 2. 화살표 함수 : 더 빠르고 간결하게 함수를 만드는 방법
/*
  let func = ([매개변수]) => {}
*/

let varC = function () {
  return 1;
};

let varC1 = () => {
  return 1;
};

// case1. 값을 반환하기만 하는 함수라면
let varC2 = () => 1;

// case2. 매개변수가 필요하다면
let varC3 = (value) => value + 1;

// case3. 반환 이외의 더 추가적인 작업이 있다면
let varC4 = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC3(10));
