import AutoComplete from "../../../Components/AutoComplete";
import React, { useEffect } from "react";
import { Image, Row, Col } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";
import getValues from "../../../api";
import CountryInfoFunc from '../../../helper'
const FindCountryByFilter = (props) => {
  useEffect(() => {

   //  the function for the reload page
    props.fethCountryRequest(3);
    (async () => {
          //  the request for the fetch of all countries 
      const allCountries = await getValues("get", "/allCountry");
      props.filterCountryResult(allCountries.data);
    })();
  }, []);

  // putting the fethed data in the table 
  
  return (
    <> {props.loading && props.id == "3" ? "Loading" : CountryInfoFunc(props.filterResult,"Find by Filter Name",3)}</>
  );
};
export default FindCountryByFilter;
