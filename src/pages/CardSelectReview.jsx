import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Button from "@components/Button";
import styles from "../styles/CardSelectReview.scss";

const CardSelectReview = () => {
  const location = useLocation();
  const selectedImage = location.state?.selectedImage; // 전달받은 이미지

  return (
    <>
      <Header />
      <div className={styles.Select}>
        <div className={styles.CardText}>크리스마스 카드🎄</div>
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
          <Button text="카드 읽기" nav={"write"} />
        </div>
      </div>
    </>
  );
};

export default CardSelectReview;
