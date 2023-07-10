import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const List = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container d-flex flex-wrap justify-content-between align-center p-3">
      {posts.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default List;
