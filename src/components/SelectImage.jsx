import React from "react";
import Gallery from "@img/Gallery.png";
import "@styles/SelectImage.scss";

const SelectImage = () => {

    return(
        <div id="SelectImage">
          <label for="file" id="image">
            <img src= {Gallery} alt="갤러리"/>
            <span>카드에 사용할 이미지를 선택해보세요</span>
          </label>
        <input type="file" name="image_select" id="file" accept="image/*" />
        <div id="From">From Sihyun</div>
      </div>
    )
}

export default SelectImage