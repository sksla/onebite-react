// 개별 Todo (한 줄)
import "./TodoItem.css";

// List.jsx에서 todo 객체 안의 내용들 받아오기
// List.jsx에서 onUpdate(체크박스) 함수 받아오기
const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  // 체크 박스 기능
  const onChangeCheckbox = () => {
    onUpdate(id);
    // onUpdate 함수의 인수로 id 전달
  };

  return (
    // props로 받아온 todo의 내용들 적용시키기
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        // onChange 기능에 체크박스 기능 넣기 (<button>이 아닌 <input>이기 때문에 onChange 이용, onClick X)
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
