import React, { useState, useRef, useEffect } from "react";
import "@styles/LetterPaper.scss";

const LetterPaper = () => {
  const LetterLine = () => <div className="letter-line"></div>;
  const LetterCount = Array.from({ length: 8 });
  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

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

  useEffect(()=>{
    const letterPaper = document.getElementById('letter-paper');
    const parentDiv = letterPaper.parentElement;
    //console.log(parentDiv.id);
    if(parentDiv.id==='Review'){
      const letterArea = document.getElementById('letter-area');
      letterArea.setAttribute('readonly', true);
    }
  }, []);

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
      />
    </div>
  );
};

export default LetterPaper;
