import { useState } from "react";

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
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 통합 이벤트핸들러
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      // [] : 객체의 키(속성 이름)를 동적으로 지정하고 싶을 때 키(속성) 자리에 대괄호 사용, 대괄호 안에 변수를 넣는다 ==> 사용됨 계산된 속성 이름(Computed Property Name) 문법
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
};

export default Register;
