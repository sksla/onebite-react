import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./Even";

/*
 * 라이프 사이클(LifeCycle) : 프로그램의 실행부터 종료까지 시간의 흐름에 따른 단계적인 과정
    > Mount(탄생)
      : 컴포넌트가 탄생하는 순간 = 화면에 처음 렌더링 되는 순간
    > Update(변화)
      : 컴포넌트가 리렌더링 되는 순간
    > UnMount(죽음)
      : 컴포넌트가 화면에서 사라지는 순간 = 렌더링에서 제외되는 순간
  
  * 라이프 사이클 제어
    : 라이프 사이클 단계별로 컴포넌트들이 각각 다른 작업을 수행하도록 하는 것
      => useEffect를 이용하여 구현 가능

  * useEffect
    : 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
      > 컴포넌트의 사이드 이펙트(Side Effect)를 제어하는 React Hook

  * 사이드 이펙트(Side Effect)
    : 부수적인 효과, 파생되는 효과(=어떠한 동작에 따라 발생하는 효과) / 우리말로는 '부작용'

  * useEffect 구조
    useEffect(function, [deps])
    - function : 실행하고자 하는 콜백 함수
    - deps : 의존성 배열(검사하고자 하는 특정 값 배열)
    => 두번째 인수로 전달한 배열[]의 값이 변경되면, SideEffect가 발생하여 첫번째인수로 전달한 콜백함수를 실행시킴
 */

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  /*
  useEffect(() => {
    console.log(`count:${count} / input:${input}`);
  }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps
  */

  // 1. 마운트(탄생) 제어하기 ==> deps[]를 빈 배열로 두기
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링 ==> deps[] 생략하기 : 마운트되었을때 한번 실행된 후, 리렌더링(업데이트)될 때마다 실행
  useEffect(() => {
    // 업데이트되는 순간에만 콜백함수 실행시키려면 useRef이용
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음 => 클린업(정리함수)> useEffect의 콜백 함수가 반환하는 함수
  // Even.jsx 참고

  const onClickButton = (value) => {
    setCount(count + value); // 비동기로 업데이트 됨
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
