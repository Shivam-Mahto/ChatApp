import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ChatPage from "../pages/ChatPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
