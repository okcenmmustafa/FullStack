import React from "react";
import "antd/dist/antd.css";
import { Table, Input, Row, Typography, AutoComplete, Col } from "antd";
import Highlighter from "react-highlight-words";
export const dataSource = [];

class TableComp extends React.Component {
  state = {
    sRT: "",
    dataSource: dataSource,
    nameSearch: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          //value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
      </div>
    ),

    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.sRT]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ sRT: selectedKeys[0] });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ sRT: "" });
  };

  render() {
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
      },
      {
        title: "Capital",
        dataIndex: "capital",
        key: "capital",
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
          {this.props.id == "3" ? (
            <AutoComplete
              dataSource={dataSource.map((person) => person.name)}
              onChange={(nameSearch) =>
                this.setState({
                  dataSource: dataSource.filter((person) =>
                    person.name.includes(nameSearch)
                  ),
                })
              }
              style={{ width: "100%" }}
              defaultOpen={false}
              open={false}
            />
          ) : (
            ""
          )}
        </Row>
        <Row>
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
