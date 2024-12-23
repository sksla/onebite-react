import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/getStringedDate";

// date객체를 문자열로 변환 ==> 모듈화

// onSubmit 함수 ==> new 페이지 : onCreate(새로운 일기 생성)
//                  edit 페이지 : onUpdate(기존 일기 수정)
const Editor = ({ initData, onSubmit }) => {
  // state를 객체 형태로 => 여러 개의 값을 하나의 state에 저장하고 관리할 수 있음
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // onChange 이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name; // 어떤 요소에 입력이 들어온건지(요소의 name속성값)
    let value = e.target.value; // 입력된 값이 무엇인지?(요소의 value값)

    if (name === "createdDate") {
      value = new Date(value); // 문자열값을 날짜객체로 변경
    }

    setInput({
      ...input, // 기존의 state값 유지
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
