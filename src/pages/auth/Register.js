import React, { useState } from "react";

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
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px",
    padding: "0px"
  },
  formInput: {
    width: "98.5%",
    height: "30px",
    paddingLeft: "1%",
    fontSize: "14px",
    color: "#A4B0BE",
    border: "1px solid #CED6E0",
    borderRadius: "4px"
  },
  formLabel: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E272E",
    float: "left",
    margin: "15px 0 5px"
  },
  formSubmit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  }
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div style={style.Container}>
      <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
      <h1 style={style.H1}>REGISTER</h1>
      <span style={{ color: "red" }}>{result}</span>
      <form
        onSubmit={async event => {
          event.preventDefault();
        }}
      >
        <label style={style.formLabel}>Full Name</label>
        <input
          style={style.formInput}
          type="text"
          placeholder="najib"
          onChange={event => {
            setFirstName(event.target.value);
          }}
        />
        <label style={style.formLabel}>Email</label>
        <input
          style={style.formInput}
          type="email"
          placeholder="e.g. najib@mail.com"
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <label style={style.formLabel}>Phone Number</label>
        <input
          style={style.formInput}
          type="text"
          placeholder="083434234321"
          onChange={event => {
            setPhoneNumber(event.target.value);
          }}
        />
        <label style={style.formLabel}>Password</label>
        <input
          style={style.formInput}
          type="password"
          placeholder="input yout password"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <button style={style.formSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
