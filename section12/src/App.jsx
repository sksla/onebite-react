import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
// 이미지 불러오는 코드들을 별도의 모듈로 분리함 => src/util/get-emotion-image.js
import { getEmotionImage } from "./util/get-emotion-image";

// 공통 컴포넌트
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
/*
  
*/
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      {/* 일반 버튼은 type 생략 가능 ==> 타입이 생략된 버튼 클래스 네임 Button_undefined 으로 설정됨
      css에선 그런 이름의 css를 설정한 적이 없기 때문에 기본적인 스타일 버튼으로 잘 렌더링 됨
      */}
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* <Route path="/diary" element={<Diary />} /> */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        {/* "*" => 와일드 카드, switch case문의 default와 같은 역할 */}
      </Routes>
    </>
  );
}

export default App;
