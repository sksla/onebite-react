// 전체
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useReducer, useRef, useCallback } from "react";

/*
  1. 최적화  => List.jsx
  2. useMemo => List.jsx
  3. memo => Header.jsx
  4. 객체 타입의 최적화 방법 2가지 
     방법 1. memo 함수 안 두 번째 인수로 콜백함수 추가하여 커스터마이징 ==> TodoItem.jsx
     방법 2. useCallback 사용하기 ==> TodoItem.jsx, App.jsx
*/

/*
  * useCallback : 불필요한 함수의 재생성 방지
    - 객체 타입을 최적화 하는 방법
    - 리렌더링 되더라도 다시 생성되지 않게 방지하는 기능

  * useCallback 사용
    1. useCallback을 import로 불러옴
    2. useCallback의 구조
    ex) useCallback(function, [deps])
        - function : 최적화할 함수 (재생성 방지할 함수)
        - deps : 최적화 기준이 될 배열
          --> deps를 빈 배열로 놔둠 ===> Mount(탄생)될 때에만 함수 생성, 그 뒤로는 생성 X
        
        - function을 그대로 생성해 반환해줌
        - deps가 변경되었을 때만 최적화 함
*/

// 임시 데이터(기본 데이터) : 계속 렌더링할 필요 없으니 App 컴포넌트 밖에 선언, 데이터가 어떤 형태로 있어야 하는지 설정
const mockData = [
  {
    id: 0, // index
    isDone: false, // 체크박스
    content: "React 공부하기", // todo 내용
    date: new Date().getTime(), // todo 추가 시간
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3); // 임시 데이터 id와 겹치지 않도록 3으로 설정

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);
  // deps를 빈 배열로 놔둠 -> Mount될 때에만 함수 생성, 그 뒤로는 생성 X

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  /*
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  const func = useCallback(() => {}, []);
  */

  // 위에 걸 합친 버전
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* Editor.jsx에 props로 onCreate함수 전달 */}
      <Editor onCreate={onCreate} />
      {/* List.jsx에 props로 todos state, onUpdate(체크박스 기능), onDelete(삭제 기능) 전달 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
