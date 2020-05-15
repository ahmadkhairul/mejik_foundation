import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import MobileContainer from "../components/MobileContainer";
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
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  },
  H2: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#2C3A47",
    padding: "0px",
    margin: "0px",
    textAlign: "center"
  },
  H3: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8593A3",
    padding: "0px",
    margin: "10px 0px",
    textAlign: "center"
  },
  logo: {
    margin: "50px 0px 25px 0px"
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
  beneficiary: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  beneficiary__column__one: {
    display: "flex",
    width: "20%"
  },
  beneficiary__column__two: {
    display: "flex",
    flexDirection: "column",
    width: "50%"
  },
  beneficiary__column__three: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%"
  },
  beneficiary__avatar: {
    display: "block",
    margin: "0 auto",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid #cccccc",
    padding: "0px"
  },
  beneficiary__name: {
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#2C3A47",
    margin: "0px",
    padding: "0px"
  },
  beneficiary__category: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3",
    margin: "0px",
    padding: "0px"
  },
  beneficiary__amount: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3",
    margin: "0px",
    padding: "0px"
  },
  beneficiary__timeline: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3",
    margin: "0px",
    padding: "0px"
  },
  beneficiary__total: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3",
    margin: "0px",
    padding: "0px"
  }
};

const CREATE_TRANSACTION = gql`
  mutation($bId: String!, $amount: Float!, $timeline: Int!, $total: Float!) {
    createTransaction(
      input: {
        beneficiaryId: $bId
        amount: $amount
        timeline: $timeline
        total: $total
      }
    ) {
      createdBy {
        firstName
        lastName
      }
      beneficiary {
        firstName
        lastName
      }
      amount
      timeline
      total
    }
  }
`;

const Transfer = ({ location }) => {
  const { data } = location.state;
  const { name, category, amount, beneficiary, timeline } = data;

  const [result, setResult] = useState("");
  const [transaction] = useMutation(CREATE_TRANSACTION);

  useEffect(() => {
    setResult("");
  }, [data]);

  const payment = async () => {
    try {
      const data = await transaction({
        variables: {
          bId: beneficiary,
          amount: parseInt(amount),
          timeline: parseInt(timeline),
          total: parseInt(amount * timeline)
        }
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  return (
    <MobileContainer>
      <Header headerOf="Proof Of Transfer" />
      <div style={style.rootContainer}>
        <div style={style.Container}>
          <img
            style={style.logo}
            src="../assets/LogoBCA.svg"
            alt="BCA logo in mejik"
          />
          <h3 style={style.H3}>Virtual Account</h3>
          <h2 style={style.H2}>0001-2846-1819-2910</h2>
          <h3 style={style.H3}>Name Holder</h3>
          <h2 style={style.H2}>Diaspora Peduli</h2>
          <p></p>
        </div>
      </div>
      <img src="/assets/Line.svg" alt="break line" />
      <div style={style.rootContainer}>
        <div style={style.Container}>
          <h1 style={style.H1}>Bill Summary</h1>
          <section style={style.beneficiary}>
            <div style={style.beneficiary__column__one}>
              <img
                src="/assets/profile.png"
                style={style.beneficiary__avatar}
                alt="avatar profile mejik foundation"
              />
            </div>
            <div style={style.beneficiary__column__two}>
              <p style={style.beneficiary__name}>{name}</p>
              <p style={style.beneficiary__category}>{category}</p>
            </div>
            <div style={style.beneficiary__column__three}>
              <p style={style.beneficiary__timeline}>{timeline}x</p>
              <p style={style.beneficiary__amount}>{amount}</p>
            </div>
          </section>
          <section style={style.beneficiary}>
            <p style={style.beneficiary__amount}>Total</p>
            <p style={style.beneficiary__amount}>{timeline * amount}</p>
          </section>
          <form
            onSubmit={async event => {
              event.preventDefault();
              let data = await payment();
              if (data.data) {
                setResult("Thank you for your donation");
              } else {
                setResult("Something wrong is happen");
              }
            }}
          >
            <input type="file" />
            <p>{result}</p>
            <button style={style.formSubmit} type="submit">
              Confirmation
            </button>
          </form>
        </div>
      </div>
      <Footer donate />
    </MobileContainer>
  );
};

export default Transfer;
