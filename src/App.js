import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
