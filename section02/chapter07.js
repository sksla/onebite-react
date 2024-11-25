// 배열 메서드1. 요소 조작
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 요소를 추가하고 난 다음 변경된 배열의 길이를 반환함
let arr1 = [1, 2, 3];
//arr1.push(4);

const newLength = arr1.push(4, 5, 6, 7);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 그 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 그 요소를 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 추가 후 변경된 배열의 길이 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

/* 
  * shift/unshift는 push/pop보다 비교적 느리게 동작함
  이유) 
  push/pop : 맨 뒤에 있는 요소를 조작 => 별 문제 없음
  shift/unshifts : 맨 앞의 요소를 조작 
    => 추가하거나 삭제할 때 인덱스를 한 칸씩 미루거나 당겨줘야하기 때문에

  결론 : 되도록이면 push나 pop를 통해 해결하는 것이 좋다
*/

/* 
  5. slice
  - 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환 (원본 배열의 값은 바뀌지 않음)
  - slice(자르기 시작할 인덱스, [마지막으로 잘라낼 인덱스 + 1]) => 첫번째 인수의 인덱스부터 두번째 인수의 인덱스 "전"까지 잘라냄
  - 두번째 인수는 생략 가능 => 첫번째 인수의 인덱스부터 끝까지 잘라냄
  - 인수에 음수값을 넣으면 뒤에서 부터 자름 
    ex) slice(-n) : 뒤에서 부터 n개 자름
*/
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]
let sliced2 = arr5.slice(2); // [3, 4, 5]
let sliced3 = arr5.slice(-3); // [3, 4, 5]

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
