import { useState } from "react";
import "./App.css";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const API = "http://localhost:8000/posts";

  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState({});
  const navigate = useNavigate();

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  async function addPost(newPost) {
    await axios.post(API, newPost);

    alert("Successfully");
    navigate("/");
  }

  async function getOnePost(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOnePost(data);
  }

  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    navigate("/");
  }

  async function updatePost(id, updPost) {
    await axios.patch(`${API}/${id}`, updPost);
    navigate("/");
  }

  return (
    <div className="App">
      <Header />
      <MainRoutes
        posts={posts}
        getPosts={getPosts}
        addPost={addPost}
        onePost={onePost}
        getOnePost={getOnePost}
        deletePost={deletePost}
        updatePost={updatePost}
      />
    </div>
  );
}

export default App;
