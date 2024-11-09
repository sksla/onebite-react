import "./TodoItem.css";

// List.jsx에서 todo 객체 안의 내용들 받아오기
const TodoItem = ({ id, isDone, content, date }) => {
  return (
    // props로 받아온 todo의 내용들 적용시키기
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
