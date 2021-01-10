import { Carousel } from "bootstrap";
import React from "react";
import { Jumbotron, Button, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

function Home(props) {
  const random_image = `https://picsum.photos/seed/${Math.floor(
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
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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

{
  /* <Figure>
  <Figure.Image
    width={1500}
    height={785}
    alt={random_image}
    src={random_image}
  />
  <Figure.Caption>Source: {random_image}</Figure.Caption>
</Figure> */
}
