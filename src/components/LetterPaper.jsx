import React, { useState } from "react";
import "@styles/LetterPaper.scss"; // CSS 파일 import

const LetterPaper = () => {
  const [lines, setLines] = useState(Array(8).fill("")); // 8줄 초기화

  const handleChange = (index, event) => {
    const newLines = [...lines];
    newLines[index] = event.target.value;
    setLines(newLines);
  };

  const handleKeyDown = (index, event) => {
    const textfield = document.getElementById("letter-paper");
    const nowInput = textfield.children[index];
    const nextInput = textfield.children[index + 1];
    const previousInput = textfield.children[index - 1];

    // 엔터 키, 아래키를 눌렀을 때 다음 줄로 이동
    if (event.key === "Enter" || event.key === "ArrowDown") {
      event.preventDefault();
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(
          nextInput.value.length,
          nextInput.value.length
        );
      }
    }

    // 자동 줄바꿈 처리
    if (nowInput.scrollWidth > nowInput.clientWidth && index < lines.length - 1) {
      event.preventDefault(); // 기본 동작 방지
      const currentValue = nowInput.value;
      const lastSpaceIndex = currentValue.lastIndexOf(' '); // 마지막 공백 찾기

      if (lastSpaceIndex !== -1) {
        // 마지막 공백 이전까지의 텍스트를 현재 줄에 남기고 나머지를 다음 줄로 이동
        const newCurrentLine = currentValue.slice(0, lastSpaceIndex);
        const overflowText = currentValue.slice(lastSpaceIndex + 1);

        // 상태를 업데이트하기 전에 DOM을 직접 수정하여 성능 향상
        nowInput.value = newCurrentLine; // 현재 줄 업데이트
        setLines((prevLines) => {
          const updatedLines = [...prevLines];
          updatedLines[index] = newCurrentLine; // 현재 줄 상태 업데이트
          updatedLines[index + 1] += overflowText; // 다음 줄에 오버플로우 텍스트 추가
          return updatedLines;
        });

        // 다음 입력 필드로 포커스 이동
        nextInput.focus();
        nextInput.setSelectionRange(
          overflowText.length,
          overflowText.length
        );
      }
    }

    // 사용자가 위의 키를 누를 때 윗줄로 이동
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (previousInput) {
        previousInput.focus();
        previousInput.setSelectionRange(
          previousInput.value.length,
          previousInput.value.length
        );
      }
    }

    // 사용자가 내용을 지울 때 모두 지우면 위로 이동
    if (
      nowInput.value.length === 0 &&
      event.key === "Backspace" &&
      index > 0
    ) {
      event.preventDefault();
      previousInput.focus();
      previousInput.setSelectionRange(
        previousInput.value.length,
        previousInput.value.length
      );
    }
  };

  return (
    <div id="letter-paper">
      {lines.map((line, index) => (
        <input
          key={index}
          type="text"
          value={line}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)} // 키 이벤트 분리
          className="letter-line"
          maxLength="27"
        />
      ))}
    </div>
  );
};

export default LetterPaper;