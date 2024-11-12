import React, { useContext } from "react";
import Gallery from "@img/Gallery.png";
import "@styles/SelectImage.scss";
import { ImageContext } from "./ImageContext";

const SelectImage = () => {
  const {setImage} = useContext(ImageContext);

  const handleImageContext = (event) => {
    if(event.target.files.length > 0){
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div id="SelectImage">
      <label for="file" id="image">
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
      <div id="From">From Sihyun</div>
    </div>
  );
};

export default SelectImage;
