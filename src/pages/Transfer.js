import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Avatar from "react-avatar";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
import InputFile from "../components/InputFile";

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
    marginBottom: "20px",
    width: "100%"
  },
  beneficiary__avatar: {
    width: "70px"
  },
  beneficiary__name: {
    width: "30%",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2C3A47"
  },
  beneficiary__timeline: {
    width: "30%",
    textAlign: "right",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  },
  beneficiary__amount: {
    width: "30%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  beneficiary__category: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  },
  total: {
    marginBottom: "20px",
    width: "100%"
  },
  total__name: {
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#2C3A47"
  },
  total__amount: {
    width: "50%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  proof: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  proof__icon: {
    padding: "20px 0px"
  },
  proof__button: {
    padding: "8px",
    background: "#CD4559",
    borderRadius: "4px",
    color: "#ffffff"
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
    <>
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
      <hr />
      <div style={style.rootContainer}>
        <div style={style.Container}>
          <h1 style={style.H1}>Bill Summary</h1>
          <table style={style.beneficiary}>
            <tbody>
              <tr>
                <td rowSpan="2" style={style.beneficiary__avatar}>
                  <Avatar name={name} size="50px" round="50%" />
                </td>
                <td style={style.beneficiary__name}>{name}</td>
                <td style={style.beneficiary__timeline}>{timeline}x</td>
                <td style={style.beneficiary__amount}>Rp. {amount}</td>
              </tr>
              <tr>
                <td style={style.beneficiary__category}>{category}</td>
              </tr>
            </tbody>
          </table>
          <table style={style.total}>
            <tbody>
              <tr>
                <td style={style.total__name}>Total</td>
                <td style={style.total__amount}>Rp. {timeline * amount}</td>
              </tr>
            </tbody>
          </table>
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
            <InputFile name="proof">
              <div style={style.proof}>
                <img
                  style={style.proof__icon}
                  src="../assets/Upload.svg"
                  alt="upload transfer icon mejik academy"
                />
                <div style={style.proof__button}>Upload Photo</div>
                <p style={style.proof__text}>or a drop file here</p>
              </div>
            </InputFile>
            <p>{result}</p>
            <button style={style.formSubmit} type="submit">
              CONFIRMATION
            </button>
          </form>
        </div>
      </div>
      <Footer donate />
    </>
  );
};

export default Transfer;
