// 전체 Todo (TodoItem의 모음)
import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

// App.jsx에서 todo state 받아오기(구조분해할당)
// App.jsx에서 onUdpate(체크박스 기능) 받아오기(구조분해할당)
const List = ({ todos, onUpdate, onDelete }) => {
  // ======검색 기능========
  // 검색어 저장할 state 선언
  const [search, setSearch] = useState("");

  // 검색어 입력시 입력된 검색어로 state값 변경하는 변경함수 실행
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // 공백이면 전체 리스트 반환
    if (search === "") {
      return todos;
    }
    // 공백 X
    // todo를 매개 변수로 받아(todo 모두 순회) todo 내용에 검색어(search)가 포함되어있는 일정만 필터링해서 반환
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase())
      // 대소문자 구분 X: 검색어를 소문자로 변환해서 검색
    );
  };

  // 검색 필터링 함수를 변수에 담기 + 리렌더링 될 때마다 호출
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌿</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {/* map() 메서드를 통해 todos state 배열에 담긴 데이터를 리스트로 렌더링 */}
        {filteredTodos.map((todo) => {
          // 매개변수 todo엔 하나의 TodoItem 객체가 들어있음
          // 필터링 된 todos를 렌더링
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
          // {...todo} : 매개변수 todo의 모든 데이터가 props로 TodoItem.jsx에 전달됨
          // key={todo.id} : 컴포넌트 렌더링 시 모든 item 컴포넌트에 반드시 key props를 고유한 값으로 전달해줘야 함
          // onUpdate : TodoItem.jsx에 props로 onUpdate 함수 전달하기
          // onDelete : TodoItem.jsx에 onDelete 함수 전달하기
        })}
      </div>
    </div>
  );
};

/*
  * 객체의 각 속성을 개별로 전달하려면 ==> {...todo} 형식
    : <TodoItem {...todo} /> == < TodoItem id={1} content="할 일" isDone{false} /> 

  * 객체 자체를 하나의 prop으로 전달하려면 todo={객체가 담긴 변수} 형식 사용
    : <TodoItem todo={todo} />
*/

export default List;
