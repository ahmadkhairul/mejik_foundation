import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Avatar from "react-avatar";

import Splash from "../pages/Splash";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

const style = {
  root__container: {
    padding: "0 5%"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "100px"
  },
  article: {
    margin: "20px 0px",
    width: "100%"
  },
  article__image: {
    width: "70px"
  },
  article__title: {
    width: "70%",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2C3A47"
  },
  article__description: {
    width: "20%",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  article__readmore: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  }
};

const GET_ARTICLE = gql`
  query {
    articles(orderBy: createdAt_DESC) {
      id
      title
      imageUrl
      description
    }
  }
`;

const Article = () => {
  const { data, loading } = useQuery(GET_ARTICLE);

  if (loading) return <Splash />;
  const { articles } = data;

  const AvaName = title => {
    const arr = title.split(" ");
    return `${arr[0].charAt(0)} ${arr[1].charAt(0)}`;
  };

  return (
    <>
      <Header headerOf="Article" />
      <div style={style.root__container}>
        <div style={style.container}>
          {articles.map(item => {
            return (
              <section key={item.id} style={style.article}>
                <div>
                  {item.imageUrl === null ? (
                    <Avatar name={AvaName(item.title)} />
                  ) : (
                    <img url={item.url} alt={`${item.title}`} />
                  )}
                </div>
                <div>{item.title}</div>
                <div>{item.description.substring(0, 40)}...</div>
                <div>Read More ...</div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer article />
    </>
  );
};

export default Article;
