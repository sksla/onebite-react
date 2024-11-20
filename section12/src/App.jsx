import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
/*
  !! 주의사항 !!
  1. Routes 컴포넌트 안에는 Route컴포넌트만 들어갈 수 있음
  2. Routes 컴포넌트 바깥에 있는 요소는 경로와는 상관없이 모든 페이지에서 렌더링 됨

  * Link : a 태그와 같은 역할을 함, 페이지 깜빡임 없음
      - a 태그 사용시 페이지 깜빡임 발생


  => 리액트 내부에서 페이지를 이동해야할 때 Link 태그를 이용하자

  * useNavigate

  * 동적 경로 (Dynamic Segments)
*/
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* <Route path="/diary" element={<Diary />} /> */}
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        {/* * => 와일드 카드 */}
      </Routes>
    </>
  );
}

export default App;
