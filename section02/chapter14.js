// 비동기 작업 처리하기 3. async/await

/*
  * async
  어떤 함수를 비동기 함수로 만들어주는 키워드
  함수가 프로미스를 반환하도록 변환해주는 그런 키워드
*/
// async를 붙이면서 동기적으로 작동하는 함수를 비동기 작업을 하는 Promise를 반환하는 함수로 바꿀 수 있음
// - async 붙이기 전 : 일반 객체를 반환하는 동기 함수
// - async 붙이고 난 후 : Promise 객체 반환(state: fulfilled, result(결과값): object)하는 비동기 함수
/*
async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}
*/

// 애초에 Promise를 반환하는 함수였다면 이때의 async 키워드는 별다른 기능을 하지않고 그냥 Promise객체를 반환하도록 내버려둠
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// ==> async는 Promise를 반환하지 않는 함수에 붙여서 자동으로 해당 함수를 비동기로 작동하도록 변환하는 기능
// async는 밑의 await이라는 키워드와 함께 사용했을 때 위력을 가짐

/* 
  * await
  async 함수 내부에서만 사용이 가능 한 키워드
  비동기 함수가 다 처리되기를 기다리는 역할
  - 비동기 작업이 끝날때까지 해당 라인에서 기다려 주고 완료된 후 비동기 작업의 결과값을 반환함
*/
// await 사용 전
/*
function printData() {
  getData().then((result) => {
    console.log(result);
  });
}
*/

// await 사용 후
async function printData() {
  const data = await getData(); // 해당 라인에서 비동기 작업이 끝날때까지 기다린 후 비동기 작업의 결과값 반환
  console.log(data);
}

printData();
