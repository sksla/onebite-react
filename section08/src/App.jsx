// 전체
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useEffect, useRef } from "react";

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

function App() {
  // TodoItem을 저장할 state
  // 추가 : 내용을 입력하고 추가 버튼을 누르면 todos state값을 변경해줘야 함
  const [todos, setTodos] = useState(mockData);
  // 임시 데이터를 초기값으로 설정

  // Todo의 index 역할을 할 useRef 선언 => 중복글 구분하기 위해
  const idRef = useRef(3); // 임시 데이터 id와 겹치지 않도록 3으로 설정

  // 추가 기능 ====================================================================

  // Editor.jsx에서 Todo 입력값(content)를 가져와서 기존의 데이터 객체로 만드는 함수
  const onCreate = (content) => {
    // 이 데이터 객체를 todos state 배열해 추가해야 함
    const newTodo = {
      id: idRef.current++, // 새로 부여한 index를 증가시켜 id에 부여
      isDone: false,
      content: content, // props로 받은 todo 입력값을 content에 부여
      date: new Date().getTime(),
    };

    // state값 업데이트 하기
    // spread 연산자(...)로 기존의 todos state 배열의 값을 펼쳐준 후 추가할 newTodo 데이터를 넣는다.
    setTodos([newTodo, ...todos]);

    // state의 값은 상태변화함수를 호출해서만 수정 가능 => 그래야 변경된 state의 값을 리액트가 감지할 수 있음
    // => todos.push{newTodo} (X) : 직접 변경 불가
  };
  // ==================================================================================

  // 체크박스 기능 =========================================================================

  // 기존 todos state 배열에서 targetId와 id가 일치하는 todo의 isDone를 바꾼 배열로 변경하는 함수
  const onUpdate = (targetId) => {
    // 체크박스가 클릭된 요소의 id(targetId를 인수로 받아옴)

    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
      /* 
        // if문으로 했을 때
        todos.map((todo) =>{
          
          if(todo.id === targetId) { 
            // 일치 => todo를 spread연산자(...)로 풀어헤쳐서 isDone의 상태를 현재의 반대값으로 만들기
            return {
              ...todo,
              isDone : !todo.isDone
            }        
          }

          // 일치 X => 원래의 todo 반환
          return todo
          
        })
      */
    );
  };
  //===========================================================================================

  // 투두 삭제 기능 ============================================================================

  // 기존 todos state 배열에서 targetId와 id가 일치하는 요소를 삭제한 배열로 변경하는 함수
  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  // ==========================================================================================

  return (
    <div className="App">
      <Header />
      {/* Editor.jsx에 props로 onCreate함수 전달 */}
      <Editor onCreate={onCreate} />
      {/* List.jsx에 props로 todos state, onUpdate(체크박스 기능), onDelete(삭제 기능) 전달 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
