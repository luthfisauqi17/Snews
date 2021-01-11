import React from "react";
import News from "./News";
import { Jumbotron, Button, Carousel, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

function Home(props) {
  const random_image_1 = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/785`;

  const random_image_2 = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/785`;

  const random_image_3 = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/785`;
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Jumbotron>
        <h1 className="text-center">
          Welcome to <strong>SNEWS</strong>
        </h1>
        <Carousel indicators={false}>
          <Carousel.Item interval={3000}>
            <Figure>
              <Figure.Image
                width={1500}
                height={785}
                alt={random_image_1}
                src={random_image_1}
              />
              <Figure.Caption>Source: {random_image_1}</Figure.Caption>
            </Figure>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Figure>
              <Figure.Image
                width={1500}
                height={785}
                alt={random_image_2}
                src={random_image_2}
              />
              <Figure.Caption>Source: {random_image_2}</Figure.Caption>
            </Figure>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Figure>
              <Figure.Image
                width={1500}
                height={785}
                alt={random_image_3}
                src={random_image_3}
              />
              <Figure.Caption>Source: {random_image_3}</Figure.Caption>
            </Figure>
          </Carousel.Item>
        </Carousel>
        <Button
          className="btn btn-primary btn-lg btn-block"
          href="/news"
          variant="info"
        >
          Browse News
        </Button>
      </Jumbotron>
      <News />
    </div>
  );
}

export default Home;
