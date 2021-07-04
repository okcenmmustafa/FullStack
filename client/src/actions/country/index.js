export const initialState = {
  loading: false,
  arrayResult: [],
  searchSpecificNameResult: [],
  filterResult: [],
  error: "",
  id: 0,
};

export const fethCountryRequest = (id) => {
  return {
    type: "FETCH_COUNTRY_REQUEST",
    payload: id,
  };
};
export const searchArrayResult = (country) => {
  return {
    type: "SEARCH_ARRAY_RESULT",
    payload: country,
  };
};
export const searchSpecificNameResult = (country) => {
  return {
    type: "SEARCH_SPECIFIC_NAME_RESULT",
    payload: country,
  };
};
export const filterCountryResult = (country) => {
  return {
    type: "FILTER_COUNTRY_RESULT",
    payload: country,
  };
};
export const fethCountryFailure = (error) => {
  return {
    type: "FETCH_COUNTRY_FAILURE",
    payload: error,
  };
};
