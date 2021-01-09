import React from "react";
import { Helmet } from "react-helmet";
import NewsCardContainer from "./NewsCardContainer";

function News(props) {
  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      <NewsCardContainer />
    </div>
  );
}

export default News;
