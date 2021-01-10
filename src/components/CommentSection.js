import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CommentSection(props) {
  const [name, setName] = useState("Your name");
  const [comment, setComment] = useState("Your comment");

  return (
    <div>
      <h1>Comments</h1>
      <Form>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g. John Doe"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your comment here..."
            onChange={(event) => setComment(event.target.value)}
          />
        </Form.Group>
        <CommentCard name={name} comment={comment} />
        <Button className="mt-4" variant="primary" type="submit">
          Add comment
        </Button>
      </Form>

      <h3 className="mt-4">All comments:</h3>
    </div>
  );
}

export default CommentSection;
