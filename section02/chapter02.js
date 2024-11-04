/*
  * 단락 평가(Short-circuit Evaluation)이란?
    - AND 연산자(&&) 또는 OR 연산자(||) 같은 논리 연산식에서 첫번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면
      두번째 피연산자의 값에는 아예 접근하지 않는 특징
      논리 연산자(&&, ||)를 사용할 때 표현식의 왼쪽에서 오른쪽으로 평가하며, 필요한 경우에만 평가를 중단함
      ==> 이 방법을 통해 불필요한 계산을 피하고 효율적으로 값을 얻을 수 있습니다.

    let varA = false;
    let varB = true;

    > AND 연산자 => 왼쪽 값이 false일 때 오른쪽을 평가하지 않고 바로 false 반환
    console.log(varA && varB);

    > OR 연산자 => 왼쪽 값이 true일 때 오른쪽을 평가하지 않고 바로 true 반환
    console.log(varB || varA);

*/

// 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지할 수 있는 기능을 가지고 있음
// Truthy 또는 Falsy한 값도 적용됨
/*
function returnFalse() {
  console.log("False 함수");
  //return false;
  return undefined; // Falsy한 값
}

function returnTrue() {
  console.log("True 함수");
  //eturn true;
  return 10; // Truthy한 값
}

console.log(returnFalse() && returnTrue()); // returnTrue함수는 호출 X (단락 평가)
console.log(returnTrue() && returnFalse()); // 두 개의 함수 모두 호출(단락 평가 작동 X)
console.log(returnTrue() || returnFalse()); // returnFalse함수는 호출 X (단락 평가)
*/

// 단락 평가 활용 사례

/*
// 단락 평가 활용 전
function printName(person) {
  if (!person) {
    console.log("person에 값이 없음");
  }
  console.log(person.name);
}
*/

// 단락 평가 활용 후

/*
function printName(person) {
  console.log(person && person.name);
}
*/

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // "person의 값이 없음"
printName({ name: "이정환" }); // "이정환"

// Truthy1 || Truthy2 ==> 첫번째 Truthy한 값이 반환
// Truthy1 && Truthy2 ==> 두번째 Truthy한 값이 반환
// && (AND) 연산자는 **모든 피연산자가 참(또는 truthy)**일 경우에 마지막 피연산자를 반환함.
