import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "views/home/";
import Login from "views/login/";
import Register from "views/register";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path="/login" exact render={props => <Login {...props} />} />
          <Route path="/register" exact render={props => <Register {...props} />} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App