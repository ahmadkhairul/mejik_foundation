import React from "react";
import { Link } from "react-router-dom";

import Header from "../templates/Header";
import Footer from "../templates/Footer";

const Setting = ({ user }) => {
  console.log(user);
  return (
    <>
      <Header headerOf="Setting" />
      <div>Ini Setting</div>
      <Link to="/logout">
        <button>Sign out</button>
      </Link>
      <Footer setting />
    </>
  );
};

export default Setting;
