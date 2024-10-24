// 객체 2

// 1. 상수 객체 : 상수에 저장한 객체
//               프로퍼티 추가, 수정, 삭제 가능
// 상수 : 새로운 값을 할당할 수 없음
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

//animal = 123; // 오류남

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
// key에 함수를 대입하거나 그냥 key(){} 형태로 선언
const person = {
  name: "이정환",
  // 메서드(화살표 함수로도 가능)
  // sayHi : function () {}
  sayHi: () => {
    console.log("안녕!");
  },
  // 메서드 선언
  sayBye() {
    console.log("잘가!");
  },
};

//person.sayHi();
person["sayHi"]();
//person.sayBye();
person["sayBye"]();
