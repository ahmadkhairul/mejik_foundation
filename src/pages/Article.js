import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

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
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
    width: "100%"
  },
  article__title: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2C3A47"
  },
  article__description: {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8593A3"
  },
  article__readmore: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#CD4559"
  },
  article__detail: {
    margin: "10px"
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

  const AvaName = title => {
    const arr = title.split(" ");
    return `${arr[0].charAt(0)} ${arr[1].charAt(0)}`;
  };

  const { articles } = data;

  return (
    <>
      <Header headerOf="Article" />
      <div style={style.root__container}>
        <div style={style.container}>
          {articles.map(item => {
            return (
              <section key={item.id} style={style.article}>
                <Link to={`detail/${item.id}`}>
                  <div>
                    {item.imageUrl === null ? (
                      <Avatar size="70px" name={AvaName(item.title)} />
                    ) : (
                      <img width="70px" url={item.url} alt={`${item.title}`} />
                    )}
                  </div>
                </Link>
                <Link to={`detail/${item.id}`}>
                  <div style={style.article__detail}>
                    <div style={style.article__title}>{item.title}</div>
                    <div style={style.article__description}>
                      {item.description.substring(0, 40)}...
                    </div>
                    <div style={style.article__readmore}>Read More ...</div>
                  </div>
                </Link>
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
