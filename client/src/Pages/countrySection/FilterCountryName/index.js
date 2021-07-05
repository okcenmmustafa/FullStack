import React, { useEffect } from "react";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // putting the fethed data in the table 
  
  return (
    <> {props.loading && props.id ===3 ? "Loading" : CountryInfoFunc(props.filterResult,"Find by Filter Name",3)}</>
  );
};
export default FindCountryByFilter;
