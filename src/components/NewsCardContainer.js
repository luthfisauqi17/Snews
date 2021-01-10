import React from "react";
import NewsCard from "./NewsCard";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsCardContainer(props) {
  return (
    <div>
      <h1>News/</h1>
      <Row>
        <Col className="d-flex justify-content-center">
          <NewsCard id="1" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="2" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="3" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="4" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="5" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="6" />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard id="7" />
        </Col>
      </Row>
    </div>
  );
}

export default NewsCardContainer;
