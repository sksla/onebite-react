# Spring Boot

## 1. 설치 및 세팅

### 자바 설치 - OpenJDK 17

- #### 아래의 url 클릭한 후 다운로드

  https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html

  <img src="./images/download_openjdk17.png" alt="download_openJDK17" width="400" height="300" />

<br>

- #### 경로 수정 필요 없이 계속 next 누르면서 설치하면 됨

- #### 자바 버전 확인 :

  ```bash
  java -version
  ```

### STS4 다운 및 설치

- #### STS 공식 사이트에서 설치 파일 다운로드

  https://spring.io/tools

  <img src="./images/download_STS4.png" alt="download_openJDK17" width="400" height="200" />

  > - 운영체제에 맞는 버튼을 누르면 다운로드가 진행되며 `spring-tool-suite-4-4.22.1.RELEASE-e4.32.0-win32.win32.x86_64.self-extracting.jar` 이름의 파일이 다운로드된다(버전 이름은 다를 수 있음).
  > - 버전은 자주 업데이트 되므로 첫번째인 **메인 버전**과 중간의 **미들버전**만 중요하게 보면 됨

- #### 다운 받은 파일 압축 풀기

  - 파일 더블클릭하면 압축이 풀리면서 `sts-4.22.1 RELEASE` 라는 폴더 생성됨
  - 압축 푼 폴더 C드라이브 내로 이동

- #### workspace 생성

  - `workspaces` 폴더 안에 `09_springboot-workspace` 폴더 생성

- #### 정리

| 구분      | Spring Legacy(MVC) Project (Spring) | Spring Boot(Starter) Project (Spring Boot) |
| --------- | ----------------------------------- | ------------------------------------------ |
| Java 버전 | 11                                  | 17                                         |
| IDE       | STS3 (3.9.17.RELEASE)               | STS4 (4.22.0.RELEASE)                      |

### STS 환경 설정

- `C:\workspaces/09_springboot-workspace` 경로로 STS4 실행

#### - workspace 세팅

- 서버 세팅은 안해도 됨 (내장 톰캣을 기본적으로 가지고 있기 때문)
- Show View의 탭은 `Package Explorer`, `Boot Dashboard`(Server 역할), `Problems` 탭 빼고 다 없애도 됨

  - Window -> Show view 에서 `console` 탭 추가

#### - Encoding 설정

- help 탭에 `Eclipse marketplace`

<br>

---

<br>

### jsp 작업을 위한 세팅

<br>

---

<br>

### 리소스 핸들링 작업

<br>

---

<br>

## 2. Migration 작업

### BCryptPassword 작업

<br>

---

<br>

### MyBatis, Logback, log4jdbc 작업

<br>

---

<br>

### 파일 업로드 작업

<br>

---

<br>

### Interceptor 작업

<br>

---

<br>

### Scheduler 작업

<br>

---

<br>

### WebSocket 작업

<br>

---

<br>
