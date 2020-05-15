import React from "react";
import Category from "../components/Category";

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

const Donate = ({ user }) => {
  // console.log(user);

  return (
    <div style={style.rootContainer}>
      <div style={style.Container}>
        <h1 style={style.H1}>Donation Target</h1>
        <Category user={user} />
      </div>
    </div>
  );
};

export default Donate;
