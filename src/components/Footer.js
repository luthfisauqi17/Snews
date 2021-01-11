import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer(props) {
  return (
    <div className="bg-light">
      <Container>
        <p>
          &copy; 2020 SNEWS, Inc. &middot; <a href="#">Privacy</a> &middot;{" "}
          <a href="#">Terms</a>
        </p>
      </Container>
    </div>
  );
}

export default Footer;
