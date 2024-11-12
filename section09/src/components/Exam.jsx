import { useReducer } from "react";

/*
  * useReducer
    : 컴포넌트 내부에 새로운 state를 생성하는 React Hook

    - 모든 useState는 useReducer로 대체 가능 (사실상 useState와 거의 비슷)
    - 상태 관리 코드를 컴포넌트 외부로 분리 가능
      컴포넌트 내부 => state 생성만
      컴포넌트 외부 => 실제 state를 관리하는 코드들은 Reducer 함수를 통해 관리

  * useReducer 구조
    const [state, dispatch] = useReducer(reducer, initialArg, [init])

    > 인자
    - reducer : 상태를 어떻게 업데이트할 지 명시한 함수
                순수 함수여야함, 인자로 상태와 액션을 받아야함, 다음 상태값을 반환해야함
                상태와 액션은 어떤 타입도 가능
    
    - initialArg : state의 초기값
                   어떤 타입의 값도 가능
                   초기 상태를 계산하는 방법은 다음에 오는 init 인자에 따라 달라짐
    
    - init : 초기값을 반환하는 초기화 함수(선택사항)
             초기화 함수 전달 X => 초기값은 initialArg값으로 설정됨
                "       전달 O => 초기값은 init(initialArg)를 호출한 결과로 설정됨
    
    > dispatch 함수 : 상태 변화가 있어야 한다는 사실을 알리는 함수를 반환
                      (dispatch: 발송하다, 급송하다, 알리다)

      dispatch({
        typd: "구분할 이름",
        data: state 값을 어떻게 변화할지
      })

    > Action 객체 : 인수로 전달된 요청의 내용을 담고 있는 객체
                    (dispatch 함수 내부의 객체)


  * useReducer 사용
    1. import로 useReducer 불러오기
    2. useReducer 호출 => const [state, dispatch] = useReducer();
    3. useRedecer가 상태 변화를 실제로 처리하게 될 함수 만들기
      => 컴포넌트 외부에
      function reducer(){}
    
    4. 만든 함수 reducer를 useReducer의 인수로 넣기 (초기값도 인수로 넣어서 설정 가능)
      = const [state, dispatch] = useReducer(reducer);
  
*/

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
  /*
  if (action.type === "INCREASE") {
    return state + action.data;
  } else if (action.type === "DECREASE") {
    return state - action.data;
  }
  */
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0); // state 초기값 : 0

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
