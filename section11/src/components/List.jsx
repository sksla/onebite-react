// 전체 Todo (TodoItem의 모음)
import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
//import { TodoContext } from "../App";
import { TodoStateContext } from "../App";

const List = () => {
  //const { todos } = useContext(TodoContext);
  const todos = useContext(TodoStateContext);
  /*
    * const {todos}와 같이 구조 분해 할당으로 받지 않는 이유
      ==> TodoStateContext.Provider의 value 속성에 바로 todos를 넣음 
          --> value에 전달된 값은 객체가 아닌 todos 자체임
    
    >> 정리 
    - value={todos} : todos가 바로 전달됨 --> const todos = useContext(TodoStateContext);
    - value={{todos}} : todos가 객체로 감싸져 전달됨 --> const {todos} = useContext(TodoStateContext); (구조 분해 할당)
  
  */
  // 왜 {todos}가 아니지?
  // ==> TodoStateContext.Provider의 value 속성에 바로 todos를 넣음

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  /*
  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
  */

  // 위의 코드 합친 버전
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    // 전체 Todo 개수
    const totalCount = todos.length;

    // 완료 Todo 개수
    /* - filter메서드는 배열 내 전체 요소를 다 순회해서 데이터가 많을수록 시간이 오래 걸림
         ==> useMemo 사용 */
    const doneCount = todos.filter((todo) => todo.isDone).length;

    // 미완료 Todo 개수
    const notDoneCount = totalCount - doneCount;

    // 위의 3개 객체로 반환
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성배열 : deps => deps에 포함된 값이 변경되었을 때만 콜백함수 실행

  /*
    1번 인자 function : useMemo 콜백 함수의 반환값(totalCount, doneCount, notDoneCount)이 
                       const {totalCount, doneCount, notDoneCount}로 들어감
    2번 인자 deps : 앞의 콜백 함수 반환값을 deps를 기준으로 메모이제이션 함,
                    todos의 값이 변경되면 콜백 함수 실행              
  */

  return (
    <div className="List">
      <h4>Todo List 🌿</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
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
          return <TodoItem key={todo.id} {...todo} />;
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
