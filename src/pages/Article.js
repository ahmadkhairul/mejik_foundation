import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const LOGIN = gql`
  query {
    articles {
      title
      description
    }
  }
`;

const Article = ({ user }) => {
  return <div>ini Article</div>;
};

export default Article;
