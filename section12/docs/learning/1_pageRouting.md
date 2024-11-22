# 페이지 라우팅

## 목차

1. [소개](#1-소개)
   - 페이지 라우팅이란?
   - MPA 방식
   - 서버 사이드 렌더링(SSR)
   - SPA 방식
   - SPA의 작동 방식
   - 클라우드 사이드 렌더링(CSR)
   - SPA와 MPA의 페이지 이동 차이
2. [라우팅](#2-라우팅)
   - React Router
   - react-router 라이브러리 설치
   - 페이지 라우팅 하기
3. [페이지 이동](#3-페이지-이동)
   - Link 컴포넌트
   - useNavigate 훅(Hook)
   - Link와 useNavigate의 차이점
4. [동적 경로](#4-동적-경로)
   - URL Parameter 방식(useParams 훅)
   - Query String 방식(useSearchParams 훅)

---

<br>

## 1. 소개

<a id="intro"></a>

### \* 페이지 라우팅이란?

- **페이지 라우팅**: URL(경로)에 따라 알맞은 페이지를 렌더링하는 과정.

<br><br><br>

### \* MPA(Multi Page Application) 방식

#### 특징

- 서버가 여러 개의 HTML 페이지를 가지고 있음.
- 사용자가 URL로 요청하면 서버가 해당 페이지를 응답.

#### 장점

- 서버 사이드 렌더링(SSR)과 결합하면 **SEO 친화적**.
- 초기 페이지 로드가 빠름.

#### 단점

- **페이지 이동이 매끄럽지 않음**: 새 페이지 요청마다 전체 페이지를 다시 로드.
- **서버 부하가 큼**: 많은 사용자 요청 처리 시 성능 저하 가능.

<br><br><br>

### \* 서버 사이드 렌더링(SSR, Server Side Rendering)

- 브라우저가 페이지를 요청했을 때, **완성된 HTML 페이지**를 서버가 즉시 응답.
- **MPA 방식**에서 자주 사용.

> React.js는 기본적으로 이 방식을 따르지 않음.  
> 이유: SPA 방식이 더 쾌적한 페이지 이동 경험을 제공하기 때문.

<br><br><br>

### \* SPA(Single Page Application) 방식

#### 특징

- 서버에서 단일 HTML 파일(`index.html`)과 **번들링된 JavaScript 파일**을 제공.
- 서버로부터 새로운 페이지를 불러오지 않고, **현재의 페이지를 동적으로 다시 작성**하는 방식.

#### 장점

- **페이지 이동이 매끄럽고 효율적**.
- 서버 부하가 적음 → 다수 사용자 동시 접속에도 안정적.

#### 단점

1. **SEO 문제**: 클라이언트에서 JavaScript를 실행해야 콘텐츠가 표시되므로 검색 엔진 크롤러가 처리하기 어려움. <br>
   → 해결 방법: 서버 사이드 렌더링(SSR) 또는 정적 사이트 생성(SSG)를 추가적으로 사용.
2. 초기 로드 속도 느림 → 필요한 JavaScript를 모두 다운로드하기 때문.

<br><br><br>

### \* SPA의 작동 방식

1. 서버에는 `index.html`과 컴포넌트가 포함된 **JS 파일**들이 존재.
2. 사용자가 브라우저(클라이언트)에서 접속 요청을 보냄:
   - `index.html` 파일을 먼저 응답.
   - 모든 JavaScript 파일을 **번들링(`Bundling`)된 형태**로 전송. (예: Vite, Webpack 사용)
3. 브라우저에서 **번들 파일을 실행**하여 필요한 컴포넌트를 화면에 렌더링 → **클라이언트 사이드 렌더링(CSR).**
4. 이후 URL 변경 시, 서버로 요청 없이 컴포넌트를 동적으로 교체.

> 결과적으로, `index.html + Bundle JS File = 하나의 React App`을 구성.

#### SPA의 페이지 이동

- SPA에서는 첫 로드 이후, 서버에서 추가적인 페이지 요청 없이 **클라이언트 측에서 페이지 전환**.
- 새로운 페이지에 필요한 컴포넌트들을 **동적으로 교체**하여 화면을 업데이트.

<br><br><br>

### \* 클라이언트 사이드 렌더링(CSR, Client Side Rendering)

- 클라이언트(브라우저)가 JavaScript를 실행하여 화면을 렌더링.
- React, Vue.js 등 대부분의 프론트엔드 라이브러리에서 CSR 방식을 사용

<br><br><br>

### \* SPA와 MPA의 페이지 이동 차이

| **특징**        | **MPA**                          | **SPA**                     |
| --------------- | -------------------------------- | --------------------------- |
| **페이지 전환** | 모든 요소를 새로고침             | 필요한 부분만 교체          |
| **속도**        | 페이지 전환 시 느림              | 빠르고 매끄럽게 전환        |
| **SEO**         | 서버에서 제공하므로 SEO 친화적   | 추가 설정(SSR/SSG) 필요     |
| **서버 부하**   | 많은 페이지 요청으로 부하가 높음 | 한 번 로드 이후 부하가 적음 |
| **요청 방식**   | 서버로부터 전체 페이지 요청      | 클라이언트에서 뷰 업데이트  |

> ### 참고: React와 SPA
>
> React는 기본적으로 **SPA 방식을 채택**하며, React Router를 활용해 클라이언트 사이드 라우팅을 구현함.
> SPA 방식의 특징과 작동 방식을 이해하면 React 애플리케이션 개발이 훨씬 수월해짐.
> <br>

---

<br>

## 2. 라우팅

### \* React Router 소개

- **React Router**: React에서 CRS 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리.
- **npmjs.com에 등록된 라이브러리**로, 대부분의 리액트 앱에서 사용됨.

<br><br><br>

### \* react-router 라이브러리 설치

- 버전 6 이상이어야 함.
- 설치 명령어:
  ```bash
  npm i react-router-dom
  ```
  <br><br><br>

### \* 페이지 라우팅 하기

#### 1. `main.jsx`에서 `BrouserRouter` import

```jsx
import { BrowserRouter } from "react-router-dom";
```

#### 2. `BrowserRouter`로 `App` 태그 감싸기

- `BrowserRouter`는 state에 주소와 관련된 정보를 저장
- 자손 컴포넌트들에 데이터를 공급하는 `Navigation.Provider`, `Location.Provider` 같은 context 객체의 `Provider` 컴포넌트를 사용.

```jsx
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

#### 3. `App.jsx`에서 `Routes`, `Route` import

```jsx
import { Routes, Route } from "react-router-dom";
```

#### 4. `Routes` 태그로 바뀔 부분 감싸기

- `Routes` 안에서 라우팅이 정의됨.

#### 5.`Route` 태그 작성

- `Route`는 실제 URL 경로와 컴포넌트를 매핑하는 역할
- 속성 `path` : 경로 정의
- 속성 `element` : 해당 경로의 매핑될 컴포넌트 정의

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
   return(
      <>
         <div></div>
         <Routes>
            <Route path="/example" element={<ExampleComponent />} />
         <Routes>
      </>
   );
}

export default App;
```

<br>

> ### ⚠️ 주의 사항
>
> 1. `Route` 컴포넌트 안에는 `Route` 컴포넌트만 들어갈 수 있음
> 2. `Routes` 외부 요소는 경로와 상관없이 모든 페이지에서 렌더링 됨
>    - 공통 요소는 `Routes` 밖에 배치하여 여러 페이지에서 재사용 가능
>      <br>

---

<br>

## 3. 페이지 이동

### \* Link 컴포넌트

- **React-Router-Dom**이 제공하는 컴포넌트로, `<a>` 태그를 대체하는 기능을 제골
- **클라이언트 사이드 렌더링** 방식으로 페이지 이동을 처리
- 클릭하면 **URL 경로**가 바뀌면서 해당 경로에 지정된 컴포넌트가 표시됨
- 페이지 전체를 새로 고침하지 않고, 필요한 부분만 재렌더링하여 **속도 향상**에 도움을 줌
- **사용 예시** :

```jsx
// Link import
import { Link } from "react-router-dom";

// 경로는 to 속성의 속성값으로 작성
<Link to="/경로">이동</Link>;
```

#### `<a>` 태그와 `Link` 컴포넌트의 차이점

- **`<a>` 태그** : 전체 페이지를 새로 고침하여 **상태값이 유지되지 않음**, 페이지 깜빡임 발생, 속도 저하
  - 외부 프로젝트와 연결할 때 주로 사용
- **`Link` 컴포넌트** : **필요한 부분만 재렌더링**, 데이터를 필요한 부분만 불러올 수 있음
  - **SPA (Single Page Application)**에서 페이지 전환 시 사용 (프로젝트 내에서 페이지 전환 시 사용)

> **결론 :**
> React 앱 내부에서 **링크를 사용할 때는 `Link` 컴포넌트**를 사용하는 것이 좋다.

<br><br><br>

### \* useNavigate 훅(Hook)

- **React-Router-Dom**에서 제공하는 커스텀 훅
- useNavigate 함수 실행 시 페이지 이동할 수 있게 해주는 **navigate() 함수** 반환
- **navigate()** 함수는 조건에 맞는 로직을 실행한 후, 특정 경로로 이동할 수 있게 해줌
- **사용 예시** :

```jsx
// 1. useNavigate를 import하기
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  // 2. useNavigate()가 반환하는 함수를 변수에 저장
  const navigate = useNavigate();

  return (
    <div>
      // 3. 이벤트 핸들러 안 코드에 navigate변수명('경로')와 같이 문자열 경로
      전달
      <button onClick={() => navigate("/경로")}>이동</button>
    </div>
  );
};
```

> #### useNavigate를 직접 호출하지 않고 변수로 선언해서 반환된 함수를 호출하는 이유?
>
> ==> hook의 규칙
>
> - **컴포넌트 최상당**에서만 호출해야 함
> - 다른 조건문, 함수선언문, 반복문 등 중첩된 함수 안에서는 호출 불가능
> - 컴포넌트 내부의 함수에서 **callback으로 호출할 수 없음**
> - 함수 컴포넌트에서 호출 가능 (Custom Hook에서 예외처리 가능)

<br><br><br>

### \* `Link` 컴포넌트와 `useNavigate` 훅의 차이점

#### 1. `Link` 컴포넌트

- **클릭 시 바로 이동**하는 로직 구현 시 사용
- ex) 상품리스트에서 상세페이지로 이동할 때

#### 2. `useNavigate` 훅

- **조건에 맞는 로직**을 실행하고 페이지 이동이 필요한 경우 사용
- ex) 로그인 후 로그인 성공 시 Main 페이지로 이동하거나 회원가입 안 된 사용자는 SignUp 페이지로 이동하는 경우

<br>

---

<br>

## 4. 동적 경로

### \* 동적 경로(Dynamic Segments)란?

- **동적인 데이터를 포함하고 있는 경로** (예시 : 상품 조회 페이지)
- 주로 두 가지 방식으로 구현 : **URL Parameter 방식**과 **Query String 방식**

<br><br><br>

### \* URL Parameter 방식

- 경로에서 아이템의 id 같은 **변경되지 않는 값**를 명시하여 동적인 값을 URL에 포함시키는 방식
  - 예시 : `/product/1`, `/product/2`, ...

#### 사용 방법

#### 1. 동적 경로 설정

- `Router` 컴포넌트의 `path` 속성에 `/` 추가하고, `:` 뒤에 **parameterName**을 작성
- 예시 :
  ```jsx
  <Router path="/userProfile/:id" element={<UserProfile />} />
  ```

#### 2. 해당 컴포넌트에서 파라미터 읽기 (`useParams` 훅 사용)

- **`useParams` 훅** : 현재 URL에 명시된 **parameter**값을 가져오는 커스텀 훅
- 예시:

  ```jsx
  // useParams 훅 import
  import { useParams } from "react-router-dom";

  // 변수에 useParams()를 호출한 값 저장
  const { id } = useParams(); // 또는 const params = useParams();
  ```

<br><br><br>

### \* Query String 방식

- `?` 뒤에 **변수명과 값**을 명시하여 자주 변경되는 값을 주소로 전달하는 방식
  - 예시 : `/search?q=apple`

#### 사용방법

#### 1. `useSearchParams` 훅 사용 (쿼리스트링을 사용하는 컴포넌트에서 사용)

- **`useSearchParams` 훅** : 쿼리 파라미터를 읽고, 수정할 수 있는 커스텀 훅
  - useSearchParams()`는 `searchParams`**객체**와`setSearchParams`**함수**를 반환
  - `searchParams` : URL의 쿼리 파라미터를 포함한 URLSearchParams 객체(현재 URL에 있는 쿼리 파라미터들을 보여주는 도구)
  - `setSearchParams`: 쿼리 파라미터를 업데이트하는 함수.

#### 2. 쿼리 파라미터 읽기

- `searchParams.get()` 메서드를 사용하여 URL에서 쿼리 파라미터 값을 읽을 수 있음
- 예시 :
  ```jsx
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // url에서 "query"라는 파라미터 값 가져옴
  ```

#### 3. 쿼리 파라미터 변경 (새로고침 없이)

- `setSearchParams` 함수를 사용하여 쿼리 파라미터를 변경할 수 있음
- 예시 :
  ```jsx
  const [params, setParams] = useSearchParams();
  setParams({ query: "apple" });
  ```

#### +) 단축 속성명 (Shorthand Property Names) 문법

- ES6에서 새로 도입된 문법으로, **변수 이름과 객체 키가 동일할 때** 키-값 쌍을 자동으로 연결
- 예시 :

  ```jsx
  const [params, setParams] = useSearchParams();
  const query = "apple";

  setSearchParams({ query }); // query: query 생략 가능
  ```

  <br>

  ***
