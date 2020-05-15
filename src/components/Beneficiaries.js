import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
  profileAvatar: {
    display: "block",
    margin: "0 auto",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid #cccccc"
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

const GET_BENEFICIARY = gql`
  query categories($name: String!) {
    categories(where: { name_contains: $name }) {
      name
      beneficiaries {
        id
        firstName
        lastName
      }
    }
  }
`;

const Beneficiary = ({ user, name }) => {
  const [beneficiary, setBeneficiary] = useState("");
  const [category, setCategory] = useState("");
  const [nameBeneficiary, setNameBeneficiary] = useState("");

  useEffect(() => {
    setBeneficiary("");
  }, [name]);

  const { data, loading } = useQuery(GET_BENEFICIARY, {
    variables: {
      name: name
    }
  });

  if (loading) return <h1>Loading</h1>;

  const benefy = MapBenefy(data);

  return (
    <>
      <div style={style.flexContainer}>
        {benefy.map((item, index) => (
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
              <img
                src="/assets/profile.png"
                style={style.profileAvatar}
                alt="avatar profile mejik foundation"
              />
              <p style={style.profileName}>{item.fullName}</p>
              <p style={style.profileCategory}>{item.category}</p>
            </Radio>
          </div>
        ))}
      </div>
      <Amount
        user={user}
        category={category}
        beneficiary={beneficiary}
        name={nameBeneficiary}
      />
    </>
  );
};

export default Beneficiary;
