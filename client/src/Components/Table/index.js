import React from "react";
import "antd/dist/antd.css";
import { Table,  Row, AutoComplete } from "antd";
export const dataSource = [];

class TableComp extends React.Component {
  state = {
    sRT: "",
    dataSource: dataSource,
    nameSearch: "",
  };
 

  render() {

    // colums for table 

    const columns = [
      {
        title: "Flag",
        dataIndex: "flag",
        key: "flag",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        wdith:"100px"
      },
      {
        title: "Native Name",
        dataIndex: "nativeName",
        key: "nativeName",
      },
      {
        title: "Capital",
        dataIndex: "capital",
        key: "capital",
      },
      {
        title: "Languages",
        dataIndex: "languages",
        key: "languages",
      },
      {
        title: "Currencies",
        dataIndex: "currencies",
        key: "currencies",
      },
      {
        title: "Calling Code",
        dataIndex: "callingCodes",
        key: "callingCodes",
      },
      {
        title: "Region",
        dataIndex: "region",
        key: "region",
      },
      {
        title: "Population",
        dataIndex: "population",
        key: "population",
        sorter: (a, b) => a.population.length - b.population.length,
        sortDirections: ["descend", "ascend"],
      },
    ];

    return (
      <div>
        <Row>

          {/* for filter by name in Question 3 */ }

          {this.props.id === 3? (
            <AutoComplete
              dataSource={dataSource.map((person) => person.name)}
              onChange={(nameSearch) =>
                this.setState({
                  dataSource: dataSource.filter((person) =>
                    person.name.includes(nameSearch)
                  ),
                })
              }
              placeholder="Enter a country name. Begin with a capital letter "
              style={{ width: "100%" }}
              defaultOpen={false}
              open={false}
            />
          ) : (
            ""
          )}
        </Row>
        <Row>

          {/* for rendering the table component */}
          <Table
            title={() => this.props.title}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Row>
      </div>
    );
  }
}

export default TableComp;
