import React from "react";
import Category from "../components/Category";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

const style = {
  rootContainer: {
    padding: "0 5%"
  },
  Container: {
    display: "flex",
    flexDirection: "column"
  },
  H1: {
    width: "335px",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  }
};

const Donate = () => {
  // console.log(user);

  return (
    <>
      <Header headerOf="Donate" />
      <div style={style.rootContainer}>
        <div style={style.Container}>
          <h1 style={style.H1}>Donation Target</h1>
          <Category />
        </div>
      </div>
      <Footer donate />
    </>
  );
};

export default Donate;
