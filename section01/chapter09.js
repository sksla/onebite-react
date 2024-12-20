// 조건문 : 특정조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
//          대표적으로 if, switch 조건문

// 1. if 조건문 (if문, if-else문, if-else if문)
// 복잡한 여러개의 조건을 이용할 때 사용
let num = 9;

if (num >= 10) {
  //   console.log("num은 10 이상입니다.");
  //   console.log("조건이 참 입니다!");
} else if (num >= 5) {
  //   console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  //   console.log("num은 3 이상입니다.");
} else {
  //   console.log("조건이 거짓 입니다!");
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
// -> 일치하는 case문부터 그 아래에 있는 모든 코드 다 수행시킴
// -> break : case블록의 실행을 종료하고 switch문을 빠져나가게 해주는 역할
// 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶을 때 사용

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    // if문의 else 역할
    console.log("그런 동물은 전 모릅니다");
  }
}

let isTrue = true;

switch (isTrue) {
  case true: {
    console.log("참");
    break;
  }
  case false: {
    console.log("거짓");
    break;
  }
}
