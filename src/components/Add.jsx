import React, { useState } from "react";

const Add = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

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
    addPost(newPost);
  }

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
      <button onClick={handleSave}>Add</button>
    </div>
  );
};

export default Add;
