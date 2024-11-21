# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 페이지 라우팅
## 목차
1. [소개](#intro)
   - 페이지 라우팅이란?
   - [mpa 방식과 서버 사이드 렌더링](#-MPA(Multi-Page-Application)-방식)
   - spa 방식과 클라우드 사이드 렌더링
2. [라우팅](#routing)

---
<br>

## 1 소개
<a id="intro"></a>

### - 페이지 라우팅이란?
- **페이지 라우팅**: URL(경로)에 따라 알맞은 페이지를 렌더링하는 과정.

<br><br><br>

### - MPA(Multi Page Application) 방식
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

### - 서버 사이드 렌더링(SSR, Server Side Rendering)
- 브라우저가 페이지를 요청했을 때, **완성된 HTML 페이지**를 서버가 즉시 응답.
- **MPA 방식**에서 자주 사용.


> React.js는 기본적으로 이 방식을 따르지 않음.  
> 이유: SPA 방식이 더 쾌적한 페이지 이동 경험을 제공하기 때문.

<br><br><br>

### - SPA(Single Page Application) 방식
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

### - SPA의 작동 방식
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

### - 클라이언트 사이드 렌더링(CSR, Client Side Rendering)
- 클라이언트(브라우저)가 JavaScript를 실행하여 화면을 렌더링.
- React, Vue.js 등 대부분의 프론트엔드 라이브러리에서 CSR 방식을 사용

<br><br><br>


### - SPA와 MPA의 페이지 이동 차이
| **특징**          | **MPA**                              | **SPA**                              |
|--------------------|---------------------------------------|---------------------------------------|
| **페이지 전환**    | 모든 요소를 새로고침                 | 필요한 부분만 교체                   |
| **속도**          | 페이지 전환 시 느림                  | 빠르고 매끄럽게 전환                 |
| **SEO**           | 서버에서 제공하므로 SEO 친화적       | 추가 설정(SSR/SSG) 필요              |
| **서버 부하**     | 많은 페이지 요청으로 부하가 높음     | 한 번 로드 이후 부하가 적음          |
| **요청 방식**     | 서버로부터 전체 페이지 요청    | 클라이언트에서 뷰 업데이트   |



> ### 참고: React와 SPA
> React는 기본적으로 **SPA 방식을 채택**하며, React Router를 활용해 클라이언트 사이드 라우팅을 구현함.
> SPA 방식의 특징과 작동 방식을 이해하면 React 애플리케이션 개발이 훨씬 수월해짐.

---

## 2 라우팅
<a id="routing"></a>

## 1. React Router 소개
- **React Router**: React에서 CRS 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리.
- **npmjs.com에 등록된 라이브러리**로, 대부분의 리액트 앱에서 사용됨.

## 2. react-router 라이브러리 설치
- 버전 6 이상이어야 함.
- 설치 명령어:
  ```bash
  npm i react-router-dom
