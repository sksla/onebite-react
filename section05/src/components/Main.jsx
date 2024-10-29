import "./Main.css";

const Main = () => {
  // JSX 주의 사항
  // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
  // 2. 숫자, 문자열, 배열 값만 렌더링 된다.
  // 3. 모든 태그는 닫혀있어야 한다.
  // 4. 최상위 태그는 반드시 하나여야만 한다.(마땅한 태그가 없다면 빈태그로 해도 됨 ==> <></>)
  //const number = 10;
  //const obj = { a: 1 };

  // {} 안에는 숫자나 문자열로 판단되는 모든 값을 넣을 수 있음
  // number, number + 숫자, 삼항연산자 ... ==> O
  // {if문}, {for문} ==> X
  /*
  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {10}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
      {obj.a}
    </main>
  );
  */

  const user = {
    name: "이정환",
    isLogin: true,
  };

  // 삼항연산자
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  // 조건문
  // 스타일 넣은 법 2가지
  // 1. return문 안 태그에 직접적으로 넣기
  /*
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  */
  // 2. 별도의 css 파일로 따로 만듦, import 후 className 속성으로 설정(class라는 예약어가 존재함)
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
