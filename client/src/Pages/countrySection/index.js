import FindCountryByName from "./FindCountryByName";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import FindCountryBySpecificName from "./FindCountryBySpecificName";
import FilterCountryName from "./FilterCountryName";
const Main = (props) => {
  return (
    <Row>
      <Col span={8}>
        <FindCountryByName {...props}></FindCountryByName>{" "}
      </Col>
      <Col span={8}>
        {" "}
        <FindCountryBySpecificName {...props}></FindCountryBySpecificName>
      </Col>
      <Col span={8}>
        {" "}
        <FilterCountryName {...props}></FilterCountryName>
      </Col>
    </Row>
  );
};

export default Main;
