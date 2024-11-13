import React from 'react';
import Gallery from '@img/Gallery.png';
import "@styles/SelectImage.scss";
import { useDispatch } from 'react-redux';
import { changeURL } from '@/redux/store';

const SelectImage = () => {
  
  const dispatch = useDispatch();

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
      <div id="From">From Sihyun</div>
    </div>
  );
};

export default SelectImage;