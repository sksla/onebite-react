/*
// CJS 방식
//const moduleData = require("./math");
const { add, sub } = require("./math");

//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

console.log(add(1, 2));
console.log(sub(1, 2));

//console.log(moduleData);
*/

// ESM(ES Module) 방식 => 확장자를 꼭 붙여줘야 함!
//import mul from "./math.js";
//import { add, sub } from "./math.js";
import mul, { add, sub } from "./math.js";

// 라이브러리 불러올 땐 경로가 아닌 라이브러리명을 적음
import randomColor from "randomcolor";

//console.log(add(1, 2));
//console.log(sub(1, 2));
//console.log(mul(2, 3));

const color = randomColor();
console.log(color);
