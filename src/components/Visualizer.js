import React from "react";
import "./Visualizer.css";
import invertColour from "../invertColour";
const record = require("../record.json");

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "months",
      title: "test"
    };
  }

  makeMonthList() {
    const list = [
      ["January"],
      ["February"],
      ["March"],
      ["April"],
      ["May"],
      ["June"],
      ["July"],
      ["August"],
      ["September"],
      ["October"],
      ["November"],
      ["December"],
    ];
    const keys = Object.keys(record);
    let i = 0;
    keys.forEach((key, j) => {
      if (record[key].color.length > 0) {
        let month = key.split(" ")[0];
        let title = `${key}: ${record[key].album} - ${record[key].artist}`;
        let block = (
          <div
            className="block"
            id={record[key].color}
            title={title}
            style={{backgroundColor: record[key].color}}
            key={j}
            onMouseEnter={() => {
              this.setState({ title });
            }}
          />
        );
        if (month === list[i][0]) {
          list[i].push(
            block
          )
        } else {
          i++;
          list[i].push(
            block
          )
        }
      }
    });
    return list;
  };

  makeYearList() {
    const list = [];
    const keys = Object.keys(record);

    keys.forEach((key, i) => {
      if (record[key].color.length > 0) {
        let title = `${key}: ${record[key].album} - ${record[key].artist}`
        list.push(
          <div
            className="block"
            id={record[key].color}
            title={title}
            style={{backgroundColor: record[key].color}}
            key={i}
            onMouseEnter={() => {
              this.setState({ title });
            }}
          >
            <div
              className="blockText"
              style={{color: invertColour(record[key].color, true)}}
            >
              {`${key}: ${record[key].album} - ${record[key].artist}`}
            </div>
          </div>
        );
      }
    });
    return list;
  };

  render() {
    let visualizer;
    if (this.state.mode === "year") {
      visualizer = <div className="visualizer">{this.makeYearList()}</div>
    } else if (this.state.mode === "months") {
      let monthList = this.makeMonthList();
      let list = [];
      monthList.forEach((month, i) => {
        let name = month[0];
        month[0] = <h3>{name}</h3>;
        list.push(<div className="month" key={name}>{month}</div>);
      });

      visualizer = <div className="visualizer-flow">{list}</div>
    }

    return (
      <div className="container">
        <div
          className="viz-buttons"
          onClick={() => {
            let nextMode = this.state.mode === "year" ? "months" : "year"
            this.setState({ mode: nextMode})
        }}>
          <h4
            className={this.state.mode === "months" ? "active" : "inactive"}
          >by month</h4>
          <h4 className="inactive">|</h4>
          <h4
            className={this.state.mode === "year" ? "active" : "inactive"}
          >all year</h4>
        </div>
        {visualizer}
        <h4>{this.state.title}</h4>
      </div>
    );
  }
}