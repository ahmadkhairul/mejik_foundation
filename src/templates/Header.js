import React from "react";

const styles = {
  H1: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    textAlign: "center"
  }
};

const Header = ({ headerOf }) => {
  return (
    <div>
      <h1 style={styles.H1}>{headerOf}</h1>
      <hr />
    </div>
  );
};

export default Header;
