// 연산자(Operator) : 프로그래밍에서의 다양한 연산을 위한 기호, 키워드

// 1. 대입 연산자(=) : 저장할 변수 = 저장할 값
let var1 = 1;

// 2. 산술 연산자 (+ - * / %)
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 연산 우선순위 있음
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
//num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
console.log(num7);

// 4. 증감 연산자(++, --)
let num8 = 10;
++num8; // 전위 연산 : 현재 라인부터 바로 적용
++num8; // 후위 연산 : 다음 라인부터 적용

// 5. 논리 연산자(||, &&, !)
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not);

// 6. 비교 연산자(===, !==, <, >, <=, >=)
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

// === : 값의 자료형까지 같은지까지 비교(권장)
// == : 값 자체만 비교
console.log(1 === "1");
console.log(1 == "1");

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

console.log(comp5, comp6);
