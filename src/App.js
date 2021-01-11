import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

function App(props) {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Container>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/news_detail">
              <NewsDetail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <hr className="mt-4" />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
