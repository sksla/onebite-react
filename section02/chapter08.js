// 배열 메서드2. 순회와 탐색
// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
/*
  arr.forEach(function (현재 요소의 값, [현재 인덱스 값(반복 카운트)], [전체 배열]){
    // 각각의 요소가 수행할 코드 작성
  });
*/
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
// arr.includes(찾으려는 값)
// 반환값 boolean(값이 있으면 true | 없으면 false)
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 그 인덱스를 반환하는 메서드
// arr.indexOf(찾으려는 값)
// 배열의 맨 앞부터 탐색하고 가장 앞에 위치한 인덱스를 반환함
// 찾으려는 값이 없다면 -1 반환
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 가장 처음으로 만족하는(이 콜백함수가 참을 반환한다면) 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

/*
const findedIndex1 = arr4.findIndex((item) => {
  if (item === 2) return true;
});

const findedIndex2 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
})

// 화살표 함수를 더 간결하게 작성 (중괄호를 없애고 if 조건문을 작성함)
// => 이렇게 작성하면 함수가 연산식의 결과를 반환하게 됨
const findedIndex3 = arr4.findIndex((item) => item % 2 !== 0);
*/

// 조건에 만족하는 요소가 배열에 존재하지 않으면 -1 반환
const findedIndex = arr4.findIndex((item) => item === 999);

console.log(findedIndex);

/*
  const findedIndex = arr4.indexOf(999); 

  * 위와 같이 indexOf 메서드도 있는데 굳이 findIndex라는 메서드가 필요할까?
    => indexOf 메서드는 원시 타입의 값이 아닌 객체 타입의 값들이 저장된 배열에서는
      정확한 요소의 위치를 찾아낼 수가 없음
      
      차이점
      indexOf : 동등비교연산자(===)로 비교 = 얕은 비교
      findIndex : 콜백함수를 이용해서 특정 property의 값을 기준으로 비교 가능

    let objectArr = [
      { name: "이정환" },
      { name: "홍길동" },
    ];

    console.log(
      objectArr.indexOf({ name: "이정환" })
    ); // -1 출력

    console.log(
      objectArr.findIndex(
        (item) => item.name === "이정환"
      )
    ); // 0 출력

    정리
    단순한 원시타입의 값을 찾을 때 ==> indexOf
    복잡한 객체타입의 값을 찾을 때 ==> findIndex

*/

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded); // { name: "이정환" }
