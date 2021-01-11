import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CommentSection(props) {
  const [name, setName] = useState("Your name");
  const [comment, setComment] = useState("Your comment");

  const [comments, setComments] = useState([
    { name: "Bob", comment: "Wow, i cannot believe that" },
    { name: "Andy", comment: "Seriously, i thought so" },
    { name: "Jack", comment: "I'm not surprised to hear that" },
  ]);

  return (
    <div>
      <h2>Comments</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const temp = { name: name, comment: comment };
          setComments([...comments, temp]);
        }}
      >
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
        <Button variant="primary" type="submit">
          Add comment
        </Button>
      </Form>

      <h3 className="mt-4">All comments:</h3>
      {comments.map((item, key) => (
        <CommentCard name={item.name} comment={item.comment} key={key} />
      ))}
    </div>
  );
}

export default CommentSection;
