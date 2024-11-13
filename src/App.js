import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Write from "./pages/Wrtie";
import Login from './pages/Login';
import Join from './pages/Join'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Join />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
