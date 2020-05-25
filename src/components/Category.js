import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Radio from "./RadioButton";

import Beneficiary from "./Beneficiaries";

const style = {
  tab: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "20px",
    paddingTop: "20px"
  },
  tabItem: {
    flexWrap: "nowrap",
    marginRight: "10px"
  }
};

const GET_CATEGORY = gql`
  query {
    categories {
      id
      name
    }
  }
`;

const Category = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useQuery(GET_CATEGORY);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div style={style.tab}>
        <div style={style.tabItem}>
          <Radio
            name="category"
            value=""
            checked={category === ""}
            onChange={event => {
              setCategory(event.target.value);
            }}
          >
            All
          </Radio>
        </div>

        {data.categories.map((item, index) => {
          return (
            <div key={index} style={style.tabItem}>
              <Radio
                name="category"
                value={item.name}
                checked={category === item.name}
                onChange={event => {
                  setCategory(event.target.value);
                }}
              >
                {item.name}
              </Radio>
            </div>
          );
        })}
      </div>
      <Beneficiary name={category} />
    </>
  );
};

export default Category;
