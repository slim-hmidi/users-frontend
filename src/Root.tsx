import React from "react";
import { Router, Route } from "react-router-dom";
import CreateUser from "./containers/user/CreateUser";
import UpdateUser from "./containers/user/UpdateUser";
import history from "./history";


import App from "./App";


const Root = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route exact path="/createUser" component={CreateUser} />
      <Route exact path="/updateUser/:userId" component={UpdateUser} />
    </Router>
  )
}

export default Root;