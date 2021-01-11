import React from "react";
import CommentSection from "./CommentSection";
import Helmet from "react-helmet";
import { Row, Col, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsDetail(props) {
  const random_image_1 = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/785`;

  const random_image_2 = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1001
  )}/1500/785`;

  return (
    <div>
      <Helmet>
        <title>News details</title>
      </Helmet>
      <Row>
        <Col className="d-flex justify-content-around">
          <h1>News Title</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-around">
          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={1500}
              height={785}
              alt={random_image_1}
              src={random_image_1}
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel posuere ligula. Nulla efficitur metus at quam dignissim, ut
            dapibus sapien gravida. Proin sollicitudin lacinia metus, sit amet
            fermentum tortor pretium eget. Mauris malesuada nibh eget imperdiet
            ultricies. Curabitur fringilla porta justo ut cursus. Aliquam
            efficitur nisl vitae volutpat tincidunt. Cras pretium lectus vitae
            lectus suscipit porttitor. Curabitur eget vehicula enim. Nulla
            accumsan vel elit sed vestibulum.
          </p>
          <p>
            Quisque eleifend magna ac est feugiat convallis. Etiam nec elit
            posuere, efficitur leo at, dignissim nunc. Donec in sapien vitae
            nunc molestie elementum quis eget felis. Cras interdum aliquam enim,
            vitae aliquet sem faucibus vel. Sed egestas massa ut eros faucibus,
            non dapibus risus viverra. Sed blandit tristique ligula, congue
            volutpat magna facilisis sed.
          </p>
        </Col>
        <Col>
          <Figure>
            <Figure.Image
              width={1500}
              height={785}
              alt={random_image_2}
              src={random_image_2}
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Nullam non laoreet enim, ac tincidunt ligula. Curabitur auctor
            blandit malesuada. Sed ornare nulla et est iaculis, sodales dictum
            velit hendrerit. Ut vehicula, nunc sed volutpat placerat, diam massa
            dictum arcu, quis vestibulum justo sem eget dui. Ut diam urna,
            tincidunt quis malesuada eget, lobortis quis lorem. Ut a magna enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            nulla ante, scelerisque ut orci vitae, euismod finibus risus.
            Curabitur volutpat ante non purus venenatis, id bibendum ipsum
            elementum. Vivamus tristique, odio sit amet posuere ullamcorper,
            diam orci condimentum quam, ut sollicitudin tellus velit sit amet
            justo. Integer ultricies eros nec blandit condimentum. Duis sed
            mauris quis tellus cursus egestas.
          </p>
        </Col>
      </Row>
      <hr />
      <CommentSection />
    </div>
  );
}

export default NewsDetail;
