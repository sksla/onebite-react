/*

Edit.jsx:32 You should call navigate() in a React.useEffect(), not when your component is first rendered.
*/

/*
// localStorage.setItem("test", "hello");
  // localStorage.setItem("person", JSON.stringify({ name: "이정환" }));

  // console.log(localStorage.getItem("test"));
  // JSON.parse()의 인수가 undefined 면 오류남
  // console.log(JSON.parse(localStorage.getItem("person")));

  // localStorage.removeItem("test");
*/

/*

2. 기능 구현

* 삭제하기 기능

- 사용자가 실수로 클릭할 수 있는 경우에 대비하여 확인 팝업창 띄우고 확인을 누를 때 삭제하도록 기능 구현
- 삭제 버튼이 클릭되었을 때 동작할 이벤트 핸들러 작성 : `onClickDelete`
  - `widow.confirm` :
  - `DiaryDispatchContext`로 부터 `onDelete` 함수를 공급받아 Edit 컴포넌트 안에서 `onClickDelete` 함수가 실행 되었을 때 그냥 호출해줌
  - 코드 구현 :
  ```jsx
  import { useContext } from "react";
  import { DiaryDispatchContent } from "../App";

  const Edit =() => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete} = useContext(DiaryDispatchContext);

    const onClickDelete = () => {
      if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
        // 일기 삭제 로직
        onDelete(params.id);

        // 삭제가 끝난 후 Home 페이지로 이동 (+ 뒤로 가기 방지)
        nav("/", { replace: true });
      }
    };
  }
  ```

* 기존 데이터를 기본값으로 설정


- 수정 중인 일기의 id값을 기준으로 그 일기의 모든 데이터 받아오기
  - 일단 `DiaryStateContext` 안의 `data` state를 공급 받아 옴
- 방법 1 ==> 문제 발생
  - 컴포넌트가 처음 실행될 때 navigate 함수 호출시키고 있음 ==> 문제 발생 (경고창만 뜨고 navigate 함수가 동작하지 않음)
  - 코드 
    ```jsx
    import { useContext } from "react";
    import { DiaryDispatchContent, DiaryStateContext } from "../App";

    const Edit =() => {
      const params = useParams();
      const data = useContext(DiaryStateContext); // data State 공급받음

      const getCurrentDiaryItem = () => {
        const currentDiaryItem = data.find(
          (item) => String(item.id) === String(id)
        );

        // 사용자가 존재하지 않는 일기로 진입했을 때
        if (!currentDiaryItem) {
          window.alert("존재하지 않는 일기입니다.");
          nav("/", { replace: true }); // navigate 함수 동작 X
        }

        return currentDiaryItem;
      };


      const currentDiaryItem = getCurrentDiaryItem();
      return();
    }
    ```   

  - `getCurrentDiaryItem` 함수 작성 
    - 공급받은 data에서 params의 id에 해당하는 일기 데이터 하나를 꺼내오는 함수
    - 사용자가 존재하지 않는 일기로 진입했을 경우 경고 메세지 띄운 후 Home 페이지로 이동 ==> 문제 발생
    - 존재하는 일기로 진입한 경우 => currentDiaryItem 반환
  - Edit 컴포넌트 내부에서 getCurrentDiaryItem 함수 호출해 현재 일기 데이터 변수에 담기
  
  - 오류 내용 : navigate 함수는 컴포넌트가 처음 렌더링 될 때가 아니라 useEffect 함수 안에서 호출이 되어야 한다

    - 브라우저 콘솔 탭에 경고 메시지 
    ```
    Edit.jsx:32 You should call navigate() in a React.useEffect(), not when your component is first rendered.
    ```

    - 코드상에서 navigate 함수가 Edit 컴포넌트가 호출이 되었을 때 getCurrentDiary 함수 안에서 호출되고 있음
      즉, navigate 함수는 Edit 컴포넌트가 처음 호출이 되었을 때 바로 호출이 되고 있음
      이 타이밍에는 컴포넌트가 어떠한 값도 return하지 않은 상태 == 컴포넌트가 화면에 렌더링되기 전(마운트 되기 전)이기 때문에 navigate 함수가 작동될 수 없음

      따라서 컴포넌트가 렌더링 되자마자 호출하고 싶다면 useEffect를 사용해서 이 컴포넌트가 일단 마운트까지는 된 다음에 이 함수를 실행해라라고 알려주고 있음

    - react router의 navigate 함수는 컴포넌트들이 다 마운트된 이후에만 동작할 수 있음
      - 이유 : react router의 navigate 같은 기능들도 결국에는 이전에 main.jsx 파일에 설정해놓은 BrowserRouter라는 컴퍼넌트가 공급하고 있는 기능이기 때문
      
  - 이 방법의 문제점 : BrowserRouter가 렌더링도 되기 전에 navigate 함수를 쓰려고 해 문제가 발생함

   +) 혼란스러운 부분 : onClickDelete 함수 navigate 함수 호출은 왜 가능한지?
    - onClickDelete 함수는 이벤트 핸들러임
    - 실제로 브라우저에 컴포넌트가 렌더링이 되고 삭제 버튼이 클릭 되었을 때 동작하고 그 안의 navigate함수가 호출이 됨
    - 따라서 위의 문제에는 해당되지 않음


- 방법 2 (문제 해결)
  - useEffect를 이용해 컴포넌트가 렌더링 된 후(마운트 이후)에 바로 호출하도록 만들기
  - useEffect를 사용한 코드 :
    - getCurrentDiaryItem 함수 안의 코드 useEffect의 콜백 함수 안에 넣기
    - 기존 getCurrentDiaryItem 함수가 return하던 결과 값을 받아올 수 없으므로 결과 값을 State에 보관할 수 있도록 State를 만들어 줌
    ```jsx
    import { useContext, useEffect, useState } from "react";
    import { DiaryDispatchContent, DiaryStateContext } from "../App";

    const Edit =() => {
      const params = useParams();
      const data = useContext(DiaryStateContext); // data State 공급받음
      const [curDiaryItem, setCurDiaryItem] = useState(); // 초기값은 일단 빈값

      // params의 id, data State 변경, 마운트 될 때 실행
      useEffect(() => {
        const currentDiaryItem = data.find(
          (item) => String(item.id) === String(id)
        );

        // 사용자가 존재하지 않는 일기로 진입했을 때
        if (!currentDiaryItem) {
          window.alert("존재하지 않는 일기입니다.");
          nav("/", { replace: true });
        }

        setCurDiaryItem(currentDiaryItem);
      }, [param.id, data]);


      const currentDiaryItem = getCurrentDiaryItem();
      return();
    }
    ```

  - useEffect에 의해서 컴퍼넌트가 마운트된 이후이거나 param.id나 data State가 바뀌었을 때,
    일기 데이터로부터 find 메서드를 통해서 현재 수정하려고 하는 일기 아이템의 데이터를 꺼내와 
    setCurDiary 함수를 통해 curDiaryItem State에 보관하게 됨 
  - curDiaryItem State의 값을 Editor 컴포넌트의 기본값으로 설정
    - Edit 컴포넌트 안 Editor 컴포넌트에게 initData(초기값)라는 props로 curDirayItem State의 값 보내기
      ```jsx
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
      ``` 
  - Editor 컴포넌트에서 props로 받은 initData 값이 변경될 때마다 input State의 초기값으로 설정
    - useEffect 사용
    - 주의 : initData 안의 createdDate는 타임스탬프 형태이고 input 안의 createdDate는 날짜 객체임!
    ```jsx
    import { useState, useEffect } from "react";

    const Editor = ({ initData, onSubmit }) => {
      const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
      });

      
      useEffect(() => {
        if (initData) { // initData가 실제로 존재한다면(일기 데이터를 잘 불러왔을 경우)
          setInput({
            ...initData,
            // 타임스탬프 형식인 initData.createdDate를 날짜객체로 바꿈
            createdDate: new Date(Number(initData.createdDate)), // init.createdData가 문자열일 수 있으므로 숫자타입르로 형변환
          });
        }
      }, [initData]); // initData의 값이 변경될 때마다 실행

    }
    ```
 
* 작성 완료 버튼(수정)
  - 수정 확인 알림창 띄운 후 확인을 눌렀을 때 수정 완료하고 home 페이지로 이동
  - Edit 페이지에서 onSubmit 함수를 만든 후 Editor 컴퍼넌트에 props로 전달
    (자세한 내용은 6_new-page.md 참고)
  - `DiaryDispatchContext`로 부터 `onUpdate` 함수를 공급 받아 onSubmit 내부에서 호출
  - 코드 :
    ```jsx
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

    const onSubmit = (input) => {
      if (window.confirm("일기를 정말 수정할까요?")) {
        onUpdate(
          params.id,
          input.createdDate.getTime(), // 타임스탬프 형식
          input.emotionId,
          input.content
        );
        nav("/", { replace: true });
      }
    };
    ```


*/
