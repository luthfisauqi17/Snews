import React from "react";
import { Jumbotron, Button, Figure } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Home(props) {
  const random_image = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/800`;
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Jumbotron>
        <h1 className="text-center">
          Welcome to <strong>SNEWS</strong>
        </h1>
        <Figure>
          <Figure.Image
            width={1500}
            height={800}
            alt={random_image}
            src={random_image}
          />
          <Figure.Caption>Source: {random_image}</Figure.Caption>
        </Figure>
        <Button
          className="btn btn-primary btn-lg btn-block"
          href="/news"
          variant="primary"
        >
          Browse News
        </Button>
      </Jumbotron>
    </div>
  );
}

export default Home;
