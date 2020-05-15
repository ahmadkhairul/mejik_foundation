import React from "react";
import { Link } from "react-router-dom";

const style = {
  Container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 10%"
  },
  H1: {
    width: "335px",
    height: "60px",

    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px"
  },
  H2: {
    width: "335px",
    height: "35px",

    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px"
  },
  btnLogin: {
    width: "335px",
    height: "45px",
    color: "#ffffff",

    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  },
  btnRegister: {
    width: "335px",
    height: "45px",
    color: "#CD4559",

    background: "#ffffff",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  }
};

const INDEX = () => {
  return (
    <div style={style.Container}>
      <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
      <h1 style={style.H1}>Welcome to Mejik Foundation!</h1>
      <h2 style={style.H2}>
        Mejik Foundation is a network that facilitates and empowers the voice of
        mejik communities
      </h2>
      <Link to="/login">
        <button style={style.btnLogin}>Login</button>
      </Link>
      <Link to="/register">
        <button style={style.btnRegister}>Register</button>
      </Link>
    </div>
  );
};

export default INDEX;
