import useInput from "./../hooks/useInput";
/*
    - 2017년도 이전의 React.js
    Funtion 컴포넌트 : UI 렌더링만 가능
    Class 컴포넌트 : 모든 기능 이용 가능 ex) State, Ref 등...
                    대부분의 사람들 이용
                    but 문법 복잡함ㅠㅠ!!

    ==> 함수 컴포넌트에서 class 컴포넌트의 기능을 "낚아채서" 이용할 수 있도록 도와주는 기능 개발함

    - 오늘날의 React.js
    Funciton 컴포넌트 : with React Hooks 

    * React Hooks란?
    >> class 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드
      (ex. useState, useRef, useEffect, useReducer 등...) 
      특징 1 : Hooks는 이름 앞에 접두사 use가 붙음
      특징 2 : 각각의 메서드는 Hook(훅)이라고 부름    
    
    * Hook의 특징
      1. 함수 컴포넌트, 커스텀 훅(Custom Hook) 내부에서만 호출 가능
      2. 조건문, 반복문 내부에서는 호출 불가
      3. 나만의 Hook도 제작 가능(Custom Hook)
    
*/

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//const state = useState(); //==> 외부에서 호출 시 오류 발생
// 2. 조건부로 호출될 수는 없다
// => 조건문이나 반복문 내부에서 훅 호출 시 서로 다른 훅들의 호출 순서가 엉망이 됨 --> 내부적 오류 발생
/* 3. 나만의 훅(Custom Hook) 직접 만들 수 있다
    > 만드는 방법 : 함수명 앞에 use 붙이기
    > 컴포넌트마다 반복되는 로직 + Hook을 이용하는 로직
      ---> 커스텀 훅으로 분리하여 사용하면 좋음

    +) 커스텀훅은 src폴더 내부에 hooks라는 폴더에 별도의 이름으로 보관하는 것이 일반적
*/
/* 커스텀 훅 ==> 별도의 파일로 분리
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}
*/

const HookExam = () => {
  /* 2 관련
  if (true) {
    const state = useState();
  }

  for(;;){
    //
  }
  */

  /* 3 관련
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  */

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
