import React from "react";
import { useParams } from "react-router-dom";
import { FormattedDate } from "../../components/Date";
import Splash from "../Splash";
import Footer from "../../templates/Footer";

const style = {
  cover: {
    width: "100%",
    height: "170px",

    backgroundColor: "#CD4559",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "80px",
    color: "white"
  },
  article: {
    padding: "10px",
    display: "flex",

    flexDirection: "column"
  },
  article_author: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#CD4559",
    margin: "5px 0px 0px 0px"
  },
  article_date: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#8593A3",
    margin: "0px 0px 10px 0px"
  },
  article_title: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#2C3A47",
    margin: "10px 0px 10px 0px"
  },
  article_description: {
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E272E",
    margin: "0px 0px 100px 0px"
  }
};

const DetailArticle = () => {
  const { id } = useParams();

  if (loading) return <Splash />;

  const { article } = data;

  const CoverName = title => {
    const arr = title.split(" ");
    return `${arr[0].charAt(0)} ${arr[1].charAt(0)}`;
  };

  return (
    <>
      {article.imageUrl === null ? (
        <div style={style.cover}>{CoverName(article.title)}</div>
      ) : (
        <img
          width="100%"
          height="170px"
          src={article.imageUrl}
          // src={"../assets/corona.jpg"}
          alt={`mejik foundation ${article.title}`}
        />
      )}
      <section style={style.article}>
        <div style={style.article_title}>{article.title}</div>
        <div style={style.article_author}>
          {article.createdBy.firstName} {article.createdBy.lastName}
        </div>
        <div style={style.article_date}>
          <FormattedDate date={article.createdAt} />
        </div>
        <article style={style.article_description}>
          {article.description}
        </article>
      </section>
      <Footer article />
    </>
  );
};

export default DetailArticle;
