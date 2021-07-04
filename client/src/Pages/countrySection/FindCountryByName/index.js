import AutoComplete from "../../../Components/AutoComplete";
import React, { useEffect } from "react";
import { Image, Row, Col } from "antd";
import { connect } from "react-redux";
import currency from "currency.js";
import Table from "../../../Components/Table";
import { dataSource } from "../../../Components/Table";
import getValues from "../../../api";
const FindCountryByName = (props) => {
  var list = [];
  useEffect(() => {
    props.fethCountryRequest(1);
    props.countryArray.map(async (country, i) => {
      const getCountry = await getValues("post", "/country", {
        name: country,
        id: 1,
      });
      list.push(getCountry.data);
      if (list.length == props.countryArray.length)
        props.searchArrayResult(list);
    });
  }, []);

  function CountryInfoFunc() {
    let countryInfo = props.arrayResult;
    if (!countryInfo.lengh) dataSource.length = 0;
    countryInfo.map((insideArray, i) => {
      insideArray.map((country, j) => {
        let population = currency(country.population, {
          precision: 0,
          symbol: "",
        }).format();
        let flag = <Image width={100} src={country.flag} />;
        dataSource.push({
          key: `${i}${j}`,
          flag: flag,
          name: country.name,
          capital: country.capital,
          region: country.region,
          population: population, // => "12,34,567.89"
        });
      });
    });
    return (
      <Table
        title={
          'Find Country in Array -- "Malta", "France", "Tur", "Norway", "Argentina" (You can change array in App.js)'
        }
        sizee="small"
        dataSource={dataSource}
      />
    );
  }
  return (
    <>{props.loading && props.id == "1" ? "Loading" : CountryInfoFunc()}</>
  );
};

export default FindCountryByName;
