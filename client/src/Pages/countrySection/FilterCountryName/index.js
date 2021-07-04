import AutoComplete from "../../../Components/AutoComplete";
import React, { useEffect } from "react";
import { Image, Row, Col } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";
import getValues from "../../../api";
const FindCountryByFilter = (props) => {
  useEffect(() => {
    props.fethCountryRequest(3);
    (async () => {
      const allCountries = await getValues("get", "/allCountry");
      props.filterCountryResult(allCountries.data);
    })();
  }, []);
  function CountryInfoFunc() {
    let countryInfo = props.filterResult;
    console.log(countryInfo);
    if (!countryInfo.lengh) dataSource.length = 0;
    countryInfo.map((country, i) => {
      let population = currency(country.population, {
        precision: 0,
        symbol: "",
      }).format();
      let flag = <Image width={100} src={country.flag} />;
      dataSource.push({
        key: `${i}`,
        flag: flag,
        name: country.name,
        capital: country.capital,
        region: country.region,
        population: population, // => "12,34,567.89"
      });
    });
    return (
      <>
        <Table
          title={"Find by Filter Name"}
          id="3"
          getColumnSearchProps={"name"}
          dataSource={dataSource}
        />
      </>
    );
  }
  return (
    <> {props.loading && props.id == "3" ? "Loading" : CountryInfoFunc()}</>
  );
};
export default FindCountryByFilter;
