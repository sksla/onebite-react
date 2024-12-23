// 함수

/*
  * 함수 선언
  : 함수를 새롭게 만드는 행위
  => 함수 호출 시 실행될 내용을 미리 정의하는 일

  ex)
  function 함수명 ([매개변수, ...]) {
    함수가 실행해야 할 코드 
  }

  * 함수 호출
    - 함수명만 호출하지 않고 소괄호와 함께 호출
    ex) 함수명([인수1, 인수2, ...]);


  > 인수 : 함수를 호출하면서 함수에게 전달한 값
  
  > 매개변수 : 전달된 인수들을 순서대로 저장하는 특수한 함수의 변수
              (let, const 키워드는 사용하기 않음)
*/

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 함수 호출시에는 함수명(); => 소괄호와 함께 호출!
console.log("호출 후");

let area1 = getArea(10, 20); // 10, 20 은 인수
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

/*
  * 호이스팅
  -> 끌어올리다 라는 뜻
  -> JavaScript의 기능
    자바스크립트에서는 선언문이 호출문보다 아래에 있어도 문제가 없음

*/

// 직사각형의 넓이 구하는 함수 만들기
function getArea(width, height) {
  // width와 height는 매개변수(let, const 키워드는 사용하지 않는다)

  function another() {
    // 중첩 함수 => 함수 선언 안에 함수 선언
    console.log("another");
  }

  another();
  let area = width * height;

  // 함수 안에서 return문 만나면 값을 반환하고 바로 함수 종료됨
  return area; // area는 반환값

  // return문 밑에 코드를 작성해도 실행되지 않음
}

console.log(area1, area2, area3); // 200 600 2400
