import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = ({ onePost, getOnePost, updatePost }) => {
  const [title, setTitle] = useState(onePost.title);
  const [author, setAuthor] = useState(onePost.author);
  const [image, setImage] = useState(onePost.image);
  const { id } = useParams();

  function handleSave() {
    if (!title || !author || !image) {
      alert("Fill all blank!");
      return;
    }

    const newPost = {
      title,
      author,
      image,
    };
    updatePost(id, newPost);
  }

  useEffect(() => {
    getOnePost(id);
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        required
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleSave}>Edit</button>
    </div>
  );
};

export default Edit;
