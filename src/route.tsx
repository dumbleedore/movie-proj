import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/home";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  );
};
