import React from "react";
import NewsCard from "./NewsCard";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsCardContainer(props) {
  return (
    <div>
      <h1>News/</h1>
      <Row>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="5 Reasons TECHNOLOGY Is A Waste Of Time"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel posuere ligula. Nulla efficitur metus at quam dignissim, ut dapibus sapien gravida. Proin sollicitudin lacinia metus, sit amet fermentum tortor pretium eget."
            id="1"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="The Ultimate Secret Of TECHNOLOGY
"
            description="Mauris malesuada nibh eget imperdiet ultricies. Curabitur fringilla porta justo ut cursus. Aliquam efficitur nisl vitae volutpat tincidunt. Cras pretium lectus vitae lectus suscipit porttitor. Curabitur eget vehicula enim. Nulla accumsan vel elit sed vestibulum."
            id="2"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="Should Fixing TECHNOLOGY Take 60 Steps?"
            description="Nullam non laoreet enim, ac tincidunt ligula. Curabitur auctor blandit malesuada. Sed ornare nulla et est iaculis, sodales dictum velit hendrerit. Ut vehicula, nunc sed volutpat placerat, diam massa dictum arcu, quis vestibulum justo sem eget dui."
            id="3"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="The Secrets To TECHNOLOGY
"
            description="Ut diam urna, tincidunt quis malesuada eget, lobortis quis lorem. Ut a magna enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ante, scelerisque ut orci vitae, euismod finibus risus. Curabitur volutpat ante non purus venenatis, id bibendum ipsum elementum. Vivamus tristique, odio sit amet posuere ullamcorper, diam orci condimentum quam, ut sollicitudin tellus velit sit amet justo. Integer ultricies eros nec blandit condimentum. Duis sed mauris quis tellus cursus egestas."
            id="4"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="What You Should Have Asked Your Teachers About TECHNOLOGY
"
            description="Quisque eleifend magna ac est feugiat convallis. Etiam nec elit posuere, efficitur leo at, dignissim nunc. Donec in sapien vitae nunc molestie elementum quis eget felis. Cras interdum aliquam enim, vitae aliquet sem faucibus vel. Sed egestas massa ut eros faucibus, non dapibus risus viverra. Sed blandit tristique ligula, congue volutpat magna facilisis sed."
            id="5"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="5 Brilliant Ways To Use TECHNOLOGY
"
            description="Nulla volutpat ex vel mattis dapibus. Mauris vestibulum sapien nulla. Maecenas sit amet suscipit velit. Proin ac ullamcorper turpis, ut scelerisque tortor."
            id="6"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <NewsCard
            title="The Hidden Mystery Behind TECHNOLOGY
"
            description="Etiam facilisis urna velit, id egestas nibh ornare at. Ut interdum eu dolor quis sodales. Maecenas aliquet eget turpis vel viverra. Donec efficitur felis massa, a dictum nisl elementum in. Nam sit amet nibh quis elit laoreet bibendum sed sit amet eros."
            id="7"
          />
        </Col>
      </Row>
    </div>
  );
}

export default NewsCardContainer;
