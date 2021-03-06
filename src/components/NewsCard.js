import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsCard(props) {
  const img_src = `https://picsum.photos/seed/${props.id}/1000/1000`;

  return (
    <div className="ml-2 mr-2 mb-2 mt-2">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img_src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button href="/news_detail" variant="outline-primary">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
