// 콜백함수(Callback Function) : 자신이 아닌 다른 함수에, 인수로써 전달된 함수
// 콜백 : 나중에 실행되는
// 예시
/*
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub); // 여기서 sub는 콜백함수(인수가 된 함수)
*/

// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  console.log(value);
  value();
  console.log("end");
}

/*
function sub() {
  console.log("i am sub");
}

main(sub); // 콜백 함수는 main 함수가 언제든지 원하는 타이밍에 실행시킬 수 있음
*/

// 함수 표현식 이용 1
/*
main(function sub() {
  console.log("i am sub");
});
*/

// 함수 표현식 이용 2 - 익명 함수
/*
main(function () {
  console.log("i am sub");
});
*/

// 화살표 함수 이용
main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
// 구조가 거의 흡사한 함수들을 만들어야 할 때 중복된 코드를 줄여 간결하게 작성 가능

// 콜백함수 활용 전 ==> 중복 코드 발생
/*
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

// 2의 배수
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

// 3의 배수
function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}
repeat(5);
repeatDouble(10);
repeatTriple(10);
*/

// 콜백함수 활용 후
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
