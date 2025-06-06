/*
const Button = (props) => {
   //console.log(props);
};
*/
const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    //<button style={{ color: props.color }}>
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// props의 기본값 설정
Button.defaultProps = {
  color: "black",
};

export default Button;
