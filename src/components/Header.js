import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  return (
    <div className="mb-4">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/home">SNEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="btn btn-primary ml-1 mr-1 mt-1 mb-1 active"
              href="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="btn btn-secondary ml-1 mr-1 mt-1 mb-1"
              href="/news"
            >
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
