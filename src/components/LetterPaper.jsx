import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "@/redux/store";
import "@styles/LetterPaper.scss";

const LetterPaper = () => {
  const LetterLine = () => <div className="letter-line"></div>;
  const LetterCount = Array.from({ length: 8 });
  const textareaRef = useRef(null);
  const initialText = useSelector((state) => state.text); // Redux에서 초기 text 값 가져오기
  const [text, setText] = useState(initialText);
  const dispatch = useDispatch();

  //텍스트 높이 계산
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  //입력 줄 수 제한
  function limitRows(event) {
    const textarea = textareaRef.current;
    if (textarea) {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      //console.log(lineHeight)
      const maxRows = 8;
      const maxHeight = lineHeight * maxRows;

      if (textarea.scrollHeight > maxHeight) {
        event.preventDefault();
        alert("편지는 8줄까지 입력 가능합니다.");
        const lines = textarea.value;
        const length = lines.length;

        //8줄까지 한정
        const truncatedText = lines.slice(0, length - 2);
        // console.log(truncatedText);
        setText(truncatedText);
        textarea.value = text;
      } else {
        setText(event.target.value);
      }
    }
  }

  //review 페이지 시 입력 불가
  useEffect(()=>{
    const letterPaper = document.getElementById('letter-paper');
    const parentDiv = letterPaper.parentElement;
    //console.log(parentDiv.id);
    if(parentDiv.id==='Review'){
      const letterArea = document.getElementById('letter-area');
      letterArea.value = initialText;
      letterArea.setAttribute('readonly', true);
    }
  }, []);

  //textarea 포커스 아웃될 시 텍스트 업데이트
  const updateText = () => {
    const newText = textareaRef.current.value;
    setText(newText);
    dispatch(changeText(newText));
    document.getElementById('letter-area').value = initialText;
  };

  return (
    <div id="letter-paper">
      <div id="letter-space">
        {LetterCount.map((_, index) => (
          <LetterLine key={index} />
        ))}
      </div>
      <textarea
        ref={textareaRef}
        id="letter-area"
        rows="8"
        onKeyUp={limitRows}
        onBlur={updateText}
      />
    </div>
  );
};

export default LetterPaper;
