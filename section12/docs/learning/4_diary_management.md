# 일기 관리 기능 구현

## 목차

1. [일기 데이터 객체 모델링](#1-일기-데이터-객체-모델링)
2. [상태 관리와 `useReducer` 설정](#2-상태-관리와-usereducer-설정)
   - `useReducer`로 상태 관리
   - 상태 변경 기능 구현(CRUD)
3. [Context를 이용한 데이터 공급](#3-context를-이용한-데이터-공급)
4. [최종 코드 구조](#4-최종-코드-구조)
5. [참고](#5-참고개선-포인트)

<br>

---

<br>

# 1. 일기 데이터 객체 모델링

- 데이터를 `mockData`로 작성하여 초기 상태 정의 (임시 데이터 정의)
- **구조** :

```jsx
const mockData = [
  {
    id: 1, // 일기 id
    createdDate: new Date("2024-11-27").getTime(), // 작성 날짜
    emotionId: 1, // 감정 번호
    content: "1번 일기 내용", // 내용
  },
  // 나머지 데이터 생략...
];
```

<br>

---

<br>

# 2. 상태 관리와 `useReducer` 설정

## `useReducer`로 상태(State) 관리

- 상태를 관리하기 위해 `reducer` 함수와 `useReducer`를 사용.
  - 일기 데이터를 보관할 `state`를 `useReducer`로 생성 (컴포넌트 내부)
  - 데이터를 관리할 `reducer`함수 생성 (컴포넌트 바깥)
- 초기 상태로 `mockData` 전달
- **App.jsx**

  ```jsx
  import { useReducer } from "react";

  function reducer(state, action) {
    return state; // 기본 리턴 (임시)
  }

  function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    return ();
  }
  ```

<br><br>

## 상태 변경 기능 구현 (CRUD)

### 1) 새로운 일기 추가

- id값은 `useRef`를 이용해 만든 레퍼런스 객체 이용 (초기값은 mockData와 겹치지 않도록 설정)
- `onCreate` 함수:

  ```jsx
  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, // 후위 연산으로
        createdDate,
        emotionId,
        content,
      },
    });
  };
  ```

- +) dispatch 함수 호출하는 이유 : `useReducer`로 만든 `state`라서
  - dispatch 함수 호출 --> 타입 전달 --> `useReducer`가 `reducer`함수 호출

<br>

### 2) 기존 일기 수정

- `onUpdate` 함수:

  ```jsx
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: idRef.current++, // 후위 연산으로
        createdDate,
        emotionId,
        content,
      },
    });
  };
  ```

  <br>

### 3) 기존 일기 삭제

- `onDelete` 함수:

  ```jsx
  // 기존 일기 삭제
  const onDELETE = (id) => {
    dispatch({
      type: "UPDATE",
      id,
    });
  };
  ```

  <br>

### 4) `reducer` 함수 구현

- 액션 타입별 로직:
  - **"CREATE"** : 새로운 `state` 반환 (원본 배열 맨 앞에 새로운 일기 객체 추가)
  - **"UPDATE"** : `id`가 일치하는 요소만 수정(`map` 메소드 이용)
  - **"DELETE"** : `item`의 `id`가 `action.id`와 같지 않은 요소만 필터링 (`filter` 메소드 이용)
- `id`값 비교시 두 값의 타입이 다를 수 있음 <br>
  ==> 혹시 모를 오류를 방지하기 위해 `String()`로 둘 다 강제 형변환 해서 비교
- `reducer` 함수 :
  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case "CREATE":
        return [action.data, ...state];
      case "UPDATE":
        return state.map((item) =>
          String(item.id) === String(action.data.id) ? action.data : item
        );
      case "DELETE":
        return state.filter((item) => String(item.id) !== String(action.id));
      default:
        return state;
    }
  }
  ```

<br>

> 이제 다른 페이지에 일기 추가, 수정, 삭제 기능이 필요하면 각 함수를 똑 떼서 필요한 페이지에 전달해 주면 됨!

<br>

---

<br>

# 3. Context를 이용한 데이터 공급

- **Context**를 사용해 App 컴포넌트 하위에 있는 모든 컴포넌트들에게 **데이터 제공**
- **가변 데이터**와 **불변 데이터**를 나눠서 보관
  - **DiaryStateContext**(가변) : `data`(일기 데이터)
  - **DiaryDispatchContext**(불변) : `onCreate`, `onUpdate`, `onDelete` 함수
- **Context 생성**

  - 다른 컴포넌트에서 사용 가능하도록 맨 앞에 `export` 키워드 작성

  ```jsx
  import { createContext } from "react";

  export const DiaryStateContext = createContext();
  export const DiaryDispatchContext = createContext();
  ```

- **Context Provider로 감싸기**
  ```jsx
  function App() {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
  ```

<br>

---

<br>

# 4. 최종 코드 구조

- **App.jsx**

```jsx
import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";

// 페이지
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// 이미지 불러오는 util 함수
import { getEmotionImage } from "./util/get-emotion-image";

// 공통 컴포넌트
import Button from "./components/Button";
import Header from "./components/Header";

// 임시 일기 데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-11-27").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-11-26").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-10-26").getTime(),
    emotionId: 2,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        // 두 id의 타입이 다를 수 있음. 혹시 모를 오류 방지
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

// context
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
            {/* "*" => 와일드 카드, switch case문의 default와 같은 역할 */}
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
```

<br>

---

<br>

# 5. 참고(개선 포인트)

## ✅ 액션 타입 상수화

- **가독성**과 **유지 보수**를 위해 상수로 정의

  ```jsx
  const ACTION_TYPE = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
  };
  ```

- **적용 예시**

  ```jsx
  const ACTION_TYPE = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPE.CREATE:
        return [action.data, ...state];
      case ACTION_TYPE.UPDATE:
        return state.map((item) =>
          String(item.id) === String(action.data.id) ? action.data : item
        );
      case ACTION_TYPE.DELETE:
        return state.filter((item) => String(item.id) !== String(action.id));
      default:
        return state;
    }
  }
  ```

<br><br>

## ✅ 파일 구조 리팩토링

- 컴포넌트나 함수 분리 :
  - `reducer` 함수: `reducers.js`
  - `Context`: `contexts.js`
