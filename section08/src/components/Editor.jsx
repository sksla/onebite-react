// Todo 추가하는 부분
import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  // <input> 입력값을 저장할 state 선언
  const [content, setContent] = useState("");

  // 입력칸이 공백일 때 추가버튼을 누르면 입력칸에 포커싱을 주기 위한 ref 선언
  const contentRef = useRef();

  // <input> 입력값을 content state에 저장하기 위한 변경함수
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // Enter를 치면 Todo 등록하는 함수
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // Enter 또는 버튼 클릭시 실행되는 함수
  const onSubmit = () => {
    // 빈 문자열 추가 방지 & 입력칸 포커싱
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    // App.jsx의 onCreate 함수에 인자값으로 content 전달하여 실행 => 위에서 props로 onCreate 함수 받아와서 가능
    onCreate(content);

    // Todo 추가 후 input 입력칸 비우기(content State 초기화)
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // 입력칸 포커싱을 위한 ref 연결
        value={content}
        onKeyDown={onKeydown} // 사용자가 키를 눌렀을 때 동작
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
