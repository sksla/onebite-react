# 공통 컴포넌트 구현

## 목차

1. [공통 컴포넌트를 먼저 구현하는 이유](#1-공통-컴포넌트를-먼저-구현하는-이유)
2. [버튼 컴포넌트 구현](#2-버튼-컴포넌트-구현)
3. [헤더 컴포넌트 구현](#3-헤더-컴포넌트-구현)
4. [참고](#4-참고)
   - [클래스 네임 동적 변경 방법](#-클래스-네임-동적-변경-방법)
   - [템플릿 리터럴(Template Literal)](#-템플릿-리터럴template-literal)

<br>

---

<br>

# 1. 공통 컴포넌트를 먼저 구현하는 이유

> < 감정 일기장 프로젝트 개발 순서 >
>
> 1. 페이지 라우팅이나 글로벌 레이아웃 설정 등의 밑작업
> 2. 공통컴포넌트 구현
> 3. 개별 페이지 및 복잡한 기능 구현

<br>

프로젝트 개발 순서는 사람마다 다르지만, 공통 컴포넌트를 먼저 구현하면 다음과 같은 장점이 있음

- **코드 재사용성 증가** : 공통 컴포넌트를 각 페이지에서 쉽게 재사용 가능
- **작업 효율성 향상** : 개별 페이지 구현 시 불필요한 반복 작업을 줄임
- **프로젝트 구조화** : 복잡한 프로젝트 여기저기 정신없이 코드를 작성하는 일을 최대한 방지할 수 있음

<br>

## 공통 컴포넌트 구조

`src/components` 폴더 아래에 공통 컴포넌트 작성!

<br>

---

<br>

# 2. 버튼 컴포넌트 구현

## 1) 기본 UI 작업

- 먼저 버튼 컴포넌트 생성 후 , props를 통해 유연하게 동작하도록 만듦
  - `text` : 버튼 내부에 표시할 텍스트
  - `type` : 버튼 종류 (POSITIVE, NEGATIVE) 등
  - `onClick` : 클릭 시 실행될 함수
- **Button.jsx**

  ```jsx
  // 스타일 적용하려면 import 해야함
  import "./Button.css";

  /*
  const Button = () => {
    return (
      // 클래스명은 버튼 컴포넌트명과 동일하게 설정
      <button className="Button"}>
        {text}
      </button>
    );
  };
  */

  const Button = ({ text, type, onClick }) => {
    return (
      <button onClick={onClick} className={`Button Button_${type}`}>
        {text}
      </button>
    );
  };

  export default Button;
  ```

<br>

## 2) 스타일링

- 공통으로 적용되는 스타일 작성
- `type` props에 따라 클래스명이 동적으로 변경될 예정이므로 그에 따른 스타일 다르게 적용
- **Button.css**

  ```css
  .Button {
    background-color: rgb(236, 236, 236);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  .Button_POSITIVE {
    background-color: rgb(100, 201, 100);
    color: white;
  }

  .Button_NEGATIVE {
    background-color: rgb(253, 86, 95);
    color: white;
  }
  ```

  <br>

## 3) 부모 컴포넌트에서 사용 예제

- **App.jsx**

  ```jsx
  import Button from "./components/Button";

  function App() {
    return (
      <>
        <Button
          text="일반"
          onClick={() =>
            // 클릭시 동작할 코드 작성
            console.log("일반 버튼 클릭!")
          }
        />
        <Button
          text="긍정"
          type="POSITIVE"
          onClick={() => console.log("긍정 버튼 클릭!")}
        />
        <Button
          text="부정"
          type="NEGATIVE"
          onClick={() => console.log("부정 버튼 클릭!")}
        />
      </>
    );
  }

  export default App;
  ```

  > 일반 버튼의 경우 `type` 생략 가능 ==> 이유는 **참고**에서 확인!

<br>

---

<br>

# 3. 헤더 컴포넌트 구현

## 1) 기본 UI 작업

- 헤더는 세 가지 섹션(`<div>`)으로 나눔 : 왼쪽, 가운데, 오른쪽
- props를 통해 각 섹션에 들어갈 내용, 요소를 유연하게 바꾸도록 만듦
  - `title` : 가운데 섹션에 들어갈 텍스트
  - `leftChild` : 왼쪽 섹션에 들어가게 될 버튼 또는 HTML 요소 같은 자식 요소
  - `rightChild` : 오른쪽 섹션에 들어가게 될 버튼 또는 HTML 요소 같은 자식 요소
- **Header.jsx**

  ```jsx
  import "./Header.css";

  const Header = ({ title, leftChild, rightChild }) => {
    return (
      <header className="Header">
        <div className="header_left">{leftChild}</div>
        <div className="header_center">{title}</div>
        <div className="header_right">{rightChild}</div>
      </header>
    );
  };

  export default Header;
  ```

<br>

## 2) 스타일링

- **Header.css**

  ```css
  .Header {
    display: flex; /* 가로 방향 배치 */
    align-items: center; /* 헤더 안 요소 모두 수직 방향(교차축)으로 가운데 위치 */

    padding: 20px 0; /* 위아래 여백 설정*/
    border-bottom: 1px solid rgb(226, 226, 226);
  }

  /*
   Header요소 아래 세가지 섹션(div)들에게 한 번에 display:flex 속성 넣어줌
  */
  .Header > div {
    display: flex;
  }

  .Header .header_center {
    width: 50%;
    justify-content: center; /*display 속성이 flex로 설정된 요소 안에서 자식들이 배치되는 위치를 주 축(Main Axis)에서 가운데로 설정*/
    font-size: 25px;
  }
  /* 센터의 width가 50% 차지하고 있으므로 나머지는 25%씩 차지하도록 */
  .Header .header_left {
    width: 25%;
    justify-content: flex-start; /*요소들을 시작되는 지점(왼쪽)에 붙도록*/
  }

  .Header .header_right {
    width: 25%;
    justify-content: flex-end; /* 요소들을 끝나는 지점(오른쪽)에 붙도록 */
  }
  ```

<br>

---

<br>

# 4. 참고

## \* 클래스 네임 동적 변경 방법

#### props 값에 따라 동적으로 스타일 적용하는 방법

### 1. 템플릿 리터럴을 사용해 클래스 네임 설정

- `className`속성을 우선 `{}`(중괄호)로 감싼 후 **백틱(`)과 템플릿 리터럴**로 감싸서 props에 따라 값을 변경함
- `type` props를 이용해 클래스 네임에 동적으로 스타일 적용 가능
- 예시 : `` <Button className={`Button\_${type}`}/> ``

<br>

### 2. className 기본값과 추가값 결합

- 기존의 기본 클래스명(`Button`) 뒤에 `type` 값에 따라 동적으로 변경되는 클래스 명을 추가함
- 예시 : `type="POSITIVE"`인 경우 최종 클래스 네임은 `Button_POSITIVE`가 됨

  `` <Button className={`Button Button\_${type}`}/> ``

<br>

### 3. props 값이 없는 경우 기본값 처리

- `type`이 전달되지 않으면 `Button_undefined`가 설정됨
- 이는 CSS에 정의되지 않으므로 기본 스타일(`Button`)만 적용됨

<br><br>

## \* 템플릿 리터럴(Template Literal)

- JavaScript에서 문자열을 더 쉽게 조작하고 표현할 수 있도록 제공하는 기능
- 문자열을 백틱( ` )으로 감싸서 사용
- 문자열 안에 **변수**나 **표현식**을 삽입할 수 있음

<br>

### 기본 문법

```javascript
const text = `Hello, World`;
```

<br><br>

## 특징과 사용 방법

### 1. 문자열 내 변수 삽입 (표현식 삽입)

- `${}`을 사용해 문자열 안에 변수를 삽입할 수 있음

  ```javascript
  const name = "Alice";
  const greeting = `Hello, ${name}!`;

  console.log(greeting); // "Hello, Alice!"
  ```

### 2. 문자열 내 표현식 사용

- `${}` 안에 계산식이나 함수 호출 등 표현식도 사용 가능

  ```javascript
  const x = 10;
  const y = 20;

  console.log(`The sum of x and y is ${x + y}.`); // "The sum of x and y is 30."
  ```

### 3. 멀티라인 문자열

- 템플릿 리터럴은 여러 줄로 나뉜 문자열을 작성할 때 매우 유용

  ```javascript
  const message = `This is a long message
  that spans multiple lines.`;

  console.log(message);
  ```

### 4. HTML 생성

- HTML 코드를 작성할 때도 템플릿 리터럴을 사용하면 편리함

  ```javascript
  const name = "Bob";
  const html = `
    <div>
      <h1>${name}'s Profile</h1>
      <p>Welcome to the profile page!</p>
    </div>
  `;

  console.log(html);
  ```

<br><br>

## 템플릿 리터럴과 기존 문자열 방식의 비교

기존 방식 (문자열 연결):

```javascript
const name = "Alice";
const greeting = "Hello, " + name + "!";

console.log(greeting); // "Hello, Alice!"
```

템플릿 리터럴:

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting); // "Hello, Alice!"
```

> 템플릿 리터럴을 사용하면 가독성이 훨씬 좋아지고, 코드가 간결해진다

<br><br>

## 활용 예시 : 동적 클래스 네임

템플릿 리터럴은 동적으로 CSS 클래스를 조합할 때도 많이 사용됨

### 예제 1 : 조건에 따른 스타일 변경 (Boolean 값 기반의 활성 상태 강조)

- `isActive`가 `true`이면 버튼에 `tab--active` 클래스가 추가되어 스타일이 변경됨

  ```jsx
  function Tab({ isActive, label }) {
    return (
      <button className={`tab ${isActive ? "tab--active" : ""}`}>
        {label}
      </button>
    );
  }
  ```

<br>

### 예제 2 : 여러 조건에 따른 클래스 네임 조합

- 다양한 조건을 조합하여 클래스명을 동적으로 설정
- `size`에 따라 버튼 크기를 설정하고, `type`에 따라 색상을 변경
  ```jsx
  function Button({ size, type, label }) {
    return <button className={`btn btn--${size} btn--${type}`}>{label}</button>;
  }
  ```
