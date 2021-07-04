import AutoComplete from "../../../Components/AutoComplete";
import React from "react";
import { Image } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";
import CountryInfoFunc from "../../../helper";
const FindCountryBySpecificName = (props) => {
  const searchBar = <AutoComplete id="2"></AutoComplete>;

  // putting the fethed data in the table 
  
  return (
    <>
      {" "}
      {searchBar}{" "}
      {props.loading && props.id == "2" ? "Loading" : CountryInfoFunc(props.searchSpecificNameResult,'Find by Specific Name',0)}
    </>
  );
};

export default FindCountryBySpecificName;
