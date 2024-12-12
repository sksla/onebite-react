// 비동기 작업 처리하기 2. Promise
/*
  * Promise란?
  - 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JavaScript 내장 객체
  - setTimeout과 같은 비동기 작업들을 감싸는 객체
  - 효능 : 비동기 작업을 처리하는데 필요한 거의 모든 기능을 제공해줌
    - 비동기 작업 실행
    -     "      상태 관리
    -     "      결과 저장
    -     "      병렬 실행
    -     "      다시 실행
    - 기타 등등...

  - Promise 객체의 속성들
    > Prototype: 객체 종류(Promise)
    > PromiseState : 상태
    > PromiseResult : 결과값
    
  * Promise의 3가지 상태
    ==> Promise는 비동기 작업을 진행 단계에 따라서 세가지 상태로 나눔
    1. 대기(Pending) : 아직 작업이 완료되지 않은 상태 
                        ex) 유튜브 영상 로딩 중
    2. 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리된 상태
                        ex) 영상 로딩 완료 --> 해결(resolve)
                            유튜브 영상 시청 가능 --> 성공 (Fulfilled) 상태
    3. 실패(Rejected) : 비동기 작업이 실패한 상태 
                        ex) 유튜브 영상 로딩 실패 --> 거부(reject)
                            유튜브 영상 시청 불가능한 상태 --> 실패 (Rejected) 상태

    대기 (Pending)  -----해결(resolve)----> 성공 (Fulfilled)
                   ㄴ----거부(reject)-----> 실패 (Rejected)
    
  * Promise 생성 방법 
  - 생성자 이용, 콜백함수를 인수로 전달
  - 인수로 전달되는 콜백함수를 실제로 비동기 작업을 실행하는 함수라는 뜻에서
    ==> "executor 함수"라고 부름
  - executor 함수에는 resolve, reject라는 두 개의 매개변수가 전달됨
    > resolve : 비동기 작업을 성공상태로 바꾸는 함수가 들어있음
                ==> 비동기 작업이 성공했다고 알리고 싶을 때 호출
    > reject : 비동기 작업을 실패 상태로 바꾸는 함수가 들어있음
                ==> 비동기 작업이 실패했다고 알리고 싶을 때 호출 

    ==> resolve, reject 모두 인수로 Promised의 결과값을 전달해 줄 수 있음
  
  
  ex) const promise = new Promise((resolve, reject) => {
        // 비동기 작업 살행하는 함수 == executor
        resolve([결과값]); // 성공상태로 바꿀 때
        reject(); // 실패 상태로 바꿀 때 , Uncaugt 오류 뜨고 실패 상태로 바뀜
      });
            

*/
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});
*/

// * then 메서드
// -> 그 후에
// 인수로 callback 함수 넣어주면 Promise가 "성공"했을 때(excutor 안에서 resolve를 호출할 때)
// ==> 그 후에 then 메서드에 전달한 콜백함수를 실행시켜줌
//     동시에 resolve에 인수로 전달한 결과값을 매개변수로까지 제공해줌
/*
promise.then((value) => {
  console.log(value);
});
*/

// * catch 메서드
// -> 실패 버전의 then 메서드
// 인수로 callback함수 넣어주면 Promise가 "실패"했을 때 catch메소드에 전달한 콜백함수 실행함
// 동시에 reject에 인수로 전달한 결과값을 매개변수로 제공
/*
promise.catch((error) => {
  console.log(error);
});
*/

// then, catch 메서드 모두 Promise객체를 그대로 반환함 --> 메소드 체이닝 가능
//  ==> Promise Chaining(Promise 체이닝) 이라고 표현
// Promise Chaining
/*
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// 비동기 작업을 고정된 값으로 진행하지 않고 함수를 하나 만들어
// 함수 안에서 Promise 객체를 새롭게 생성하면서 동적으로 매개변수로 받아 숫자값을 바꿔가면서 사용할 수 있도록 개선하는 방법
function add10(num) {
  // 1. 새로운 promise 객체 생성
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    // 2. Promise 객체 안 비동기 작업 실행
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise; // 3. promise객체를 그대로 반환
}

// Promise 객체를 이용한 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달하는 방법
// ==> 좋지 않은 방법 (콜백 지옥 형성)
/*
const p = add10(0);
p.then((result) => {
  console.log(result); // 1. 10

  const newP = add10(result);
  newP.then((result) => {
    console.log(result); // 2. 20
  });
});
*/

// 콜백 지옥을 방지하기 위한 Promise의 기능
// => then 메소드 안에서 새로운 Promise를 반환해주면 반환된 Promise의 객체가 then 메소드의 결과값이 됨

add10(0)
  .then((result) => {
    console.log(result); // 1. 10
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 2. 20
    return add10(undefined);
  })
  .then((result) => {
    console.log(result); // 숫자가 x, reject 실행(Promise의 상태 실패로 바뀜) => catch 실행
  })
  .catch((error) => {
    // 중간 어디에서든 오류가 발생하더라도 마지막 catch 메서드가 실행됨
    console.log(error); // 3. 30
  });
