# 폰트, 이미지, 레이아웃 설정 + 이미지 최적화

## 목차

1. [폰트 설정](#1-폰트-설정)
   - 로컬 폰트(Local Fonts) 방식
   - 웹 폰트(Web Fonts) 방식
   - 로컬 폰트 방식과 웹 폰트 방식의 장단점
2. [이미지 렌더링 및 최적화](#2-이미지-렌더링-및-최적화)
   - 이미지 렌더링 설정 방법
   - 이미지 최적화
3. [레이아웃 설정](#3-레이아웃-설정)
   - 루트 컨테이너 스타일 설정
   - 요소 가운데 배치
   - 높이를 화면에 꽉 차게 설정
   - 그림자 설정
4. [참고](#4-참고)
   - CSS 변수
   - 미디어 쿼리

---

<br>

# 1. 폰트 설정

## \* 로컬 폰트(Local Fonts) 방식

- **정의**: 폰트 파일을 직접 다운로드하여 프로젝트에 포함하고 사용하는 방식
- **특징**:
  - 폰트 파일이 프로젝트 내부에 있기 때문에 **인터넷 연결 없이도 사용** 가능
  - 프로젝트의 용량이 늘어나지만, 제어권이 프로젝트에 있기 때문에 **특정 폰트 버전을 고정**하는 데 유리
  - 브라우저가 폰트를 로드할 때 **빠르게 로딩**되지만, 잘못된 설정 시 폰트 미적용 문제가 발생할 수 있음

### 사용 방법

1. **폰트 파일 준비**
   - 원하는 폰트 파일을 `/public` 폴더에 넣기
2. **폰트 파일 불러오기**

   - `index.css`에서 `@font-face`를 사용해 폰트 파일을 등록

     ```css
     @font-face {
       font-family: "NanumPenScript";
       src: url("/NanumPenScript-Regular.ttf");
     }
     ```

   -참고: `public` 폴더 바로 아래를 가리키려면 경로를 `/`로 시작

3. **폰트 적용**
   - CSS에서 font-family를 사용해 폰트를 적용
     ```css
     body * {
       font-family: "NanumPenScript";
     }
     ```

<br><br>

## \* 웹 폰트(Web Fonts) 방식

**온라인 폰트(Web Fonts)** 또는 **호스팅 폰트**라고도 함

- **정의**: 폰트를 로컬에 저장하지 않고, **외부 URL**을 통해 로드하는 방식
- **특징**:
  - **Google Fonts, Adobe Fonts**와 같은 서비스에서 제공하는 URL을 사용
  - 로컬 저장 공간을 차지하지 않고, 항상 최신 버전의 폰트를 사용할 수 있습니다.
  - **인터넷 연결이 필요**하며, 외부 요청으로 인해 **초기 로딩 시간이 증가**할 수 있음

### 사용 방법

1. **Google Fonts 접속**(https://fonts.google.com)

   - Google Fonts에 접속해 원하는 폰트를 검색

2. **폰트 선택**

   - 원하는 폰트를 선택한 뒤, **Style 섹션**에서 Regular 400 또는 다른 옵션을 선택
   - 선택한 폰트는 **Selected Families** 창에 추가됨

3. **웹 폰트 주소 복사**

   - **@import** 섹션의 코드를 복사

4. **index.css에 추가**

   - 복사한 코드를 `index.css`상단에 추가

     ```css
     @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
     ```

   - css에 폰트 적용

     ```css
     body {
       font-family: "Nanum Pen Script";
       margin: 0;
     }
     ```

<br><br>

## \* 로컬 폰트 방식과 웹 폰트 방식의 장단점

### 장단점

| **방식**                   | **장점**                             | **단점**                         |
| -------------------------- | ------------------------------------ | -------------------------------- |
| **로컬 폰트(Local Fonts)** | 인터넷 연결 필요 없음                | 프로젝트 용량 증가               |
| **웹 폰트(Web Fonts)**     | 다양한 폰트를 쉽게 관리 및 사용 가능 | 인터넷 연결 필요, 외부 요청 발생 |

<br>

### 사용 예시

- **로컬 폰트** : 회사 CI나 특정 폰트(예: 고유 글꼴)처럼 프로젝트 내에서만 사용하는 폰트에 적합.
- **웹 폰트** : 다양한 사용자에게 동일한 스타일을 제공하고 싶을 때 적합.

<br>

---

<br>

# 2. 이미지 렌더링 및 최적화

## \* 이미지 렌더링 설정 방법

### 방법 1: 기본 방식

1. **이미지 파일 위치**

- 렌더링할 이미지를 `src/assets` 폴더에 저장

2. **이미지 import**

- 렌더링할 컴포넌트에서 이미지를 `import`로 불러옴
  ```jsx
  // App.jsx
  import image1 from "./assets/image1.png";
  import image2 from "./assets/image2.png";
  ```

3. **이미지 렌더링**

- `img` 태그의 `src` 속성에 import된 이미지를 넣어 렌더링
  ```jsx
  function App() {
    return (
      <div>
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
      </div>
    );
  }
  ```

<br><br>

### 방법 2: 모듈화

- **장점**: 여러 이미지를 다룰 때 매번 import하는 번거로움을 줄임.

1. **유틸리티 파일 생성**

- `src/util` 폴더에 js파일 생성 (ex: `get-image.js`)
- js파일 상단에 import문으로 이미지 불러옴
- 이미지 반환하는 함수 작성 (함수를 내보내기 위해 맨 앞에 `export` 키워드 추가)

```javascript
// src/util/get-image.js
import image1 from "./../assets/image1.png";
import image2 from "./../assets/image2.png";

export function getImage([매개변수]) {
  return image1;
}
```

  <br>
   
2. **컴포넌트에서 함수 호출**
  - 렌더링할 컴포넌트에서 이미지 반환하는 함수를 import
  ```jsx
  // App.jsx
  import { getImage } from "./util/get-image"
  ```
    
  <br>

3. **불러온 함수로 이미지 렌더링**

- 불러온 함수를 `img` 태그의 `src` 속성에 넣기

```jsx
function App() {
  return (
    <>
      <img src={getImage()} />
    </>
  );
}
```

  <br>
  
  > ❓`public` 폴더와 `src/assets`폴더 모두 정적인 파일을 보관할 수 있는 곳인데
  > 왜 font 파일은 `public`에 이미지 파일은 `src/assets` 폴더에 보관하는 걸까? <br>
  >    ==>  **vite**가 내부적으로 진행하는 **이미지 최적화 설정** 때문!
  
  <br><br>
   
## * 이미지 최적화
###  Vite와 이미지 최적화
- `src/assets` 폴더의 이미지는 Vite가 빌드 시 자동으로 최적화
- **Data URI 포맷**으로 변환되어 브라우저 메모리에 캐싱됨
  - 예: `<img src="data:image/..." />`

<br><br>

### 빌드와 최적화 확인

- +) 구체적으로 어떻게 이루어지고 어떤 것들이 최적화되는지 확인을 위해서는
  react앱을 build한 다음 배포 모드(프로덕션 모드)로 실행시켜보면 확인 가능

#### 프로젝트 빌드

- 명령어 : `npm run build`
- 빌드 결과는 `dist` 폴더에 생성되며, 최적화된 코드와 리소스 확인 가능

#### 배포 모드 실행

- 명령어 : `npm run preview`
- 배포 모드로 실행된 애플리케이션은 개발자 도구(F12)를 사용해 최적화된 이미지 확인 가능

<br><br>

### `public` 보관과 `assets` 보관의 차이점

#### 1. 이미지 주소 차이

- **`public` 폴더 이미지**

  - 주소 : 일반적인 URL 형태
  - 예 : `<img src="/image1.png" />`
  - 새로고침 시 이미지를 다시 불러옴

- **`src/assets` 폴더 이미지**

  - 주소 : Data URI 포맷(암호문 같은 포맷)
  - 예 : `<img src="data:image/..." />`
  - Data URI는 브라우저 메모리에 캐싱되어 새로고침 시 다시 불러오지 않음

  <br>

#### 2. 새로고침 시 동작 차이

- 브라우저 개발자 도구(f12)의 `Network` 탬에서 확인 가능 :

1. **필터 설정** : `img` 필터 + `Preserve log(네트워크 요청 유지)` 옵션 클릭
2. **확인 방법** :
   - **Data URI 형태 (`src/assets`)** :
     - `size` : `memory cached`로 표
     - `time` : `0ms`(캐싱으로 인해 새로 요청하지 않음)
   - **일반 주소 형태 (`public`)** :
     - `size` : 파일 크기가 표시됨.
     - `time` : 요청 시간이 표시됨.

  <br>

#### 결론

1. **소수의 이미지 사용** : `src/assets`에 저장 → 최적화 및 캐싱 활용
2. **다수의 이미지 사용** : `public` 폴더에 저장 → 브라우저 메모리 과부하 방지.
   <br>

> 참고) **Data URI란?**
>
> - **정의** : 이미지와 같은 외부 데이터들을 문자열 형태로 인코딩해 **브라우저의 메모리에 캐싱**하기 위해서 사용되는 포맷
> - **장점** : 브라우저의 캐싱 메커니즘을 활용해 새로고침 시 이미지를 다시 요청하지 않음.
> - **결론** : 이미지 최적화를 위해 Data URI 포맷이 적용된 `src/assets` 폴더를 활용하면 효율적.

<br>

---

<br>

# 3. 레이아웃 설정

## \* 루트 컨테이너 스타일 설정

- **대상** : `id="root"인 요소의 스타일을 설정
- **이유** : 리액트 앱은 `<body>` 안에 `<div id="root">`를 생성하여 모든 컴포넌트를 이 안에 렌더링함
- **예시** :
  ```css
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

<br>

## \* 요소 가운데 배치

- **방법** :
  - 수평 가운데 정렬 : `margin: 0 auto;`

## \* 높이를 화면에 꽉 차게 설정

- **방법**
  - `min-height: 100vh;` 또는 `height: 100%;` 사용.
- vh(Viewport Height)
  - 현재 브라우저 화면의 높이를 기준으로 설정
  - `100vh` : 화면 높이 100%에 해당

## \* 그림자 설정

- **속성** : `box-shadow`
- **구성 요소**
  - `rgba(색상값, 투명도)` : 그림자 색상과 투명도.
  - `0px 0px 0px 0px` : 그림자의 x-offset, y-offset, blur-radius, spread-radius

### 추가 팁

1. **CSS 변수 사용**

- 색상, 크기 등을 CSS 변수로 설정하면 유지보수가 쉬워짐

  ```css
  :root {
    --main-shadow-color: rgba(100, 100, 100, 0.2);
  }

  .shadow {
    box-shadow: var(--main-shadow-color) 0px 0px 29px 0px;
  }
  ```

2. **반응형 디자인**
   - `vh`와 함께 `vw(Viewport Width)`를 활용하여 브라우저 크기에 따라 유연한 디자인 가능

<br>

---

<br>

# 4. 참고

## \* CSS 변수란?

- CSS에서 반복적으로 사용하는 값을 변수처럼 선언하고 사용하는 기능
- 유지보수와 재사용성 면에서 매우 유용

#### 1. 변수 선언

- CSS 변수는 `:root` 셀렉터에 선언
  - `:root`는 문서의 최상위 요소를 가리키는 셀렉터로, CSS 변수를 전역으로 사용할 수 있게 함
  - 변수 이름은 반드시 `--`(두 개의 대시)로 시작해야 함!
- **예시**
  ```css
  :root {
    --main-color: #3498db; /* 주 색상 */
    --secondary-color: #2ecc71; /* 보조 색상 */
    --font-size: 16px; /* 기본 글꼴 크기 */
    --shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  }
  ```

<br>

#### 2. 변수 사용

- 변수를 사용하려면 `var()` 함수를 사용
  ```css
  color: var(--main-color);
  font-size: var(--font-size);
  box-shadow: var(--shadow);
  ```

<br>

#### 3. 값 대체 (Fallback)

- 변수에 값이 없거나 잘못된 경우 대체값을 지정할 수 있음
  ```css
  color: var(--unknown-color, #000); /* --unknown-color가 없으면 #000 사용 */
  ```

<br>

#### 4. 실전 예제

```css
:root {
  /* 글꼴,색상 관련 */
  --primary-color: #ff5733;
  --text-color: #333;
  --font-family: 'Arial, sans-serif'

  /* 레이아웃 관련 */
  --container-width: 1200px;
  --gap: 20px;

  /* 버튼 관련*/
  --button-bg: #007bff;
  --button-hover-bg: #0056b3;
  --button-color: #fff;
}

/* 글꼴,색상 관련 스타일 */
body {
  color: var(--text-color);
  background-color: var(--primary-color);
  font-family: var(--font-family);
}

/* 레이아웃 스타일 */
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--gap);
}

/* 버튼 스타일 */
button {
  background-color: var(--button-bg);
  color: var(--button-color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--button-hover-bg);
}
```

<br>

#### 5. CSS 변수와 반응형 디자인

- CSS 변수와 미디어 쿼리를 조합하여 화면 크기에 따라 동적으로 변수 값 변경 가능

```css
:root {
  --font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    --font-size: 14px;
  }
}

p {
  font-size: var(--font-size);
}
```

<br>

#### CSS 변수의 장점

1. 재사용성 : 동일한 값을 여러 곳에서 사용 가능
2. 유지보수 용이 : 한 번만 수정하면 모든 관련 요소에 반영
3. 동적 값 변경 : JavaScript를 이용해 런타임 중 CSS 변수 값을 변경할 수 있음
   ```javascript
   document.documentElement.style.setProperty("--main-color", "#ff0000");
   ```

<br><br>

## \* 미디어 쿼리(Media Query)란?

- **CSS에서 특정 조건(화면 크기, 해상도, 방향 등)에 따라 다른 스타일을 적용**할 수 있게 해주는 기능
- **반응형 디자인**을 구현하는 핵심 도구로 사용됨
- CSS에서 화면 크기, 방향, 디바이스 특성에 따라 스타일을 유연하게 적용할 수 있는 필수 도구

### 미디어 쿼리의 역할

- 미디어 쿼리 사용 시 다양한 디바이스(데스크탑, 태블릿, 모바일 등)의 화면 크기와 특성에 따라 적합한 스타일 적용 가능
- 예시 : 화면이 작은 모바일에서는 글꼴 크기를 키우고, 큰 화면에서는 여백을 더 주는 것 가능

### 미디어 쿼리 기본 문법

```css
@media (조건) {
  /* 조건을 만족할 때 적용할 스타일 */
}
```

### 조건 종류

1. **화면 크기**

   - `width`, `height`: 요소의 너비와 높이를 기준으로 조건 지정
   - `min-width`, `max-width`: 최소 또는 최대 너비 지정.
     ```css
     @media (min-width: 768px) {
       body {
         background-color: lightblue;
       }
     }
     ```
     > 위 예제는 화면 너비가 **768px 이상**일 때 배경색을 `lightblue`로 변경

2. **디바이스 타입**

   - `all`: 모든 디바이스 (기본값)
   - `screen`: 화면 출력용 디바이스
   - `print`: 인쇄용 디바이스
   - `speech`: 음성 변환용 디바이스
     ```css
     @media print {
       body {
         font-size: 12pt;
       }
     }
     ```

3. **픽셀 밀도**

- `resolution`: 해상도(픽셀 밀도)에 따라 조건 지정
  ```css
  @media (min-resolution: 2dppx) {
    img {
      filter: grayscale(100%);
    }
  }
  ```

4. **방향**

- `orientation: landscape` (가로 모드)
- `orientation: portrait` (세로 모드)
  ```css
  @media (orientation: portrait) {
    body {
      background-color: lightgreen;
    }
  }
  ```

### 미디어 쿼리의 한계와 대안

- **한계**: 화면 크기에만 의존하므로 복잡한 상태(예: 컴포넌트 크기 변화)에는 대응이 어려움
- **대안**: **CSS 컨테이너 쿼리(Container Queries)** 와 **JavaScript**를 조합하여 더 세밀한 반응형 디자인 구현 가능

<br>

---

<br>
