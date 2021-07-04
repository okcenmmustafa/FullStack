import AutoComplete from "../../../Components/AutoComplete";
import React from "react";
import { Image } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";

const FindCountryBySpecificName = (props) => {
  const searchBar = <AutoComplete id="2"></AutoComplete>;
  console.log(props.searchSpecificNameResult);

  function CountryInfoFunc() {
    let countryInfo = props.searchSpecificNameResult;
    if (!countryInfo.lengh) dataSource.length = 0;
    countryInfo.map((v, i) => {
      let population = currency(v.population, {
        precision: 0,
        symbol: "",
      }).format();
      let flag = <Image width={100} src={v.flag} />;
      dataSource.push({
        key: `${i}`,
        flag: flag,
        name: v.name,
        capital: v.capital,
        region: v.region,
        population: population, // => "12,34,567.89"
      });
    });
    return <Table title={"Find by Specific Name"} dataSource={dataSource} />;
  }
  return (
    <>
      {" "}
      {searchBar}{" "}
      {props.loading && props.id == "2" ? "Loading" : CountryInfoFunc()}
    </>
  );
};

export default FindCountryBySpecificName;
