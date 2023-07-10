import { useState } from "react";
import "./App.css";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const API = "http://localhost:8000/posts";

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  return (
    <div className="App">
      <Header />
      <MainRoutes posts={posts} getPosts={getPosts} />
    </div>
  );
}

export default App;
