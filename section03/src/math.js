// math 모듈

//CJS(common js) Module
/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
*/

/*
module.exports = {
  add,
  sub,
};
*/

// ES Module 방식
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// function 앞에 export 붙이면 아래는 안 적어도 됨
//export { add, sub };

// math 모듈을 대표하는 기본값
export default function multiply(a, b) {
  return a * b;
}
