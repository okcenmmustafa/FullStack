import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import FindCountryBySpecificName from "./Pages/countrySection/FindCountryBySpecificName";
import FindCountryByName from "./Pages/countrySection/FindCountryByName";
import FilterCountryName from "./Pages/countrySection/FilterCountryName";
import DataShema from "./Pages/DataSchema";
import SlotMachine from "./Pages/SlotMachine";
import {
  fethCountryRequest,
  searchArrayResult,
  filterCountryResult,
} from "./actions/country";
const { TabPane } = Tabs;
const App = (props) => {
  const countryArray = ["Malta", "France", "Tur", "Norway", "Argentina"];

  return (
    <div className="App">
      <header className="App-header">Full Stack Dev Task</header>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Question 1" key="1">
          <FindCountryBySpecificName
            id="1"
            {...props}
          ></FindCountryBySpecificName>
        </TabPane>
        <TabPane tab="Question 2" key="2">
          <FindCountryByName
            id="2"
            countryArray={countryArray}
            {...props}
          ></FindCountryByName>
        </TabPane>
        <TabPane tab="Question 3" key="3">
          <FilterCountryName id="3" {...props}></FilterCountryName>
        </TabPane>
        <TabPane tab="Question 4" key="4">
          <SlotMachine {...props}></SlotMachine>
        </TabPane>
        <TabPane tab="Question 5" key="5">
          <DataShema></DataShema>
        </TabPane>
      </Tabs>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.countryInfo;
};

export default connect(mapStateToProps, {
  fethCountryRequest,
  searchArrayResult,
  filterCountryResult,
})(App);
