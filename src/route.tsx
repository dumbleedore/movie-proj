import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home/home";
import { Movie } from "./pages/movie/movie";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route element={<Movie />} path="/movie/:name"></Route>
    </Routes>
  );
};
