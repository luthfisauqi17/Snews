import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

function Header(props) {
  return (
    <Navbar
      className="mb-4"
      bg="light"
      variant="light"
      expand="lg"
      sticky={"top"}
    >
      <Navbar.Brand className="iconFont" href="/home">
        SNEWS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="text-primary btn btn-outline-primary ml-1 mr-1 mt-1 mb-1"
            href="/home"
          >
            <FontAwesomeIcon icon={faHome} />
            Home
          </Nav.Link>
          <Nav.Link
            className="text-info btn btn-outline-info ml-1 mr-1 mt-1 mb-1"
            href="/news"
          >
            <FontAwesomeIcon icon={faNewspaper} />
            News
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
