import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import NoAuth from "../components/NoAuth";
import InputFile from "../components/InputFile";
import Splash from "../pages/Splash";
import Footer from "../templates/Footer";

const style = {
  cover: {
    width: "100%",
    height: "170px",
    backgroundColor: "#CD4559"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  detail__avatar: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "90px",
    width: "110px",
    height: "110px",
    border: "1px solid white",
    backgroundColor: "white",
    borderRadius: "50%"
  },
  detail__upload: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "120px",
    width: "40px",
    height: "40x",
    border: "1px solid white",
    backgroundColor: "white",
    borderRadius: "50%",
    cursor: "pointer"
  },
  detail__name: {
    position: "relative",
    bottom: "100px",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#2C3A47"
  },
  detail__email: {
    position: "relative",
    bottom: "90px",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#747D8C"
  },
  detail__phone: {
    position: "relative",
    bottom: "85px",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#747D8C"
  },
  action: {
    position: "relative",
    bottom: "50px",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "20px"
  },
  action__items: {
    display: "flex",
    width: "400px",
    alignItems: "center",
    margin: "20px"
  },
  action__items__image: {
    margin: "0px 10px"
  }
};

const AUTH_USER = gql`
  query {
    user {
      id
      email
      firstName
      lastName
      phoneNumber
      role
    }
  }
`;

const Setting = () => {
  const { data, loading } = useQuery(AUTH_USER); // User Authentication

  if (loading) return <Splash />;

  const { user } = data;

  return (
    <>
      <NoAuth open={user !== null ? false : true}>
        Login or Register to see history, <br />
        setting your account and many more
      </NoAuth>
      <div style={style.cover} height="100px" />

      <section style={style.container}>
        <div style={style.detail__avatar}>
          <Avatar
            name={user ? `${user.firstName} ${user.lastName}` : "Guest"}
            color="#CD4559"
            size="100px"
            round="50%"
          />
        </div>
        <InputFile noStyle>
          <div style={style.detail__upload}>
            <img src="../assets/Camera.svg" alt="upload icons mejik academy" />
          </div>
        </InputFile>
        <div style={style.detail__name}>
          {user ? `${user.firstName} ${user.lastName}` : "Guest"}
        </div>
        <div style={style.detail__email}>{user ? user.email : "-"}</div>
        <div style={style.detail__phone}>{user ? user.phoneNumber : "-"}</div>
      </section>

      <section style={style.action}>
        <Link to="/history">
          <div style={style.action__items}>
            <span>
              <img
                style={style.action__items__image}
                src="../assets/History.svg"
                alt="history icons mejik academy"
              />
            </span>
            <span style={{ color: "#2C3A47" }}>Donation History</span>
          </div>
        </Link>
        <Link to="/change-pwd">
          <div style={style.action__items}>
            <span>
              <img
                style={style.action__items__image}
                src="../assets/Lock.svg"
                alt="change password icons mejik academy"
              />
            </span>
            <span style={{ color: "#2C3A47" }}>Change Password</span>
          </div>
        </Link>
        <Link to="/logout">
          <div style={style.action__items}>
            <span>
              <img
                style={style.action__items__image}
                src="../assets/Logout.svg"
                alt="logout icons mejik academy"
              />
            </span>
            <span style={{ color: "#CD4559" }}>Logout</span>
          </div>
        </Link>
      </section>

      <Footer setting />
    </>
  );
};

export default Setting;
