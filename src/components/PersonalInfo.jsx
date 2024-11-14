import React, { useEffect } from "react";
import "@styles/PersonalInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeRecv } from "@/redux/store";

const PersonalInfo = () => {
  let today = new Date();
  const dispatch = useDispatch();

  //console.log(today.getMonth());

  let year = today.getFullYear(); //년도
  let month = today.getMonth() + 1; //월
  let date = today.getDate(); //날짜

  dispatch(changeDate(`${year}/${month}/${date}`));

  const recvUser = useSelector((state) => {
    return state.recvUser;
  });

  const updateRecv = (e) => {
    dispatch(changeRecv(e.target.value));
  };

  useEffect(()=>{
    if(document.getElementById('PersonalInfo').parentElement.id==="Review")
      document.querySelector("#Name input").setAttribute("disabled", true);
  },[])

  return (
    <div id="PersonalInfo">
      <p id="Date">
        {year}/{month}/{date}
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
