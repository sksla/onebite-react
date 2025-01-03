# Node.js 기초

## 목차

1. [Node.js란?](#1-nodejs란)
2. [Node.js 설치](#2-nodejs-설치)
3. [Node.js 사용하기](#3-nodejs-사용하기)
4. [Node.js 모듈 시스템 이해하기](#4-nodejs-모듈-시스템-이해하기)
5. [Node.js 라이브러리 사용하기](#5-nodejs-라이브러리-사용하기)

<br>

---

<br>

# 1. Node.js란?

## 갑자기 왜 Node.js를 배워야 하는가?

- **React.js**라는 기술은 **Node.js를 기반으로 동작**하기 때문
- Node.js에 대한 기본 이해 없이는 React와 같은 기술을 제대로 이해하기 어렵다

### Node.js 기반의 주요 기술들

- **React.js**, **Next.js**, **Vue.js**, **Svelte.js** 등

<br><br>

## Node.js란?

- **웹 브라우저가 아닌 환경에서도 JavaScript 코드를 실행**시켜주는 **JavaScript 실행 환경(Run Time)**
- **실행 환경(Run Time)** = 언어를 실행하기 위한 구동기
  - 예: 게임기(게임 구동), Java Virtual Machine(Java 실행)

<br><br>

## Node.js가 필요한 이유

### JavaScript 히스토리

- 초기 JavaScript: 웹페이지 내 단순 기능 구현에 사용
  - 예: 버튼 클릭 시 경고창, 요소 색상 변경
- **한정된 웹 브라우저 환경**
  - 웹 브라우저 내에서만 동작할 수 있도록 개발 되었기 때문에 생산성에만 중심을 두고 언어가 설계됨
- c언어, Java와 달리 문법이 유연하고 작성하기 편리함
- JavaScript의 유연성에 매료된 개발자들: 웹 브라우저 외부에서도 활용하고자 함 <br>
  => **Node.js의 등장**

<br>

### Node.js가 등장한 후

- JavaScript를 어디서든 동작할 수 있는 **범용 언어**로 확장시킴
- Node.js를 이용해서 JavaScript로 많은 것들을 만들어 내기 시작함:

  - 기존에 Java, C, C# 같은 언어로 만들던 웹 서버는 JavaScript로 구축되는 일이 많아짐
  - 더 나아가 모바일 앱, 데스크탑 앱까지 만들기 시작함
  - **웹 서버**: 넷플릭스, 에어비앤비, 등...
  - **모바일 앱**: 페이스북, 인스타그램, 등...
  - **데스크톱 앱**: 슬랙, 디스코드, 등...

<br>

---

<br>

# 2. Node.js 설치

## Node.js 설치 방법

### 1. Node.js 설치

#### - Node.js 설치 파일 다운

- [Node.js 공식 사이트](https://nodejs.org/)에 접속

  - 구글에 `node.js` 검색해서 공식사이트 접속
    <figure>
      <img src="./images/search_nodejs.png" alt="nodejs 검색" width="300" height="200" />
      <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
    </figure>

- **LTS 버전**의 초록색 버튼 클릭해서 설치 파일 다운
  <figure>
      <img src="./images/download_nodejs.png" alt="nodejs 설치파일 다운" width="300" height="200" />
      <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

  - **Current** 버전 : 가장 최신 버전
  - **LTS(Long Term Support)**: 대부분 유저들에게 추천하는 현재 가장 안정적인 버전

- 다운 받은 설치 파일 실행

<br><br>

#### - mac OS

- 별도로 할 것 없이 일반적인 프로그램 설치하듯이 계속 버튼을 눌러서 설치 완료하면 됨
  <figure>
    <img src="./images/install_nodejs_mac.png" alt="mac버전 node설치" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

<br>

#### - Windows

- 설치 시작 화면
  <figure>
    <img src="./images/window_nodejs_install1.png" alt="window버전 node설치1" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- 라이센스 약관 동의 화면
  <figure>
    <img src="./images/window_nodejs_install2.png" alt="window버전 node설치2" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- Node.js가 컴퓨터에 어떠한 경로에 설치될지 결정하는 화면

  - 웬만하면 경로 수정하지 않고 기본값으로 그대로 두는 편이 좋음
  <figure>
    <img src="./images/window_nodejs_install3.png" alt="window버전 node설치3" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- Custom Setup 화면

  - 별도로 커스텀 할 것이 없으니 그냥 넘어감
  <figure>
    <img src="./images/window_nodejs_install4.png" alt="window버전 node설치4" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- 필요한 도구를 자동으로 설치해주는 옵션 화면 (체크하기!)
  <figure>
    <img src="./images/window_nodejs_install5.png" alt="window버전 node설치5" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- Ready to Intall 화면 (설치 준비 완료)
  <figure>
    <img src="./images/window_nodejs_install6.png" alt="window버전 node설치6" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- 설치 중
  <figure>
    <img src="./images/window_nodejs_install7.png" alt="window버전 node설치7" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

- 설치 완료 후 finish 버튼 클릭
  <figure>
    <img src="./images/window_nodejs_install8.png" alt="window버전 node설치8" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

<br><br>

### 2. Node.js 설치 확인

- 설치 후, **터미널**(Mac) 또는 **명령 프롬프트**(Windows)를 열고 다음 명령어 입력:

  ```bash
  node -v
  ```

- 출력 예:

  ```bash
  v20.15.1
  ```

- 예시
  <figure>
    <img src="./images/cmd_node_version.png" alt="node버전 확인" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

  > \* 버전은 설치하는 시기에 따라 다를 수 있다
  >
  > - 맨 앞에 있는 버전이 **20점 대 이상의 짝수 버전**이라면 상관 없음 (⭕)
  > - **홀수 버전** 또는 **20버전 보다 낮은 버전**은 문제가 발생할 수 있음 (❌) <br>
  >   ==> 설치된 Node.js를 제거 한 후 다시 처음부터 설치 과정 진행

- 참고) cmd 창 여는 법
  <figure>
    <img src="./images/open_cmd.png" alt="cmd창 여는 법" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

<br><br>

### 3. NPM(Node Package Manager) 설치 확인

#### - 터미널 또는 명령프롬프트에서 npm 버전 확인하는 명령어 `npm -v` 입력 후 엔터

- Node.js 설치 시 NPM도 함께 설치됨
- **NPM** : Node.js의 프로젝트 단위인 패키지를 관리하는 도구

  - 새로운 패키지 생성, 외부 라이브러리 설치 또는 삭제 등 유용한 기능들을 제공

- **터미널**(Mac) 또는 **명령 프롬프트**(Windows)를 열고 다음 명령어 입력하여 버전 확인:

  ```bash
  npm -v
  ```

- 출력 예 :

  ```bash
  10.7.0
  ```

- 예시
  <figure>
    <img src="./images/cmd_npm_version.png" alt="npm버전 확인" width="300" height="200" />
    <figcaption>출처 : 한입 크기로 잘라 먹는 리액트</figcaption>
  </figure>

  > \* npm 버전이 잘 출력되지 않는 경우
  >
  > - node 설치 과정에서 문제가 발생했을 가능성이 가장 크니까 node 제거 후 다시 설치해야 함

<br><br>

### +) 설치 후 테스트

Node.js가 제대로 설치되었는지 확인하기 위해 간단한 코드 실행 :

1. 터미널 또는 명령프롬프트에서 다음 명령어로 Node.js 실행 :

```bash
node
```

2. 아래 코드를 입력하고 실행 :

```javascript
console.log("Hello, Node.js!");
```

3. 출력 예 :

```plaintext
Hello, Node.js!
```

4. 종료하려면 `Ctrl + C`를 두 번 입력

5. 예시 :
<figure>
  <img src="./images/cmd_node_console.png" alt="node 테스트" width="300" height="200" />
  <figcaption>출처 : 내 cmd 창</figcaption>
</figure>

<br>

---

<br>

# 3. Node.js 사용하기

## 프로젝트(Project)와 패키지(Package)

### 1. 프로젝트(Project)

- 특정 목적을 갖는 프로그램의 단위. <br>
  **예시**:

  - 온라인 쇼핑몰을 만든다 -> "쇼핑몰 프로젝트"를 만든다
  - 포털 사이트 만든다 -> "웹 포털 프로젝트"를 만든다

- Node.js에서는 프로젝트를 **패키지(Package)**라고 부르기도 함.

### 2. 패키지(Package)

- Node.js에서 사용하는 프로그램의 단위
- JavaScript로 만든 모든 앱과 사용할 라이브러리가 패키지라는 단위로 만들어져 있음
- Node.js를 이용해 개발하려면 반드시 **패키지**를 이해하고 사용할 줄 알아야 함

<br><br>

## 실습 : 간단한 Node.js 패키지 만들어 보기

### 1단계 : 패키지의 루트 폴터 생성

> Node 패키지를 생성하려면 패키지의 뿌리가 될 폴더 <br>
> 즉, 루트 폴더를 하나 만들어줘야 됨

- 이번에 사용할 패키지를 위한 새로운 폴더 만들어 줌 (우클릭 + 새폴더)<br>
  **예시**: `ONEBITE-REACT/section03`

<br>

### 2단계 : VSCode에서 생성한 루트 폴더를 열기

- 방법 : VSCode 우측 상단의 `File` 클릭 -> `Open Folder` -> 루트 폴더 선택 후 열기
- 이 상태에서 루트 폴더를 뿌리로 하는 새로운 Node.js 패키지를 생성하면 됨

<br>

### 3단계 : 패키지 생성

#### (1) 터미널에서 패키지 생성(초기화)

- VSCode 터미널 열기 (단축키)

  - Windows: `Ctrl + J`
  - macOS: `Command + J`

- 새로운 패키지를 생성(초기화)하는 명령어 입력 :

  ```bash
  npm init
  ```

> - 별도의 터미널을 열 필요 없이 VSCode 내에서 자체적으로 제공되는 터미널을 이용하면 훨씬 더 편리함
> - VSCode 내부에서 터미널을 열면 자동으로 이 터미널의 작업 경로가 루트 폴더 내부로 설정됨

#### (2) 입력 정보를 확인하며 엔터로 넘어가기

- `package name: (기본값)` : 생성하려는 패키지 이름
  - 기본값은 루트 폴더명
  - 예 :
    ```bash
    package name: (section03)
    ```
- `version:(기본값)` : 패키지의 버전

  - 예 :
    ```bash
    version: (1.0.0)
    ```
  - 버전은 배포할 때나 의미가 있기 때문에 실습 중에는 신경 쓰지 않아도 됨

- `descrption:` : 패키지의 간단한 설명 입력 (없으면 생략 가능)
- `entry point: (index.js)` : 메인으로 실행될 JS 파일(실습 중엔 그냥 넘어감)
- 기타 정보 (`test command`, `git repository`, `keywords`, `license` 등)는 엔터로 넘어감
- `Is this OK? (yes)`: 마지막으로 설정한 새로운 패키지의 정보를 보여주며 맞는지 물어봄

  엔터를 입력해서 패키지 생성 완료

#### (3) 결과

- 패키지 생성이 완료되면 루트 폴더 내에 `package.json`이라는 새로운 설정 파일이 자동으로 생성됨
- `package.json` : 이 파일에는 생성한 패키지 정보를 관리하는 설정이 포함되어있음

<br>

### 4단계 : 패키지 안에 새로운 JavaScript 파일 생성 및 Node.js로 실행

#### (1) `index.js` 파일 생성

- 루트 폴더에에 `index.js` JavaScript 파일 생성 후 간단한 자바스크립트 코드 작성 :

  ```javascript
  console.log("안녕 Node.js");
  ```

#### (2) Node.js로 실행

- 터미널에 `node` 명령어 + 실행시키고 싶은 **파일의 경로와 이름** 입력 :

  - `section03/index.js` 파일 Node.js로 실행 :

    ```bash
    node index.js
    ```

  - `section03/src/index.js` 파일 Node.js로 실행 :

    ```bash
    node src/index.js
    ```

  - **출력 결과**

    ```plaintext
    안녕 Node.js
    ```

> 패키지 안에 계속해서 코드를 작성하다 보면 새로운 파일, 폴더들이 계속 생성됨 <br>
> --> Node로 실행하고자하는 파일의 경로가 복잡해질 수 있음 <br>
>
> ==> 이럴 경우 **패키지 스크립트**를 이용하면 편리함

<br>

### 5단계 : 패키지 스크립트 활용

\* **패키지 스크립트** : `package.json` 파일에서 `scripts`라는 항목 안에 들어있는 일종의 매크로들

#### (1) `package.json`에 스크립트 추가

- `script` 항목에 `start`라는 새로운 스크립트 추가 :
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"
  }
  ```
- 이렇게 하면 터미널에 경로를 다 명시해줄 필요 없이 스크립트의 이름인 `start`로만 이 명령을 한 방에 수행 가능해짐

#### (2) 스크립트 실행

- 터미널에 `npm run`이라는 명령어 뒤에 `start` 입력 :
  ```bash
  npm run start
  ```
- **결과** : 우리가 설정한 `node src/index.js` 명령어가 실행됨

> 패키지 내부의 파일과 경로가 복잡해지게 될 경우에는 `scripts`라는 패키지의 기능을 이용해서 <br>
> 복잡한 경로에 있는 파일도 Node를 통해서 실행하도록 명령할 수 있다!

<br>

---

<br>

# 4. Node.js 모듈 시스템 이해하기

<br>

---

<br>

# 5. Node.js 라이브러리 사용하기

<br>

---

<br>
