/*
  * 순회(Iteration) 란?
  - 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

*/

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스 + for문을 이용한 순회
// ==> 인덱스를 통한 활동 가능
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문  (오직 배열을 순회하기 위해서만 존재하는 특수한 반복문)
// ==> 인덱스 저장 X, 그냥 순서대로 순회만 함
/*
  - for of 반복문의 사용
  for (let 변수명 of 순회하고자 하는 배열){
    실행할 코드;
  }

  ==> 배열안의 값을 순서대로 하나씩 꺼내서 변수에 저장함
*/
for (let item of arr) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

// console.log(keys); // ["name", "age", "hobby"]

/*
for(let i = 0; i<keys.length; i++){
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key);
}

*/

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

// console.log(values); // ["이정환", 27, "테니스"]

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in (객체만을 위해 존재하는 반복문)
/*
  - for in 반복문의 사용
  for (let 변수명 of 순회하고자 하는 객체){
    실행할 코드;
  }

  ==> 객체 안의 키값을 하나씩 꺼내서 변수에 저장함
*/
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
