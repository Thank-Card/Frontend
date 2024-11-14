import React from "react";
import Header from "../components/Header";
import Button from "@components/Button";
import CardDoorWay from "@components/CardDoorWay";
import styles from "../styles/CardSelect.module.scss";

const CardSelect = () => {
  return (
    <>
      <Header />
      <div className={styles.Select}>
        <div className={styles.CardText}>크리스마스 카드🎄</div>
        <CardDoorWay />
        <div className={styles.SelectButton}>
          {" "}
          <Button text="카드 선택 완료" nav={"write"} />
        </div>
      </div>
    </>
  );
};

export default CardSelect;
