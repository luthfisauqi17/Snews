import React from "react";
import { Card } from "react-bootstrap";

function CommentCard(props) {
  return (
    <div>
      <Card body>
        <Card.Title className="text-primary">{props.name}</Card.Title>
        <Card.Text>{props.comment}</Card.Text>
      </Card>
    </div>
  );
}

export default CommentCard;
