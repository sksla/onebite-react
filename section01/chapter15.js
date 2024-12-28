// 객체 1
/*
  객체(Object) : 원시타입이 아닌 객체 타입의 자료형
                여러가지의 값을 동시에 저장 가능한 자료형
  현실 세계에 존재하는 어떤 사물이나 개념을 표현하기에 용이함
*/

// 1. 객체 생성
// 방법 1 : 객체 생성자
let obj1 = new Object();

// 방법 2 : 객체 리터럴(대부분 사용)
let obj2 = {};

// 2. 객체 프로퍼티 (객체 속성)
// key:value 형태
// 프로퍼티의 개수 제한 없음, value 값의 타입제한 없음
// key는 숫자 또는 문자로만 사용가능(단, 예외적으로 띄어쓰기가 있을 시 ""로 감싸야 함)
let person = {
  // key : value
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호표기법)
// + 존재하지 않는 프로퍼티에 접근시 undefined 반환

// > 점 표기법
let name = person.name;
console.log(name); // 줄 그어진 건 타입스크립트와 관련된 경고 사항(vscode의 기본기능, 지금은 무시해도 됨)

// > 괄호표기법 : 접근하고자하는 key를 명시, ""로 꼭 감싸야함(문자열로!!)
//               따옴표로 감싸지 않으면 변수로 인식함
let age = person["age"];
console.log(age);

// + 동적으로 프로퍼티에 접근해야한다면 --> 괄호표기법을 추천
//   그렇지 않다면 --> 간결한 점 표기법 추천
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법(점 표기법, 괄호표기법)
//     ==> 그냥 없던 프로퍼티에 값 추가하면 됨
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
//     ==> 있는 프로퍼티에 값 수정하면 됨
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법 (delete 연산자)
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
//  => (in 연산자 : 존재하면 true | 존재 X false 반환)
// "key" in 객체명
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);
