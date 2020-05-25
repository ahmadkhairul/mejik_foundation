import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Header from "../templates/Header";
import Footer from "../templates/Footer";

const LOGIN = gql`
  query {
    articles {
      title
      description
    }
  }
`;

const Article = ({ user }) => {
  return (
    <>
      <Header headerOf="Article" />
      <h1>Article</h1>
      <Footer article />
    </>
  );
};

export default Article;
