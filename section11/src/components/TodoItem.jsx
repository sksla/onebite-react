// 개별 Todo (한 줄)
import "./TodoItem.css";
import { memo, useContext } from "react";
//import { TodoContext } from "../App";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  // context
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  // 체크 박스 기능
  const onChangeCheckbox = () => {
    onUpdate(id);
    // onUpdate 함수의 인수로 id 전달
  };

  // 투두 삭제 기능
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    // props로 받아온 todo의 내용들 적용시키기
    <div className="TodoItem">
      <input
        // onChange 기능에 체크박스 기능 넣기 (<button>이 아닌 <input>이기 때문에 onChange 이용, onClick X)
        onChange={onChangeCheckbox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
      {/* 삭제 버튼의 이벤트 핸들러 설정 */}
    </div>
  );
};

// 고차 컴포넌트 (HOC, Higher Order Component)
/* 
  방법 1. TodoItem의 memo 함수 안에 두 번째 인수로 콜백 함수를 추가하여 커스터마이징
  : 컴포넌트가 리렌더링 될 때마다 해당 컴포넌트에 과거의 props와 현재의 props를 전달
    => 함수의 반한값에 따라 props가 바뀌었는지 판단
*/
/*
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음
  // F -> Props 바뀜

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
*/

/* 
  방법 2. useCallback 사용하기
  : 리렌더링 되더라도 다시 생성되지 않게 방지하는 방법
  ==> App.jsx에 있음
*/
export default memo(TodoItem);
