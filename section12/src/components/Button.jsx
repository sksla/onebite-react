import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    // 클래스명은 버튼 컴포넌트명과 동일하게 설정
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
