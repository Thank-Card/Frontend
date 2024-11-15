import React, { useEffect } from "react";
import "@styles/PersonalInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeRecv } from "@/redux/store";

const PersonalInfo = () => {
  let today = new Date();
  const dispatch = useDispatch();

  //console.log(today.getMonth());

  const recvUser = useSelector((state) => {
    return state.recvUser;
  });

  const sendDate = useSelector((state) => {
    return state.date;
  })

  const updateRecv = (e) => {
    dispatch(changeRecv(e.target.value));
  };

  useEffect(() => {
    const year = today.getFullYear(); //년도
    const month = today.getMonth() + 1; //월
    const date = today.getDate(); //날짜

    dispatch(changeDate(`${year}/${month}/${date}`));

    if (document.getElementById("PersonalInfo").parentElement.id === "Review")
      document.querySelector("#Name input").setAttribute("disabled", true);
  }, []);

  return (
    <div id="PersonalInfo">
      <p id="Date">
        {sendDate}
      </p>
      <div id="Name">
        Dear
        <input
          type="text"
          placeholder={recvUser === "You" ? "YOU" : recvUser}
          onChange={updateRecv}
        ></input>
      </div>
    </div>
  );
};

export default PersonalInfo;
