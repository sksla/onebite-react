//import { useState } from "react";
//import { useRef } from "react";
import { useState, useRef } from "react";

//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // 수정 전 => 코드가 비슷함
  /*
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    // 이벤트 객체 e 안 target 속성 안 value 속성에 input 태그의 값이 있음
    //setName(e.target.value);

    // 수정 1
    setInput({
      // 스프레드(전개) 연산자 이용해서 기존 input State에 들어있던 name 외의 값 변경하지 않고 그대로 유지시키기
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    //setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    // 수정전
    //setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    // 수정전
    //setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          value={input.name}
          onChange={onChangeName}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          value={input.birth}
          type="date"
          onChange={onChangeBirth}
        />
      </div>
      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChangeBio} />
      </div>
    </div>
  );

  */

  // 수정 1 => State들 통합
  /*
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChangeName = (e) => {
    setInput({
      // 스프레드(전개) 연산자 이용해서 기존 input State에 들어있던 name 외의 값 변경하지 않고 그대로 유지시키기
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          value={input.birth}
          type="date"
          onChange={onChangeBirth}
        />
      </div>
      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} onChange={onChangeBio} />
      </div>
    </div>
  );

  */

  // 수정 2 => 아래 이벤트핸들러(chane함수)들도 통합
  /*
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef(0);
  console.log(refObj.current);

  // 통합 이벤트핸들러
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      // [] : 객체의 키(속성 이름)를 동적으로 지정하고 싶을 때 키(속성) 자리에 대괄호 사용, 대괄호 안에 변수를 넣는다 ==> 계산된 속성 이름(Computed Property Name) 문법
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
  */

  /*
    * useRef : 새로운 Reference 객체를 생성하는 기능
               리렌더링 유발 X ==> 렌더링 시키지 않는 변수 필요할 때 사용, 초기화 되지 않아야 값 저장에 유용
               특정 DOM 요소에 접근 가능 ==> 해당 요소 조작 가능
               리렌더링 되어도 값(current의 값) 변하지 않음

    const refObject = useRef()
    refObject : 컴포넌트 내부의 변수 ==> 일반적인 값들 저장 가능

    * Reference 객체란? => current라는 property(속성)에 현재 보관할 값을 담아두기만 하는 단순한 자바스크립트 객체
      {current:현재 보관할 값(초기값 "")}

    * useRef와 useState의 공통점과 차이점

              useRef            |         useState
    ===========================================================
      Reference 객체를 생성      |        State를 생성
    -----------------------------------------------------------
                컴포넌트 내부의 변수로 활용 가능
    -----------------------------------------------------------
    어떤 경우에도 리렌더링 유발 X |   값이 변경되면 컴포넌트 리렌더링
    -----------------------------------------------------------
  */

  // 활용 사례 1 : 요소들의 값을 수정할 때마다 되는 리렌더링 횟수를 콘솔의 출력해보기
  /*
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  //const refObj = useRef(0);
  const countRef = useRef(0);

  //console.log("Register 렌더링");

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
  */

  // 활용 사례 2 : Register 컴포넌트가 렌더링 하고 있는 DOM 요소들을 직접 조작
  /*
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  //const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef();

  //console.log("Register 렌더링");

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스 ==> 레퍼런스 객체 이용
      //console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          // input태그가 렌더링하는 DOM요소가 inputRef라는 레퍼런스 객체에 저장됨
          // 반환 요소에 접근 ==> 해당 태그에 ref 선언 : ref = {변수명}
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
  */

  /* Bonus 
      의문 1 : 컴포넌트 내부에서 리렌더링을 유발시키지 않는 count라는 변수는 그냥 일반 변수(자바스크립트 변수)를 이용하면 되는거 아닐까?
      > count 변수 값이 1로 고정됨 
      > State 값이 변경되면 Register 컴포넌트 리렌더링 됨 == 컴포넌트 역할을 하는 Register 함수 다시 호출됨 
        --> 함수 안 코드도 다시 실행됨 ===> 리렌더링 될 때 마다 count 변수도 0으로 리셋됨, 레퍼런스 변수는 리렌더링 되도 값이 리셋되지 X 
      
      의문 2 : 그럼 컴포넌트 함수 외부에 count라는 변수를 선언하면?
      ex) 
          let count = 0;
          const Register = () => {
            return();
          }
      
      > Register 컴포넌트를 App.jsx에 한 번만 렌더링할 땐 문제 X
                  "                  두 번 이상 렌더링할 땐 문제 발생
        ex) Register 컴포넌트를 두 번 렌더링함 == Register 함수만 두 번 호출된 것일 뿐 --> count 변수는 한 번만 선언됨
        ==> 두 컴포넌트가 하나의 변수(count)를 공유하므로 값에 혼란이 생김

      결론 : 리액트에서 컴포넌트 외부에 변수 선언은 권장되지 않음, useRef 이용하자  

  */
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  //const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef();

  // 자바스크립트 변수
  let count = 0;

  //console.log("Register 렌더링");

  const onChange = (e) => {
    // 레퍼런스 변수 사용
    //countRef.current++;
    //console.log(countRef.current);

    // 자바스크립트 변수 사용
    count++;
    console.log(count);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          type="text"
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
