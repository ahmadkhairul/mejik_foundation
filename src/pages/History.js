import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Avatar from "react-avatar";

import Splash from "../pages/Splash";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

const style = {
  root__container: {
    padding: "0 5%"
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  beneficiary: {
    marginBottom: "100px",
    width: "100%"
  },
  beneficiary__avatar: {
    width: "70px"
  },
  beneficiary__name: {
    width: "70%",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2C3A47"
  },
  beneficiary__amount: {
    width: "20%",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  beneficiary__category: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  }
};

const BENEFICIARY_HISTORY = gql`
  query {
    transactions(orderBy: createdAt_DESC) {
      id
      amount
      beneficiary {
        firstName
        lastName
        categories {
          name
        }
      }
    }
  }
`;

const History = () => {
  const { data, loading } = useQuery(BENEFICIARY_HISTORY);

  if (loading) return <Splash />;

  const { transactions } = data;
  console.log(transactions);
  return (
    <>
      <Header headerOf="History" />
      <div style={style.root__container}>
        <div style={style.container}>
          <table style={style.beneficiary}>
            {transactions.map(item => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td rowSpan="2" style={style.beneficiary__avatar}>
                      <Avatar
                        name={`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
                        size="50px"
                        round="50%"
                      />
                    </td>
                    <td
                      style={style.beneficiary__name}
                    >{`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}</td>
                    <td style={style.beneficiary__amount}>Rp. {item.amount}</td>
                  </tr>
                  <tr>
                    <td style={style.beneficiary__category}>
                      {item.beneficiary.categories[0].name}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <hr />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <Footer setting />
    </>
  );
};

export default History;
