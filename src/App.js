import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Write from "./pages/Wrtie";
import SendConfirm from "./pages/Send_Confirm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/send" element={<SendConfirm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
