import React, { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = ({ onePost, getOnePost, deletePost }) => {
  const params = useParams();
  useEffect(() => {
    getOnePost(params.id);
  }, []);

  return (
    <div className="container">
      {onePost ? (
        <div>
          <img src={onePost.image} alt="" />
          <div>{onePost.title}</div>
          <div>{onePost.author}</div>
          <Button onClick={() => deletePost(params.id)}>Delete</Button>
          <Link to={`/edit/${params.id}`}>
            <Button>Edit</Button>
          </Link>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Details;
