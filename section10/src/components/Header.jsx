import "./Header.css";
import { memo } from "react";

/*
  * memo : 컴포넌트를 인수로 받아 최적화된 컴포넌트로 만들어 반환
    - React의 내장 함수
    - 얕은 복사 ("==="로 비교, 주소값 비교 X)

    - 최적화된 컴포넌트는 props를 기준으로 메모이제이션 된다

    - 메모이즈드 컴포넌트(Memoized Component, 최적화된 컴포넌트)는
      부모 컴포넌트가 리렌더링 되어도, 자신이 받는 props가 바뀌지 않으면 리렌더링 실행되지 않도록 함
      ==> 불필요한 리렌더링 방지

  > 고차 컴포넌트(HOC,Higher Order Component)
    : 컴포넌트를 인수로 받아 해당 컴포넌트에 추가적인 기능(최적화, 메모이제이션)을
      덧붙여 컴포넌트를 반환해주는 컴포넌트
  
  * memo 사용하기
    1. memo를 import로 불러옴
    2. memo 호출
      ex) memo(컴포넌트, [콜백 함수]);
          - 컴포넌트 : 최적화하고 싶은 컴포넌트
          - 콜백함수 : 생략 가능
          - 컴포넌트 외부에 memo 호출
    

      
*/

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🌱</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

//const memoizedHeader = memo(Header);

export default memo(Header);
