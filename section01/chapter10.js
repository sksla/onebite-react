// 반복문(Loop, Iteration) : 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

// for문
/*
    for(초기식; 조건식; 증감식){
        반복하고자 하는 동작
        [break;]
        [continue;]
    }
    초기식 : 초기값 설정(변수 선언 및 초기화) => 카운터변수
    조건식 : 언제까지?
    증감식 : 매 반복마다 카운터 변수의 값 증감시키는 용도 
    break : 반복문 종료
    continue : 건너뛰기
*/
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break; // 반복문 종료
  }
}
