import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

// 컴포넌트 안 데이터는 부모에서 자식으로만 전달 가능! => 형제 관계는 전달 불가능
// ==> 따라서 현재 카운트를 나타내는 count State는 App 컴포넌트에서 만든다

// * State Lifting(State 끌어 올리기)
// : state를 계층 구조 위로 끌어올려서 아래에 있는 컴포넌트들이 모두 사용할 수 있도록 하는 방법
// React.js의 데이터 흐름 = 단방향 데이터 흐름(위에서 아래로)

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
