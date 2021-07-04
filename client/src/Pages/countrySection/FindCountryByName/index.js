import AutoComplete from "../../../Components/AutoComplete";
import React, { useEffect } from "react";
import { Image, Row, Col } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";
import getValues from "../../../api";
import CountryInfoFunc from "../../../helper";
const FindCountryByName = (props) => {
  var list = [];
  useEffect(() => {

    //  the function for the reload page
    props.fethCountryRequest(1);

    //  the Strings defined in an Array in App.js
    props.countryArray.map(async (country, i) => {

      // fetch countries
      const getCountry = await getValues("post", "/country", {
        name: country,
        id: 1,
      });
      list.push(getCountry.data);
      if (list.length == props.countryArray.length)
        props.searchArrayResult(list);
    });
  }, []);

  // putting the fethed data in the table 
  
  return (
    <>{props.loading && props.id == "1" ? "Loading" : CountryInfoFunc(props.arrayResult, 'Find Country in Array -- "Malta", "France", "Tur", "Norway", "Argentina" (You can change array in App.js)',1)}</>
  );
};

export default FindCountryByName;
