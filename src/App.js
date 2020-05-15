import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Header from "./templates/Header";
import Footer from "./templates/Footer";

import Index from "./pages/index";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import Setting from "./pages/Setting";
import Article from "./pages/Article";
import Transfer from "./pages/Transfer";

import FlexContainer from "./components/MobileContainer";

import "./App.css";

const App = () => {
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

  const { data: user, loading } = useQuery(AUTH_USER);

  if (loading) return <Splash />;
  // console.log(user);

  return (
    <Router>
      <Switch>
        <Route path="/donate">
          {user === undefined || user.user === null ? (
            <FlexContainer>
              <Index />
            </FlexContainer>
          ) : (
            <FlexContainer>
              <Header headerOf="Donate" />
              <Donate user={user} />
              <Footer donate />
            </FlexContainer>
          )}
        </Route>

        <Route path="/transfer" component={Transfer} />

        <Route path="/setting">
          {user === undefined || user.user === null ? (
            <FlexContainer>
              <Index />
            </FlexContainer>
          ) : (
            <FlexContainer>
              <Header headerOf="Setting" />
              <Setting user={user} />
              <Footer setting />
            </FlexContainer>
          )}
        </Route>
        <Route path="/article">
          {user === undefined || user.user === null ? (
            <Index />
          ) : (
            <FlexContainer>
              <Header headerOf="Article" />
              <Article user={user} />
              <Footer article />
            </FlexContainer>
          )}
        </Route>

        <Route path="/splash">
          <Splash />
        </Route>

        <Route path="/login">
          {user === undefined || user.user === null ? (
            <FlexContainer>
              <Login />
            </FlexContainer>
          ) : (
            <FlexContainer>
              <Header headerOf="Article" />
              <Article user={user} />
              <Footer article />
            </FlexContainer>
          )}
        </Route>
        <Route path="/register">
          {user === undefined || user.user === null ? (
            <FlexContainer>
              <Register />
            </FlexContainer>
          ) : (
            <FlexContainer>
              <Header headerOf="Article" />
              <Article user={user} />
              <Footer article />
            </FlexContainer>
          )}
        </Route>

        <Route path="/">
          {user === undefined || user.user === null ? (
            <Index />
          ) : (
            <FlexContainer>
              <Header headerOf="Article" />
              <Article user={user} />
              <Footer article />
            </FlexContainer>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
