import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Details from "./components/Details";
import Edit from "./components/Edit";

const MainRoutes = ({
  posts,
  getPosts,
  addPost,
  onePost,
  getOnePost,
  deletePost,
  updatePost,
}) => {
  return (
    <Routes>
      <Route path="/" element={<List posts={posts} getPosts={getPosts} />} />
      <Route path="/add" element={<Add addPost={addPost} />} />
      <Route
        path="/details/:id"
        element={
          <Details
            onePost={onePost}
            getOnePost={getOnePost}
            deletePost={deletePost}
          />
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Edit
            updatePost={updatePost}
            onePost={onePost}
            getOnePost={getOnePost}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
