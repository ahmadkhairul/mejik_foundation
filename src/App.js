import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import Setting from "./pages/Setting";
import Article from "./pages/Article";
import Transfer from "./pages/Transfer";
import Logout from "./pages/Logout";
import History from "./pages/History";

import "./App.css";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/article" component={Article} />
      <Route path="/donate" component={Donate} />
      <Route path="/setting" component={Setting} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/history" component={History} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Index} />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default App;
