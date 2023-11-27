// Header.js
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Blog" className="nav-link">Blog</Link>
            <Link to="/blogform" className="nav-link">Create post</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
