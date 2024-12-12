// 비동기 작업 처리하기 1. 콜백함수

/*
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

// 비동기 작업을 하는 함수의 결과 값을 그 함수 외부에서 사용하는 방법
// ==> 비동기 함수 호출할 때 콜백함수 하나 추가해서 전달
//     콜백함수 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정
add(1, 2, (value) => {
  console.log(value);
});
*/

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

// 음식을 식히는 함수
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 식어버린 음식을 냉동시키는 함수
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 응용사례 : 어떤 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 활용
// ==> 이 방법이 반복되다보면 인덴트(indent, 들여쓰기)가 점점 깊어지는 형태로 코드가 진화
//     --> 기능이 늘어날수록 가독성이 점점 안좋아짐 == 콜백지옥
orderFood((food) => {
  console.log(food);

  // 비동기 작업의 결과를 또다른 비동기 작업의 인수로 전달 가능
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
