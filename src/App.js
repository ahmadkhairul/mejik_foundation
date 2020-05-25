import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Index from "./pages/Index";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import Setting from "./pages/Setting";
import Article from "./pages/Article";
import Transfer from "./pages/Transfer";
import Logout from "./pages/Logout";

import "./App.css";

const AUTH_USER = gql`
  query {
    user {
      id
      email
      firstName
      lastName
      phoneNumber
      role
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(AUTH_USER); // User Authentication

  if (loading) return <Splash />;

  let routes = (
    <Switch>
      <Route path="/article" component={Article} />
      <Route path="/donate" component={Donate} />
      <Route path="/setting">
        <Setting user={data} />
      </Route>
      <Route path="/transfer" component={Transfer} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Index} />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default App;
