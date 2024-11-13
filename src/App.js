import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Write from "./pages/Write";
import SendConfirm from "./pages/Send_Confirm";
import Review from "./pages/CardReview";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/write" element={<Write />} />
      <Route path="/send" element={<SendConfirm />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
};

export default App;
