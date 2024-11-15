// 1. 배열의 구조 분해 할당

// 1)기본 변수 할당
/*
let colors = ["green", "blue", "purple"];

let c1 = colors[0]; // "green"
let c2 = colors[1]; // "blue"
let c3 = colors[2]; // "purple"
*/

// 2)구조 분해
/*
let colors = ["green", "blue", "purple"];
let [c1, c2, c3] = colors;
*/

// 3)선언 분리 할당 : 변수의 선언을 분리해서 배열의 값을 할당하는 방법
// 변수를 한번에 선언
/*
let c1, c2, c3;
[c1, c2, c3] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
*/

// 배열의 길이보다 더 많은 변수 또는 더 적은 변수들에 배열의 값 할당

// 3)-1. 배열의 길이 > 변수의 수 인 경우
/*
let c1, c2;
[c1, c2] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
*/

// 3)-2. 배열의 길이 < 변수의 수 인 경우  ==> 할당되고 남은 변수에는 undefined라는 값 설정됨
let c1, c2, c3, c4;
[c1, c2, c3, c4] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
console.log(c4); // undefined

// 4). 기본값 할당(설정) ==> 남은 변수들에 undefined라는 값이 할당되는 것을 원하지 않을 때
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 값이 undefined일 경우에만 적용, 값이 있으나 null이나 다른 값일 경우 적용 X
const [five = 1, six = 2, seven = 3] = [10, undefined];

console.log(five); // 10
console.log(six); // 2 (undefined였으므로 기본값 적용)
console.log(seven); // 3 (배열에 값이 없으므로 기본값 적용)

const [x = 5, y = 7] = [null, undefined];

console.log(x); // null (null은 기본값 할당 조건이 아님)
console.log(y); // 7 (undefined이므로 기본값 적용)

// 배열의 구조 분해는 배열요소의 값을 추출할 때 자주 사용하지만, 두 개의 변수 값을 서로 바꿀 때도 사용
// 5)변수 값 교환하기

// 구조 분해 사용 X
// ==> 두 변수의 값을 변경하려면 tmp와 같은 임시 변수가 필요함
/*
let a = 10;
let b = 5;
let tmp;

console.log(a, b);

tmp = a;
a = b;
b = tmp;

console.log(a, b);
*/

// 배열의 구조 분해 사용 O
let a = 10;
let b = 5;

console.log("구조분해", a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

// 2. 객체의 구조 분해 할당
// 1) 기본 할당
/*
let numbers = {
  n1: "one",
  n2: "two",
  n3: "three",
};

let n1 = numbers.n1;
let n2 = numbers.n2;
let n3 = numbers.n3;
*/

// 2) 구조 분해 할당 ==> 키값을 기준으로 객체를 분해해, 변수에 할당
/*
let numbers = {
  n1: "one",
  n2: "two",
  n3: "three",
};

let { n1, n2, n3 } = numbers;
*/

//console.log(n1); // one
//console.log(n2); // two
//console.log(n3); // three

// 3) 새로운 변수 이름으로 할당

let numbers = {
  n1: "one",
  n2: "two",
  n3: "three",
};

// 3-1) 구조 분해 사용 X
/*
let num1 = numbers.n1;
let num2 = numbers.n2;
let num3 = numbers.n3;
*/

// 3-2) 구조 분해 사용 O
// 객체 프로퍼티의 값을 할당할 변수가 객체 프로퍼티의 key값과 다를 경우 :(클론)을 이용해 다른 이름의 변수에 값 할당 가능
let { n1: num1, n2: num2, n3: num3 } = numbers;

console.log(num1); // one
console.log(num2); // two
console.log(num3); // three

// 4) 기본값 설정
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
/*
const func = (person) =>{
  console.log(person.name, person.age);
}
*/
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
