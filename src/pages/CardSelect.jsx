import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Button from "@components/Button";
import styles from "../styles/CardSelect.module.scss";

const CardSelect = () => {
  const location = useLocation();
  const selectedImage = location.state?.selectedImage; // 전달받은 이미지
  const selectedText = location.state?.CardText; // 전달받은 텍스트

  return (
    <>
      <Header />
      <div className={styles.Select}>
        <div className={styles.CardText}>{selectedText || "선택된 카드"}</div>{" "}
        {/* 텍스트 표시 */}
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected Card"
            className={styles.SelectedImage}
          />
        ) : (
          <p>선택된 카드가 없습니다.</p>
        )}
        <div className={styles.SelectButton}>
          <Button text="카드 선택 완료" nav={"write"} />
        </div>
      </div>
    </>
  );
};

export default CardSelect;
