// * 함수표현식과 화살표 함수

/*
  - JavaScript에서는 함수도 숫자나 문자열과 같은 하나의 값으로 취급
    ==> 함수 자체를 변수에 담아놓을 수 있음

  1. 함수 표현식 : 값으로서 함수를 생성하는 방식, 함수 선언문으로 생성하지 않음
                  ==> 값으로 취급됨, 호이스팅의 대상이 되지 않음
*/
// 함수 선언문 => 호이스팅 가능
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수를 변수에 저장함
console.log(varA);
varA(); // 변수명() 형식으로 호출

// 바로 변수에 담기 가능 ==> 익명함수
// 호이스팅 불가
let varB = function funcB() {
  console.log("funcB");
};

// 이럴 땐 함수명 생략 가능
/*
let varB = function () {
  console.log("funcB")
}
*/

varB();

// 2. 화살표 함수 : 더 빠르고 간결하게 함수를 만드는 방법
/*
  let func = ([매개변수]) => {
    // 실행할 코드
  }
*/

let varC = function () {
  return 1;
};

let varC1 = () => {
  return 1;
};

// case1. 값을 반환하기만 하는 함수라면
//        --> 중괄호와 return문 생략 가능
let varC2 = () => 1;

// case2. 매개변수가 필요하다면
//        --> 소괄호 안에 매개변수 선언
let varC3 = (value) => value + 1;

// case3. 반환 이외의 더 추가적인 작업이 있다면
//        --> 화살표 끝에 중괄호 추가하고 그 안에 추가적인 작업 추가
let varC4 = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC3(10));
