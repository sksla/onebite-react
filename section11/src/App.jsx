// 전체
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import {
  useState,
  useReducer,
  useRef,
  useCallback,
  createContext,
  useMemo,
} from "react";

/*
  - props의 단점 : 부모 -> 자식으로만 데이터를 전달함 (부모 -> 자손 ==> X ...) == Props Drilling
  
  >> Props Drilling : 컴포넌트 트리에서 데이터를 하위 컴포넌트로 전달하기 위해 
                      중간 컴포넌트를 통해 프로퍼티를 내려주는 것

  * context : 컴포넌트 간의 데이터를 전달할 수 있는 기능
              

    - 데이터 보관소(객체) 역할
    - props의 단점인 Props Drilling 해결 가능
    - context는 여러개 / 분리하여 설정 가능

  * context 생성
    1. context 생성 메서드 불러오기
      ex) import {createContext} from "react"

    2. context 선언하기 (컴포넌트 외부에 선언)
      ==> 굳이 App 컴포넌트가 리렌더링 될 때마다 재생성될 필요가 X
      ex) const 변수명 = createContext();
    
    3. 컴포넌트 감싸기
      ex) <변수명.Provider value={공급할 데이터}>
            <컴포넌트 />
          </ 변수명.Provider>
      - Provider 컴포넌트 내부의 컴포넌트들은 변수명 context의 데이터를 공급 받을 수 있으
      - 공급할 데이터는 value로 전달


  * context 데이터 가져오기 ==> List.jsx, TodoItem.jsx, Editor.jsx
    1. 데이터가 있는 컴포넌트에서 context 내보내기
      ex) export const TodoContext = createContext();

    2. 데이터를 사용할 컴포넌트에서 context 불러오기 & useContext import로 불러오기
      ex) import {useContext} from "react"
          import {변수명} from "./App";

    3. context 데이터 할당하기 : useContext(데이터를 불러오고자 하는 context명);
      - useContext : 인수로 전달한 context로부터 공급된 데이터를 반환해주는 함수
      - 가져온 데이터를 구조 분해 할당을 통해 onCreate에 할당
      ex) const {onCreate, onDelete} = useContext(TodoContext)

  경우 1. TodoContext라는 하나의 context에 모든 데이터 담았을 때
          ==> ❓문제 발생 

      ❓ TodoItem 컴포넌트를 memo 처리했음에도 리렌더링 되는 이유 (= 최적화가 풀린 이유!)
          
        >> 새로운 Todo를 추가하거나 수정, 삭제할 경우, App 컴포넌트의 todos state가 변경되어
           App 컴포넌트가 리렌더링 됨
          ==> Provider 컴포넌트가 value props로 전달하는 객체 자체가 다시 생성됨

      ❗해결방법 : TodoContext를 2개로 분리하여 해결
                  - 변경될 수 있는 값 ==> TodoStateContext (todos)
                  - 변경되지 않는 값 ==> TodoDispatchContext (onCreate, onUpdate, onDelete)
              

    
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

//export const TodoContext = createContext(); ==> 문제 해결 : 두 개로 분리
// 변화할 값
export const TodoStateContext = createContext();
// 변화하지 않는 값
export const TodoDispatchContext = createContext();

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

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // TodoDispatchContext로 전달하는 데이터들은 변화 X, 리렌더링 불필요 ==> useMemo 사용
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);
  // deps를 빈 배열로 뒀기 때문에 Mount 이후엔 재생성 X

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* 문제 발생 => TodoItem 컴포넌트를 memo 처리했는데도 리렌더링 됨(= 최적화가 풀림) */}
      {/* <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </TodoContext.Provider> */}

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
