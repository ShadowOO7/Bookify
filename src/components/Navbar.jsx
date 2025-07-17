import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useFirebase } from "../context/Firebase"; // ✅ use context

const MyNavBar = () => {
  const firebase = useFirebase();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">📚 Bookify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            {!firebase.isLoggedIn && (
              <>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </>
            )}
            {firebase.isLoggedIn && (
              <>
                <Nav.Link as={NavLink} to="/book/list">Add Listing</Nav.Link>
                <Button variant="outline-light" onClick={firebase.logoutUser}>Logout</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;