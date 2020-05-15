import React from "react";
import ArticleIcons from "../assets/Article";
import DonateIcons from "../assets/Donate";
import SettingIcon from "../assets/Setting";
import { Link } from "react-router-dom";

const style = {
  container: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: "0",
    width: "576px",
    height: "100px",

    backgroundColor: "white",
    boxShadow: "0px 0px 4px rgba(5, 5, 5, 0.08)"
  },
  flexItem: {
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    fontWeight: "500",
    fontSize: "10px",
    color: "#8593A3",
    textAlign: "center"
  }
};

const Footer = ({ donate, setting, article }) => {
  return (
    <div style={style.container}>
      <div style={style.flexItem}>
        <Link to="/article">
          <ArticleIcons color={article ? "#CD4559" : "#8593A3"} />
        </Link>
        article
      </div>
      <div style={style.flexItem}>
        <Link to="/donate">
          <DonateIcons color={donate ? "#CD4559" : "#8593A3"} />
        </Link>
        donate
      </div>
      <div style={style.flexItem}>
        <Link to="/setting">
          <SettingIcon color={setting ? "#CD4559" : "#8593A3"} />
        </Link>
        setting
      </div>
    </div>
  );
};

export default Footer;
