// 콜백함수(Callback Function) : 자신이 아닌 다른 함수에, 인수로써 전달된 함수
// 콜백 : 나중에 실행되는
/*
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

// 여기서 sub는 콜백함수(인수가 된 함수)
main(sub);
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

main(sub);
*/

/*
main(function sub() {
  console.log("i am sub");
});
*/

main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
// 구조가 거의 흡사한 함수들을 만들어야 할 때 중복된 코드를 줄여 간결하게 작성 가능
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

// 위의 코드를 콜백함수를 활용할 때
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
