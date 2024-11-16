import React from "react";
import "@styles/LinkModal.scss";
import Copy from "@img/Copy.png";
import Close from "@img/Close.png";

const LinkModal = ({ isOpen, onClose, sendLink }) => {
    //console.log(isOpen);

    if(!isOpen) return null;

  return (
    <>
      <div id="ModalBackground" onClick={onClose}></div>
      <div id="LinkModal">
        <img
          src={Close}
          alt="닫기 버튼"
          id="Close"
          onClick={onClose}
        />
        <div className="content">
          <p>감사 카드</p>
          <p>작성이 완료되었습니다!</p>
          <p>소중한 사람에게 어서 전송해주세요!</p>
        </div>
        <p id="Link_End">From Opening</p>
        <div id="LinkArea">
          <img src={Copy} alt="copy" id="Copy" />
          <div id="Link">http://www.thankfulnote.com/card/{sendLink}</div>
        </div>
      </div>
    </>
  );
};

export default LinkModal;
