import React from 'react';
import "./FavouriteArtistsGraph.css";

const record = require("../record.json");

export default class FavouriteArtistsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  makeGraph() {
    let data = Object.entries(rankArtists());
    let max = Math.max(...Object.values(rankArtists()));

    const sortedData = alphabetize(data);
    sortedData.forEach((item, i) => {
      let artist = data[i][0];
      let value = data[i][1];
      let title = (value > 1) ?
        artist + ": " + value + " albums" :
        artist + ": " + value + " album";
      data[i] = (
        <div
          className="bar"
          style={{width: `${(100 / data.length).toFixed(2)}%`}}
          key={i}
          onMouseEnter={() => {
            this.props.callback(title);
            this.setState({ title });
          }}
        >
          <div
            className="whitespace"
            style={{flex: max - value}}
            title={title}
          />
          <div
            className="fill"
            style={{flex: value}}
            title={title}
          />
        </div>
      );
    });
    return data;
  };

  render() {
    return (
      <div className="container">
        <h3>Favourite Artists</h3>
        <div className="graph">
          {this.makeGraph()}
        </div>
      </div>
    );
  }
}



const rankArtists = () => {
  let artists = {};
  const keys = Object.keys(record);
  // Count number of albums by each artist
  keys.forEach((key, i) => {
    if (record[key].color.length > 0) {
      let artist = record[key].artist;
      if (artists[artist]) {
        artists[artist]++;
      } else {
        artists[artist] = 1;
      }
    }
  });
  return artists;
};

const alphabetize = data =>
  data.sort((a, b) => {
    var nameA = a[0].toUpperCase(); // ignore upper and lowercase
    var nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; // nameA comes first
    }
    if (nameA > nameB) {
      return 1; // nameB comes first
    }
    return 0; // names must be equal
  });