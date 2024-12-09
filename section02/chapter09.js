// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 웹서비스 개발 시 특정 조건에 의한 검색 기능 또는 카테고리별 필터 같은 기능을 만드는데 거의 필수적으로 사용

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

/*
const tennisPeople = arr1.filter((item) => {
  if(item.hobby === "테니스") return true;  
})
*/

// + 화살표 함수를 조건문만 따로 떼어서 조건식만 반환하는 방식으로 단축해서 사용 가능
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 "사전순"으로 정렬하는 메서드
// 원본 배열이 변경됨

let abc = ["b", "a", "c"];
abc.sort(); // ["a", "b", "c"]; ==> 문자는 사전순으로 정렬됨

let nums = [10, 3, 5];
nums.sort(); // [10, 3, 5] ==> 숫자는 정렬이 제대로 이루어지지 않음

// 숫자의 대소관계를 기준으로 정렬하는 방법
let arr3 = [10, 3, 5];

// 오름차순 정렬 [3, 5, 10]
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // 양수 반환 : 둘 중 더 작은 값이 앞에 --> b, a
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // 음수 반환 : 둘 중 더 작은 값이 뒤에 --> a, b
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 내림차순 정렬 [10, 5, 3]
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 사전순으로 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
// join([구분자]) 구분자 생략시 기본값 ,
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined);
