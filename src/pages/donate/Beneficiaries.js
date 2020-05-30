import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Avatar from "react-avatar";

import Radio from "./RadioButton";
import { MapBenefy } from "../utils/MapBenefy";
import Amount from "./Amount";

const style = {
  flexContainer: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "20px"
  },
  flexItem: {
    width: "100px",
    height: "150px",
    display: "flex",
    marginRight: "10px"
  },
  noBeneficiary: {
    height: "120px",
    color: "#8593A3",
    padding: "15px"
  },
  avatar: {
    textAlign: "center"
  },
  profileName: {
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#2C3A47"
  },
  profileCategory: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3"
  }
};

const Beneficiary = ({ name }) => {
  const [beneficiary, setBeneficiary] = useState("");
  const [category, setCategory] = useState("");
  const [nameBeneficiary, setNameBeneficiary] = useState("");

  useEffect(() => {
    setBeneficiary("");
  }, [name]);

  if (loading) return <h1>Loading</h1>;

  const benefy = MapBenefy(data);

  let benefyMap = (
    <div style={style.noBeneficiary}>
      Currently no beneficiary in this category
    </div>
  );

  if (benefy.length > 0) {
    benefyMap = benefy.map((item, index) => (
      <div style={style.flexItem} key={index}>
        <Radio
          name="category"
          value={item.id}
          checked={beneficiary === item.id}
          onChange={event => {
            setBeneficiary(event.target.value);
            setCategory(item.category);
            setNameBeneficiary(item.fullName);
          }}
        >
          <div style={style.avatar}>
            <Avatar name={item.fullName} size="50px" round="50%" />
          </div>
          <p style={style.profileName}>{item.fullName}</p>
          <p style={style.profileCategory}>{item.category}</p>
        </Radio>
      </div>
    ));
  }

  return (
    <>
      <div style={style.flexContainer}>{benefyMap}</div>
      <Amount
        category={category}
        beneficiary={beneficiary}
        name={nameBeneficiary}
      />
    </>
  );
};

export default Beneficiary;
