import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const List = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container d-flex flex-wrap justify-content-between align-center p-3">
      {posts.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.author}</Card.Text>
            <Link to={`/details/${item.id}`}>
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default List;
