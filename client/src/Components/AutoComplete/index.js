import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import getCountry from "../../api";
import {
  fethCountryRequest,
  searchSpecificNameResult,
} from "../../actions/country";
const { Search } = Input;


//sending a request after click enter or search button

const onSearch = async (value, props) => {
  props.fethCountryRequest(props.id);
  const countryInfo = await getCountry("post", "/country", {
    name: value,
    id: props.id,
  });
  props.searchSpecificNameResult(countryInfo.data);
};

//Search component in Question 1 

const SearchComp = (props) => {
  return (
    <>
      <Search
        placeholder="Enter a country name and press enter or click search "
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(value) => onSearch(value, props)}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  fethCountryRequest,
  searchSpecificNameResult,
})(SearchComp);
