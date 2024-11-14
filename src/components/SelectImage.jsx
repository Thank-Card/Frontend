import React, { useEffect, useRef, useState } from "react";
import Gallery from "@img/Gallery.png";
import "@styles/SelectImage.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeURL, changeNick } from "@/redux/store";

const SelectImage = () => {
  const dispatch = useDispatch();
  const widthCalc = useRef();
  const [nickName, setNickName] = useState("Owner");
  const userName = useSelector((state) => {
    return state.sendUser;
  });

  const handleImageContext = async (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      try {
        const result = await readFile(file, reader);
        dispatch(changeURL(result));
      } catch (error) {
        console.error("Error reading file: ", error);
      }
    }
  };

  const readFile = (file, reader) => {
    return new Promise((resolve, reject) => {
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const updateNick = () => {
    const newNick = document.getElementById("nickname").value;
    setNickName(newNick);
  };

  const deleteOverflow = () => {
    const nickField = document.getElementById("nickname");
    alert("닉네임이 너무 깁니다.");
    const adjustNick = nickField.value.slice(0, -2);
    adjustNick.replace(" ", "");
    nickField.value = adjustNick;
    setNickName(adjustNick); // 닉네임 업데이트
  };

  useEffect(() => {
    // canvas를 사용하여 문자열의 너비 측정
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "1.5rem Miama-Regular"; // 입력 필드와 동일한 폰트 설정

    const nickWidth = context.measureText(nickName).width;

    const nickNameBorder = document.getElementById("nickname");
    const nickWholeBorder = document.getElementById("From");

    // 최대 너비 계산
    const maxWidth = nickWholeBorder.parentElement.scrollWidth;

    // console.log(maxWidth);
    // console.log(nickWidth);

    if (nickWidth > maxWidth / 2) {
      deleteOverflow();
    } else {
      nickWholeBorder.style.width = `${(nickWidth + 25) / 10 + 4}rem`;
      nickNameBorder.style.width = `${
        nickWidth === 0 ? 5.5 : nickWidth / 10
      }rem`;
      //console.log(nickNameBorder.style.width);
    }

    const finalNick = document.getElementById("nickname").value;
    dispatch(changeNick(finalNick));
  }, [nickName]);

  const disableInput = () => {
    const parentDiv = document.getElementById("SelectImage").parentElement;
    console.log(parentDiv.id);
    if (parentDiv.id === "Review") {
      const inputs = document.getElementById("nickname");
      inputs.setAttribute('disabled', true);
    }
  };

  useEffect(() => {
    setNickName(userName);
  }, []);

  return (
    <div id="SelectImage">
      <label htmlFor="file" id="image">
        <img src={Gallery} alt="갤러리" />
        <span>카드에 사용할 이미지를 선택해보세요</span>
      </label>
      <input
        type="file"
        name="image_select"
        id="file"
        accept="image/*"
        onChange={handleImageContext}
      />
      <div id="From">
        <span style={{ float: "left" }}>From </span>
        <input
          type="text"
          placeholder={nickName === "" ? "Owner" : nickName}
          id="nickname"
          onChange={updateNick}
          onClick={disableInput}
        />
      </div>
      <span ref={widthCalc} id="Test">
        {nickName}
      </span>
    </div>
  );
};

export default SelectImage;
