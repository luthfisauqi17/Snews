import React from "react";
import NewsCard from "./NewsCard";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsCardContainer(props) {
  return (
    <div>
      <h1>News/</h1>
      <Row className="d-flex justify-content-center">
        <NewsCard id="1" />
        <NewsCard id="2" />
        <NewsCard id="3" />
        <NewsCard id="4" />
        <NewsCard id="5" />
        <NewsCard id="6" />
        <NewsCard id="7" />
      </Row>
    </div>
  );
}

export default NewsCardContainer;
