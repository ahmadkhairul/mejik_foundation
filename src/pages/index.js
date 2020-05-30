import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 10%"
  },
  container_h1: {
    width: "335px",
    height: "60px",

    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px"
  },
  container_h2: {
    width: "335px",
    height: "35px",

    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px"
  },
  container_login: {
    width: "335px",
    height: "45px",
    color: "#ffffff",
    border: "1px solid #A4B0BE",

    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  },
  container_register: {
    width: "335px",
    height: "45px",
    color: "#CD4559",
    border: "1px solid #A4B0BE",

    background: "#ffffff",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  }
};

const Index = () => {
  return (
    <div style={style.container}>
      <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
      <h1 style={style.container_h1}>Welcome to Mejik Foundation!</h1>
      <h2 style={style.container_h2}>
        Mejik Foundation is a network that facilitates and empowers the voice of
        mejik communities
      </h2>
      <Link to="/login">
        <button style={style.container_login}>Login</button>
      </Link>
      <Link to="/register">
        <button style={style.container_register}>Register</button>
      </Link>
    </div>
  );
};

export default Index;
