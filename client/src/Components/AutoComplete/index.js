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

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = async (value, props) => {
  props.fethCountryRequest(props.id);
  const countryInfo = await getCountry("post", "/country", {
    name: value,
    id: props.id,
  });
  props.searchSpecificNameResult(countryInfo.data);
};
const SearchComp = (props) => {
  console.log(props);
  return (
    <>
      <Search
        placeholder="Text a country name and presss enter"
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
