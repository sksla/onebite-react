// 전체 Todo (TodoItem의 모음)
import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

/*
  * 최적화(Potimization) : 웹 서비스의 성능을 개선하는 모든 행위
    - 서버의 응답 속도 개선
    - 정적 파일(이미지, 동영상 등) 로딩 개선
    - 불필요한 네트워크 요청 줄임
    - 불필요한 리렌더링 방지
  
  > 최적화 하는 순서
    1. 기능 구현 완성
    2. 최적화
    3. 기능 추가, 수정이 힘들기 때문에 기능 구현이 완성된 후 마지막에 최적화 진행

  > 최적화 대상
    - 꼭 필요한 부분에만 최적화 사용
*/

/*
  * useMemo : 메모이제이션(memoization) 기법을 기반으로 불필요한 연산을 최적화하는 React Hook
  
  > 메모이제이션(memoization) : 최초의 연산 값을 메모리에 보관, 
                                동일한 연산이 다시 발생 => 다시 계산 X, 저장되어 있는 결과값 반환하는 기술
  
  * useMemo 구조
    
  > useMemo(function, [deps])
    - function : 메모이제이션할 연산
    - deps : 의존성 배열(검사하고자 하는 특정 값 배열)
    ==> 두 번째 인수인 deps의 값의 변경되면, SideEffect가 발생하여 첫 번째 인수로 전달한 콜백 함수를 실행시킴

    ex) const value = useMemo(()=>{
          return calculate();
        }, [item])
    - useMemo는 콜백함수가 반환하는 값을 그대로 다시 반환함
    - useEffect와 구조 비슷
                                
                               
*/

const List = ({ todos, onUpdate, onDelete }) => {
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
