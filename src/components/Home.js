import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Home(props) {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Jumbotron>
        <h1>
          Welcome to <strong>SNEWS</strong>
        </h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button href="/news" variant="primary">
            Browse News
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
