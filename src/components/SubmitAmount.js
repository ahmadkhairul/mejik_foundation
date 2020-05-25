import React from "react";
import { Link } from "react-router-dom";

const style = {
  donateAmount: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "5px"
  },
  formSubmit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginBottom: "100px"
  },
  disabledSubmit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    background: "#cccccc",
    borderRadius: "4px",
    textAlign: "center",
    marginBottom: "100px"
  }
};

const Amount = ({ name, beneficiary, amount, timeline, category }) => {
  const value = { name, beneficiary, amount, timeline, category };

  return (
    <>
      <div style={style.donateAmount}>
        <span>Donation Amount</span>
        <span style={{ color: "#CD4559" }}>Rp. {amount * timeline}</span>
      </div>
      <Link
        to={{
          pathname: "/transfer",
          state: {
            data: value
          }
        }}
      >
        <button
          style={timeline ? style.formSubmit : style.disabledSubmit}
          type="submit"
          disabled={timeline ? null : "disabled"}
        >
          Donate Now
        </button>
      </Link>
    </>
  );
};

export default Amount;
