import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Details from "./components/Details";
import Edit from "./components/Edit";

const MainRoutes = ({ posts, getPosts }) => {
  return (
    <Routes>
      <Route path="/" element={<List posts={posts} getPosts={getPosts} />} />
      <Route path="/add" element={<Add />} />
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Edit />} />
    </Routes>
  );
};

export default MainRoutes;
