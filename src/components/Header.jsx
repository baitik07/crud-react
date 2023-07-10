import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>

        <Link to="/add">
          <Navbar.Brand>Add new</Navbar.Brand>
        </Link>
        <Link to="/">
          <Navbar.Brand>Else...</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
