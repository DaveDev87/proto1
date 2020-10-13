import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Noticia from "./views/Noticia";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Noticia:id">
          <Noticia />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
