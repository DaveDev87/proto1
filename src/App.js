import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Noticia from "./views/Noticia";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Noticia/:id" component={Noticia} />
      </Switch>
    </Router>
  );
}

export default App;
