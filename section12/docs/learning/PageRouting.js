/*
페이지 라우팅
1. 소개
  * 페이지 라우팅이란?
  - 경로에 따라 알맞은 페이지를 렌더링 하는 과정

  * MPA(Multipage Application) 방식
  - 서버가 여러 개의 페이지를 가지고 있고 요청이 들어오면 요청에 맞는 페이지를 응답해주는 방식
  - 많은 서비스가 사용하는 전통적인 방식 : MPA + 서버 사이드 렌더링

  > MPA 방식의 단점 : 페이지 이동이 매끄럽지 않고 비효율적임
                     다수의 사용자 접속시, 서버의 부하가 심해짐

  * 서버 사이드 렌더링(Server Side Rendering)
  - mpa 방식에서 브라우저가 페이지를 요청했을 때 미리 완성되어 있는 페이지를 응답해주는 방식

  ==> React.js는 이 방식을 따르지 않음 (쾌적한 페이지 이동 제공이 어렵기 때문)

  * SPA(Single Page Application) - React App이 채택한 방식
  - 서버로부터 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성하는 방식
  
  > SPA 장점 : 페이지 이동이 매끄럽고 효율적임
              다수의 사용자가 접속해도 크게 상관 X

  * SPA의 작동 방식
  1. 서버에는 기본적인 틀 역할의 index.html과 실제 컴포넌트가 담긴 JS File들이 있음
  2. 브라우저(클라이언트)에서 접속 요청이 들어옴
  3. 서버에서 기본 틀인 html 파일을 하나 보내 준 다음
  4. 모든 JS 파일을 보내주기 쉽게 Vite가 하나로 묶어서 보내줌 ==> Bundling(묶다) 하다
  5. 브라우저에서 Bundle Js 파일을 직접 실행해서 파일에 작성된 컴포넌트들을 화면에 직접 렌더링 함 
      ==> 클라이언트 사이드 렌더링
  +) index.html + Bundle Js File = 하나의 React App

  * 클라이언트 사이드 렌더링(CRS, Client Side Rendering)
  - 클라이언트 측에서 렌더링을 진행

  * SPA의 페이지 이동
  - 페이지가 처음 로드된 이후에는 서버로부터 추가적인 페이지를 요청하지 X
    자체적으로 새로운 페이지에 필요한 컴포넌트들로 화면 교체
    ==> 모든 페이지, 컴포넌트의 정보가 다 포함되어 있기 때문에 가능
  
  * MPA와 SPA의 페이지 이동 차이
    MPA : 모든 요소 교체
    SPA : 필요한 요소만 교체

2. 라우팅 

  *  React Router
  - npmjs.com에 등록되어 있는 라이브러리
    대다수의 리액트 앱이 사용하고 있는 대표적 라이브러리
    React에서 CRS기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리

  * react-router 라이브러리 설치(버전 6 이상이어야 함)
  - npm i react-router-dom

  * 페이지 라우팅 하기
    1. main.jsx에서 BrowserRouter를 import 하기
    2. BrowserRouter 태그로 App 태그 감싸주기 : 감싸져 있는 부분들은 브라우저의 url과 맵핑 될 수 있음
      > BrowserRouter : state에 주소와 관련된 정보 저장
                       Navigation.Provider, Location.Provider와 같은 context객체의 Provider 컴포넌트를 이용해서
                       모든 자손 리액트 컴포넌트들에게 데이터 공급
    3. App.jsx에서 Routes, Route를 import 하기
    4. 바뀔 부분을 Routes 태그로 감싸준다
    5. Route 태그 작성 -> 실질적으로 url경로와 컴포넌트를 맵핑시켜줌
      > path 속성 : 속성값으로 경로 작성
      > element 속성의 : 속성값으로 컴포넌트 작성
      ex) <Route path="경로" element={<컴포넌트 />} 

    !! 주의 사항 !!
    1. Routes 컴포넌트 안에는 Route컴포넌트만 들어갈 수 있음
    2. Routes 컴포넌트 바깥에 있는 요소는 경로와는 상관없이 모든 페이지에서 렌더링 됨 
        ==> 어떤 페이지에서도 공통적으로 사용되는 요소로 작성


3. 페이지 이동 

  * Link 컴포넌트
  - React-Router-Dom 이 제공하는 컴포넌트, a 태그를 대체하는 기능
  - Link 컴포넌트로 만든 부분을 누르면 URL경로가 바뀌면서 해당 경로로 지정된 컴포넌트가 보여진다.
  - 클릭만 하면 이동하기 때문에 다른 연산과정 없이 페이지를 이동할 때 쓰인다.
  - 클라이언트 사이드 렌더링 방식으로 페이지 이동

    > Link 사용 방법
      1. Link를 import하기
      2. Link 태그 작성
      3. 링크는 to 속성값을 연결 (to 속성의 속성값으로 경로 작성)

      ex) <Link to={"경로"}>이동</Link>

    > Link컴포넌트과 a태그의 차이점
    - a 태그 : 클라이언트 사이드 렌더링 방식 X
               전체 페이지 재렌더링(브라우저 주소를 이동하고 페이지 자체를 새로고침) ==> 페이지 깜빡임 발생
               상태값 유지 X, 속도 저하
               외부 프로젝트와 연결할 때 주로 사용
    - Link 컴포넌트 : SPA의 특징에 맞게 필요한 부분만 재렌더링, 나머지는 그대로 유지
                     데이터를 필요한 부분만 불러올 수 있음 ==> 속도향상에 도움됨
                     프로젝트 내에서 페이지 전환하는 경우 사용
      
               
               
      ==> React App 내부에서 내부 링크를 만들어야할 때는 a태그 보다 Link 태그를 이용하는게 낫다!

  * useNavigate
  - react-route-dom에서 제공하는 커스텀 훅
  - useNavigate 함수 실행시 페이지 이동할 수 있게 해주는 navigate 함수 반환
  - 조건이 필요한 곳에서 navigate 함수를 호출해서 경로 이동 가능
    ex) 로그인 페이지에서 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭했을 때 다른 페이지로 이동할 때

   > useNavigate 사용 방법
    1. useNavigate를 import하기
    2. useNavigate()가 반환하는 함수를 변수에 저장
    3. 조건이 필요한 곳 onclick 속성으로 이벤트 핸들러 안 코드에 navigate변수명('경로')와 같이 문자열 경로 전달
    ex) const navigate = useNavigate();

        return (
          <div>
            <button onClick={()=>{navigate("경로");}}
          </div>
        )
  > useNavigate를 직접 호출하지 않고 변수로 선언해서 반환된 함수를 호출하는 이유?
    - hook의 규칙
      - 컴포넌트 최상단에서만 호출해야함
      - 다른 조건문, 함수선언문, 반복문 등 중첩된 함수 안에서는 호출 불가능
      - 컴포넌트 내부 함수에서 callback으로 호출 X
      - 함수 컴포넌트에서 호출 가능 (Custom Hook에서 예외처리 가능)

  * Link 컴포넌트와 useNavigate hook의 차이
  1. Link
    클릭 시 바로 이동하는 로직 구현 시에 사용
    ex) 상품 리스트에서 상세 페이지 이동 시
  2. useNavigate
  특정 조건에 따라 페이지 이동을 해야할 경우
  페이지 전환 시 추가로 처리해야 하는 로직이 있을 경우 useNavigate 사용
  ex) 로그인 버튼 클릭 시
  회원가입 되어 있는 사용자 -> Main 페이지로 이동
  회원가입이 되어 있지 않은 사용자 -> SignUp 페이지로 이동


4. 동적 경로
  * 동적경로(Dynamic Segments)란?
  - 동적인 데이터를 포함하고 잇는 경로
    ex) 상품 조회 페이지
  - URL Parameter 방식과 Query String 방식(? 뒤에 변수명과 값 명시)이 있음
  

  * URL Parameter 방식 :
  - / 뒤에 아이템의 id를 명시 ex) ~/product/1, ~/product/2, ...
  - 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용됨
  
    > url parameter 사용방법
      1. 동적 경로 설정
      : Router 컴포넌트의 path의 속성값에 / 추가 하고 :parameterName 작성
        ex) <Router path="/userProfile/:id" element={<UserProfile />}/>
      2.  해당 컴포넌트에서 파라미터 읽기
        1) useParams 훅을 import 하기
          - useParams : 현재 브라우저에 명시한 url parameter의 값을 가져오는 커스텀 훅
        2) 변수에 useParams()를 호출한 값 저장
          ex) const params = useParams(); 또는 const {id} = useParams();
            

  * Query String 방식 
  - ? 뒤에 변수명과 값 명시 ex) ~/search?q="검색어"
  - 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용됨

    > Query String 사용방법
     1. 쿼리스트링을 사용하는 컴포넌트에서 useSearchParams 커스텀 훅 import 하기
      * useSearchParams()의 반환값으로 searchParams 객체와 setSearchParams 함수가 제공됨
        > searchParams: URL의 쿼리 파라미터를 포함한 URLSearchParams 객체.
                        지금 URL에 있는 쿼리 파라미터들을 보여주는 도구
        > setSearchParams: 쿼리 파라미터를 업데이트하는 함수.
     2. 쿼리 파라미터 읽기
      : searchParams 객체의 get 메소드 사용
        ex) const [searchParams] = useSearchParams();
            const query = searchParams.get("query") 
            ==> url에서 "query"라는 파라미터 값을 가져옴
     3. 쿼리 파라미터 변경(url을 새로고침 없이 변경 가능)
      : setSearchParams 함수 사용
        ex) const [params, setParams] = useSearchParams();
            setSearchParams({query:"apple"})

            또는

            const [params, setParams] = useSearchParams();
            const query = 'apple';

            setSearchParams({query}) // * 객체 리터럴(Object literal) 중 단축 속성명(shorthand property names) 문법
            
            +) 단축 속성명(shorthand property names) 문법
              : ES6에서 새로 도입된 문법
                키와 값이 같을 때, JavaScript에서는 자동으로 연결(키와 값이 동일한 이름일 때 사용)
                **key: key**와 같은 형태를 생략 가능
                변수 이름과 객체의 키가 같으면, 변수의 값을 그 키에 대응하는 값으로 자동으로 할당
                ex) const username = 'alice';
                    const password = '1234';

                    const user = {
                      username,  // username: username
                      password   // password: password
                    };


*/

/*

 폰트, 이미지, 레이아웃

 1. 폰트 설정

  * 폰트 파일 다운로드 방식
  : 폰트 파일을 다운로드해 프로젝트에 포함하는 방법

  방법
  1. 원하는 폰트 파일을 /public 폴더에 넣기
  2. index.css에서 폰트 파일 불러오기
  - css에서 폰트를 불러오려면 @font-face 라는 설정을 작성
  > font-family 속성 : 폰트의 이름을 원하는대로 적어줌
  > src 속성 : 폰트 파일 위치를 명시(확장자까지!!)
  ex) index.css
  @font-face {
    font-family: "NanumPenScript";
    src: url("/NanumPenScript-Regular.ttf");
  }
  ==> public 폴더 바로 아래를 가리키려면 그냥 /를 적어주면 됨

  3. 적용하기
  ex) body * {
        font-family: "NanumPenScript";
      }

  
  * 웹 폰트 방식
   : 특정 URL로 폰트를 가져오는 방법

   방법
   1. 구글 Fonts에 접속(https://fonts.google.com)
   2. 원하는 폰트 검색 
   3. style 섹션에서 select regular 400 클릭해 폰트 선택
   4. [selected families]창에 정상적으로 추가된 거 확인
   5. 웹 폰트 주소 확인 위해 <style> 태그 항목에서 @import~로 시작하는 웹 폰트 주소 복사
   6. index.css에 붙여 수정
   ex)
   @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap');

   body{
     font-family: "Nanum Pen Script";
     margin: 0px;
   }


 2. 이미지 설정
  * 이미지 렌더링 설정 방법 1
  
  1. 렌더링할 이미지 파일들을 src/assets 폴더 안에 넣기
    - 저장된 image 파일들은 import문을 통해 불러와서 이용 가능
  2. 이미지가 렌더링 될 컴포넌트 파일(ex: App.jsx)에서 이미지 import로 불러오기
    - 확장자까지 입력!
    ex) //App.jsx
    import image1 from './assets/image1.png;
    import image2 from './assets/image2.png;
  
  3. return문 안에서 렌더링하도록 설정
    - img 태그의 src속성으로 불러온 파일명을 적는다
    ex) 
    fuction App(){
      return(
        <>
          <div>
            <img src={image1} />
            <img src={image2} />
          <div>
        </>
      )
    }

  > public 폴더와 assets폴더 모두 정적인 파일을 보관할 수 있는 곳인데 이미지 파일들을 
  왜 font 파일은 public에 이미지 파일은 aseets 폴더에 보관하는 걸까?
  ===> vite가 내부적으로 진행하는 이미지 최적화 설정 때문!
  이미지를 최적화할 것이 아니라면 public 폴더에 넣어도 상관 없음
  
   +) 이미지를 public 폴더에 넣었을 때
    - vite가 자동으로 제공하는 이미지 최적화가 동작하지 않음
    - public 폴더 안 이미지들은 import를 통해 불러오지 않음
    - URL을 통해 불러오도록 설정
    ex)
      fuction App(){
        return(
          <>
            <div>
              <img src={"/image1.png"} />
              <img src={"/image2.png"} />
            <div>
          </>
        )
      }  

      > 이미지를 assets 폴더에 넣었을 때 ==> * 이미지 렌더링 설정 방법 1 참고


  * 이미지 최적화
  - vite가 내부적으로 진행
  참고) 구체적으로 어떻게 이루어지고 어떤 것들이 최적화되는지 확인을 위해서는 
  react앱을 build한 다음 배포 모드(프로덕션 모드)로 실행시켜보면 확인 가능
    - 명령어
    > 프로젝트 빌드 : npm run build
      - 리액트 앱의 빌드 결과로 dist 파일 생성됨
      - dist/assets 폴더 안에 index~.js 파일 : 하나의 파일에 작성한 모든 리액트 코드들이 압축된 상태로 번들링 되어있음
    > 배포모드로 실행(빌드 결과물 실행) : npm run preview
      - 포트번호가 달라짐
    - public 보관과 assets 보관의 차이점 (빌드 결과물에 접속해 개발자 도구(f12)에서 확인 가능)
    
      1. 불러온 이미지들의 주소가 다름
        - element 탭에서 확인 가능
        > public 폴더에서 불러온 이미지들 주소 : 일반적인 주소 => 새로고침 시 매번 불러옴
        ex) <img src="/image1.png" />
        > src/assets 에서 불러온 이미지들 주소 : 암호문 같은 포맷(Data URI) => 새로고침 시 다시 불러오지 않음
        ex) <img src="data:image/~~~~~~" />
      2. 새로고침시 다시 불러오는 지 아닌지가 다름
        - network 탭에서 확인 가능 
          : img 필터 +  Preserve log(네트워크요청유지)옵션 클릭 후 size, time 컬럼에서 확인
            ==>새로고침 할 때마다 브라우저에서 지금 어떤 이미지들을 어떻게 요청하고 있는지 로그가 잘 쌓임
           > Data URI 형태의 이미지 : size -> 용량이 적혀있음 / time : 걸린 시간이 적혀잇음
           > 일반적인 주소 형태 이미지 : size -> memory cached(메모리에 저장됨) / time : 0ms 
    
    +) Data URI
    : 이미지와 같은 외부 데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위해서 사용되는 포맷
    Data URI 포맷으로 이미지 주소 설정 시 자동으로 브라우저 메모리에 저장(캐싱)되어서 새로고침하더라도 다시 불러오지 않도록 최적화 됨

   
    >> 한 번 불러온 이미지들을 다시 불러오지 않도록 브라우저의 캐시를 이용해서 이미지를 최적화하기 위해서는 
    ==> src/assets 폴더에 저장 후 import문을 통해 불러온다

    !! 주의 !!
    불러오는 이미지가 굉장히 많은 경우(만개, 10만개,...)엔 img를 public 폴더에 넣는게 좋음 
    ==> 많이 캐싱하면 브라우저 메모리 용량 과부하됨

    - 결론
    소수의 이미지 사용 ==> src/assets 폴더에 보관해 캐싱되도록
    굉장한 다수의 이미지 사용 ==> /pubilc 폴더에 보관

  * 이미지 렌더링 설정 방법 2 (모듈화)
    : 이미지 렌더링 설정 방법 1은 이미지 파일 개수에 따라 import문을 작성해야하는 번거로움 존재
    ==> 이미지를 불러오는 코드들을 별도의 모듈로 분리

    - 방법
    1. src/util 폴더에 js파일 생성
    2. js파일 상단에 import문 작성
    ex)
    // get-image.js
    import image1 from './../assets/image1.png;
    import image2 from './../assets/image2.png;
    
    +) 이미지 렌더링 설정 방법 1과 경로가 다르니 경로에 주의!
      
    3. 이미지를 반환하는 함수 작성
      - 함수를 내보내기 위해 맨 앞에 export 키워드 추가
    ex)
    export funciton getImage(){
      return image1;
    }

    4. 렌더링할 컴포넌트에서 해당 js파일 import로 불러오기
    ex)
    // App.jxs
    import {getImage} from './util/get-image;

    5. 불러온 함수를 image 태그의 src 속성에 넣기
    ex)
    <img src={getImage()} />


3. 레이아웃 설정
  - 루트 컨테이너 스타일 설정시 id가 root인 요소의 스타일로 설정
    이유 : 리액트 앱에서는 <body> 안에 <div id="root">인 요소 아래에 root 컴포넌트가 렌더링 됨 

  - 요소 가운데 배치 => margin: 0 auto;
  - 요소의 높이를 세로로 꽉차게 늘리기 : min-height: 100vh; height:100%;
   +) vh(Viewport Height) : 현재 브라우저의 스크린 높이 (100vh : 스크린의 최대 높이 만큼 설정)
  - 그림자 설정 : ex) box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 29px 0px;




*/
