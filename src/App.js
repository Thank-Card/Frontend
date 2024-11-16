import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Write from "./pages/Write";
import SendConfirm from "./pages/Send_Confirm";
import Review from "./pages/CardReview";
import Login from "./pages/Login";
import Join from "./pages/Join";
import UserInfo from "./pages/UserInfo";
import CardSelect from "./pages/CardSelect";
import MyLetterBox from "./pages/MyLetterBox";
import CardSelectReview from "./pages/CardSelectReview";
import CardReviewFromLink from "./pages/CardReivewFromLink";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/write" element={<Write />} />
      <Route path="/send" element={<SendConfirm />} />
      <Route path="/review" element={<Review />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/userinfo" element={<UserInfo />} />
      <Route path="/cardselect" element={<CardSelect />} />
      <Route path="/letterbox" element={<MyLetterBox/>}/>
      <Route path="/cardselectreview/:year" element={<CardSelectReview/>}/>
      <Route path="/Letter/:id" element={<CardReviewFromLink />} />
    </Routes>
  );
};

export default App;
