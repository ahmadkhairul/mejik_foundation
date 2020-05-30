import React, { useState } from "react";
import Radio from "./RadioButton";
import SubmitAmount from "./SubmitAmount";

const style = {
  Container: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "20px"
  },
  items: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2C3A47",
    marginRight: "10px"
  },
  disabledItems: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#cccccc",
    marginRight: "10px"
  },
  H1: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  },
  formInput: {
    width: "98.5%",
    height: "35px",
    paddingLeft: "1%",
    fontSize: "14px",
    color: "#A4B0BE",
    border: "1px solid #CED6E0",
    borderRadius: "4px",
    marginBottom: "20px"
  }
};

const amountList = [100000, 300000, 500000, 700000];
const timelineList = [1, 2, 3, 4, 5];

const Amount = ({ beneficiary, category, name }) => {
  const [amount, setAmount] = useState("");
  const [timeline, setTimeline] = useState("");

  // console.log(amount);
  return (
    <>
      <h1 style={style.H1}>Donation Amount</h1>
      <input
        style={style.formInput}
        type="number"
        value={amount}
        placeholder="e.g. Rp 10.000"
        onChange={event => {
          setAmount(event.target.value);
        }}
        disabled={beneficiary ? null : "disabled"}
      />
      <div style={style.Container}>
        <div style={beneficiary ? style.items : style.disabledItems}>
          {amountList.map((item, index) => (
            <Radio
              key={index}
              value={item}
              checked={amount == item}
              onChange={event => {
                setAmount(event.target.value);
              }}
              disabled={beneficiary ? null : "disabled"}
            >
              Rp. {item}
            </Radio>
          ))}
        </div>
      </div>
      <h1 style={style.H1}>Timeline</h1>
      <div style={style.Container}>
        <div style={amount ? style.items : style.disabledItems}>
          {timelineList.map((item, index) => (
            <Radio
              key={index}
              value={item}
              checked={timeline == item}
              onChange={event => {
                setTimeline(event.target.value);
              }}
              disabled={amount ? null : "disabled"}
            >
              {item}x
            </Radio>
          ))}
        </div>
      </div>
      <SubmitAmount
        name={name}
        beneficiary={beneficiary}
        amount={amount}
        timeline={timeline}
        category={category}
      />
    </>
  );
};

export default Amount;
