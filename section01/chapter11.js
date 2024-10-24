// 함수

// 함수선언 => function 함수명 () {}
// => 함수 호출 시 실행될 내용을 미리 정의하는 일
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
// 함수 호출시에는 함수명();
greeting();
console.log("호출 후");

let area1 = getArea(10, 20); // 10, 20 은 인수
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문은 호출문보다 아래에 있어도 문제가 없음

// 직사각형의 넓이 구하는 함수 만들기
function getArea(width, height) {
  // width와 height는 매개변수

  function another() {
    // 중첩 함수 => 함수 선언 안에 함수 선언, 자바스크립트에서 가능한
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // area는 반환값
}

console.log(area1, area2, area3);
