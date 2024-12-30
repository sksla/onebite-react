// 배열(Array) : 여러개의 값을 "순차적"으로 담을 수 있는 자료형

// 1. 배열 생성
// 방법 1 : 배열 생성자
let arrA = new Array();

// 방법 2 : 배열 리터럴 (대부분 사용)
let arrB = [];

// 배열 안에는 어떤 타입의 값이든 다 저장 가능
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

// 2. 배열 요소 접근 (인덱스를 이용해서 접근)
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);

arrC[0] = "hello"; // 배열 값 수정
console.log(arrC);
