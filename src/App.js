import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Write from "./pages/Write";
import SendConfirm from "./pages/Send_Confirm";
import Review from "./pages/CardReview";
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="" element={<Main />} />
            <Route path="/write" element={<Write />} />
            <Route path="/send" element={<SendConfirm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/join" element={<Join />}/>
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
