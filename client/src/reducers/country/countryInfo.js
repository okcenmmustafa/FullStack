import { initialState } from "../../actions/country";

const FETCH_COUNTRY_REQUEST = "FETCH_COUNTRY_REQUEST";
const SEARCH_ARRAY_RESULT = "SEARCH_ARRAY_RESULT";
const SEARCH_SPECIFIC_NAME_RESULT = "SEARCH_SPECIFIC_NAME_RESULT";
const FILTER_COUNTRY_RESULT = "FILTER_COUNTRY_RESULT";

const FETCH_COUNTRY_FAILURE = "FETCH_COUNTRY_FAILURE";
const countryInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        id: action.payload,
        loading: true,
      };
    case SEARCH_ARRAY_RESULT:
      return {
        ...state,
        loading: false,
        arrayResult: action.payload,
        error: "",
      };
    case SEARCH_SPECIFIC_NAME_RESULT:
      return {
        ...state,
        loading: false,
        searchSpecificNameResult: action.payload,
        error: "",
      };
    case FILTER_COUNTRY_RESULT:
      return {
        ...state,
        loading: false,
        filterResult: action.payload,
        error: "",
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        payload: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default countryInfo;
