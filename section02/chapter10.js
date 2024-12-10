// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

// 특정 날짜,시간으로 생성하는 방법
// 1-1) 문자열("yy-mm-dd/hh:mi:ss") => -는 슬래쉬(/), 점(.) 또는 띄어쓰기로 대체 가능
//let date2 = new Date("1997-01-07/10:10:10"); // 문자열 (-, ., /)로 구분

// 1-2) 숫자
let date2 = new Date(1997, 1, 7, 23, 59, 59); // 년, 월, 일, 시, 분, 초

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정 세계시, UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// ==> 복잡한 시간 정보를 숫자로 관리할 수 있어 편리
// * getTime() : 날짜 객체의 시간에 해당하는 타임스탬프를 계산해서 반환하는 메소드
let ts1 = date1.getTime();

// 타임스탬프를 이용한 Date 객체 생성
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 주의 : JavaScript의 월은 "0"부터 시작함!
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 영문 날짜
console.log(date1.toLocaleString()); // 현지화된 형태로
