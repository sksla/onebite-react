// 스코프(Scope)란?
// 우리말로 "범위"를 뜻함
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

/*
  fuction funcA(){
    let a = 1; // 변수 a 접근 가능 영역(스코프, 지역 스코프)
  }

  console.log(a); ==> 오류발생, 변수 a 접근 불가능 영역
*/

// 스코프
// -> 전역(전체 영역) 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능, 블록( {} )내에 선언된 변수들

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프 가짐
}

funcA();
//console.log(b); // => 오류

if (true) {
  let c = 1;
  //function funcB() {}
}

for (let i = 0; i < 10; i++) {
  let d = 1;
  //function funcB() {}
}

// 예외) 함수 선언식은 함수 안에서만 지역 스코프를 가짐
