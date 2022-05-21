import React from "react";
import ResetPassword from "./page/ResetPassword";
import Login from "./page/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./page/Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
