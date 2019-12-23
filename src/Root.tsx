import React from "react";
import { Router, Route } from "react-router-dom";
import CreateUserForm from "./containers/User/CreateUserForm";
import history from "./history";


import App from "./App";


const Root = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route exact path="/createUser" component={CreateUserForm} />
    </Router>
  )
}

export default Root;