//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
//import Header from "./components/Header.jsx";
// 파일의 확장자까지 안써줘도 됌
//import Header from "./components/Header";
//import Main from "./components/Main";
//import Footer from "./components/Footer";
//import Button from "./components/Button";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

/*
function Header(){
  return(
    <header>
      <h1>header</h1>
    </header>
  )
}
*/

// 모듈화를 위해 컴포넌트 파일로 따로 만들기
/*
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
*/

// html을 반환하는 함수 ==> 컴포넌트
// 컴포넌트 함수명의 첫글자는 무조건 대문자로!!
// 컴포넌트 내의 컴포넌트 : 자식 컴포넌트
// 모든 컴포넌트는 App 컴포넌트의 자식이어야 함 ==> 계층구조
// App 컴포넌트는 최상위 컴포넌트로 root 컴포넌트라고 함

function App() {
  //const [count, setCount] = useState(0);
  /*
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
      <Button {...buttonProps} />
      <Button text={"자식요소"}>
        <div>자식요소</div>
      </Button>
      <Button text={"헤더컴포넌트"}>
        <Header />
      </Button>
    </>
  );
  */

  //const [count, setCount] = useState(0);
  //const [light, setLight] = useState("OFF");

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
